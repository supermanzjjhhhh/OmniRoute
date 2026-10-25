#!/bin/bash
# 部署方式（oracle-main，opc 用户 crontab）：
# */7 * * * * /data/workspace/omniroute/diag/self-heal.sh
# */5 * * * * /data/workspace/omniroute/diag/native-snap-if-high.sh
# RSS 高位自动取证（只读，不重启）：cgroup 超阈值时抓 omniroute 主进程 smaps。
# 与 self-heal.sh 互补：本脚本阈值更低、可反复触发（冷却 30 分钟），记录增长过程；
# self-heal 是兜底重启。归属：2026-10-25 native 侧泄漏排查。
THRESH_MB=1500
COOLDOWN_SEC=1800
LOG=/data/workspace/omniroute/diag/native-snap.log
LAST=/data/workspace/omniroute/diag/native-snap.last
STAMP=$(date -u +%FT%TZ)

if [ -f "$LAST" ]; then
  last_epoch=$(date -d "$(cat "$LAST")" +%s 2>/dev/null || echo 0)
  [ $(( $(date -d "$STAMP" +%s) - last_epoch )) -lt $COOLDOWN_SEC ] && exit 0
fi

cid=$(docker inspect omniroute --format '{{.Id}}' 2>/dev/null)
[ -z "$cid" ] && exit 0
bytes=$(cat "/sys/fs/cgroup/system.slice/docker-$cid.scope/memory.current" 2>/dev/null) || exit 0
case "$bytes" in ''|*[!0-9]*) exit 0;; esac
mb=$((bytes / 1048576))
[ "$mb" -lt "$THRESH_MB" ] && exit 0

pid=$(docker inspect omniroute --format '{{.State.Pid}}' 2>/dev/null)
[ -z "$pid" ] || [ "$pid" = "0" ] && exit 0
launcher=$(ps --ppid "$pid" -o pid= 2>/dev/null | head -1 | tr -d ' ')
target=$pid
[ -n "$launcher" ] && { t=$(ps --ppid "$launcher" -o pid= 2>/dev/null | head -1 | tr -d ' '); [ -n "$t" ] && target=$t; }

base=/data/workspace/omniroute/diag/native-high-$STAMP
sudo cat /proc/$target/smaps > "$base.smaps.txt" 2>>"$LOG"
sudo awk '/^[0-9a-f]+-/{name=$6; next} /^Rss:/{key=(name==""?"[anon]":name); sum[key]+=$2} END{for(k in sum) printf "%10d KB  %s\n", sum[k], k}' \
  /proc/$target/smaps | sort -rn > "$base.smaps.summary.txt"
vmrss=$(awk '/^VmRSS/{print $2}' /proc/$target/status 2>/dev/null)
echo "$STAMP cgroup=${mb}MB target_rss=$((vmrss/1024))MB pid=$target smaps=$base" >> "$LOG"
echo "$STAMP" > "$LAST"
