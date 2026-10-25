#!/bin/bash
# 部署方式（oracle-main，opc 用户 crontab）：
# */7 * * * * /data/workspace/omniroute/diag/self-heal.sh
# */5 * * * * /data/workspace/omniroute/diag/native-snap-if-high.sh
# RSS/堆外压力自愈：连续 N 次 cgroup 内存超阈值 → 抓 native 现场后重启容器。
# 背景：2026-10-25 事故中 heapUsed 恒为 300-400MB 而 RSS=2.0GB（native 侧泄漏），
# 旧版脚本只看 heapUsed 永远不触发。cgroup memory.current 覆盖容器内全部进程，
# 不依赖 inspector（旧版每 */7 必失败一次的根因），重启前强制抓 smaps 取证。
THRESH_MB=1650
SUSTAIN=2
COOLDOWN_MIN=20
LOG=/data/workspace/omniroute/diag/self-heal.log
STATE=/data/workspace/omniroute/diag/self-heal.state
LAST=/data/workspace/omniroute/diag/self-heal.last
STAMP=$(date -u +%FT%TZ)

CUR_MB() {
  local cid bytes
  cid=$(docker inspect omniroute --format '{{.Id}}' 2>/dev/null)
  [ -z "$cid" ] && return 1
  bytes=$(cat "/sys/fs/cgroup/system.slice/docker-$cid.scope/memory.current" 2>/dev/null) || return 1
  case "$bytes" in ''|*[!0-9]*) return 1;; esac
  echo $((bytes / 1048576))
}
# 2026-10-25 定性：泄漏在 native/堆外，smaps 是唯一能定位模块的证据源
capture_native_evidence() {
  local pid=$(docker inspect omniroute --format '{{.State.Pid}}' 2>/dev/null) target
  [ -z "$pid" ] || [ "$pid" = "0" ] && return 1
  # 容器 State.Pid 是 external-connector → 其子 run-standalone.mjs → 再子 omniroute 主进程
  local launcher=$(ps --ppid "$pid" -o pid= 2>/dev/null | head -1 | tr -d ' ')
  if [ -n "$launcher" ]; then
    target=$(ps --ppid "$launcher" -o pid= 2>/dev/null | head -1 | tr -d ' ')
  fi
  [ -z "$target" ] && target=$pid
  local base=/data/workspace/omniroute/diag/native-high-$STAMP
  sudo cat /proc/$target/smaps > "$base.smaps.txt" 2>>"$LOG"
  sudo awk '/^[0-9a-f]+-/{name=$6; next} /^Rss:/{key=(name==""?"[anon]":name); sum[key]+=$2} END{for(k in sum) printf "%10d KB  %s\n", sum[k], k}' \
    /proc/$target/smaps | sort -rn > "$base.smaps.summary.txt"
  echo "$STAMP rss_kb=$(awk '/^VmRSS/{print $2}' /proc/$target/status 2>/dev/null) smaps=$base" >> "$LOG"
}

HEAP=$(CUR_MB)
if [ -z "$HEAP" ]; then
  echo "$STAMP cgroup 采样失败，跳过本次判断" >> "$LOG"; exit 0
fi

# 冷却：刚重启后内存未涨起来，不重复动作
if [ -f "$LAST" ]; then
  last_ts=$(cat "$LAST")
  last_epoch=$(date -d "$last_ts" +%s 2>/dev/null || echo 0)
  now_epoch=$(date -d "$STAMP" +%s)
  if [ $((now_epoch - last_epoch)) -lt $((COOLDOWN_MIN * 60)) ]; then
    exit 0
  fi
fi

COUNT=$(cat "$STATE" 2>/dev/null || echo 0)
if [ "$HEAP" -lt "$THRESH_MB" ]; then
  [ "$COUNT" != "0" ] && echo "$STAMP cgroup=${HEAP}MB 回落，清零计数（曾 $COUNT）" >> "$LOG"
  echo 0 > "$STATE"; exit 0
fi
COUNT=$((COUNT+1)); echo "$COUNT" > "$STATE"
echo "$STAMP cgroup=${HEAP}MB 超阈值${THRESH_MB}MB，第 $COUNT/$SUSTAIN 次" >> "$LOG"
[ "$COUNT" -lt "$SUSTAIN" ] && exit 0

capture_native_evidence
echo 0 > "$STATE"; echo "$STAMP" > "$LAST"
echo "$STAMP 触发自愈重启（cgroup=${HEAP}MB）" >> "$LOG"
docker restart omniroute >> "$LOG" 2>&1
