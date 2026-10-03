import {
  DEFAULT_ANTIGRAVITY_CLIENT_PROFILE,
  normalizeAntigravityClientProfile,
  type AntigravityClientProfile,
} from "@/shared/constants/antigravityClientProfile";
import { getAntigravityContentHeaders } from "./antigravityHeaders.ts";
import type { AntigravityCredentialsLike } from "./antigravityIdentity.ts";
import {
  resolveAntigravityCliVersion,
  resolveAntigravityIdeVersion,
} from "./antigravityVersion.ts";

export {
  ANTIGRAVITY_CLIENT_PROFILE_VALUES,
  DEFAULT_ANTIGRAVITY_CLIENT_PROFILE,
  normalizeAntigravityClientProfile,
  type AntigravityClientProfile,
} from "@/shared/constants/antigravityClientProfile";

type AntigravityProfileCredentials = AntigravityCredentialsLike & {
  providerSpecificData?: Record<string, unknown> | null;
};

const ABSENT_CONTENT_IDENTITY_HEADERS = [
  "x-client-name",
  "x-client-version",
  "x-machine-id",
  "x-vscode-sessionid",
  "X-Goog-Api-Client",
  "Client-Metadata",
] as const;

export function getAntigravityClientProfile(
  credentials?: AntigravityProfileCredentials | null
): AntigravityClientProfile {
  const fromProviderData =
    credentials?.providerSpecificData &&
    typeof credentials.providerSpecificData === "object" &&
    !Array.isArray(credentials.providerSpecificData)
      ? credentials.providerSpecificData.clientProfile
      : undefined;

  return normalizeAntigravityClientProfile(fromProviderData);
}

export function resolveAntigravityClientVersion(
  profile: AntigravityClientProfile
): Promise<string> {
  return profile === "cli" ? resolveAntigravityCliVersion() : resolveAntigravityIdeVersion();
}

export function removeHeaderCaseInsensitive(headers: Record<string, string>, name: string): void {
  const lowerName = name.toLowerCase();
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === lowerName) {
      delete headers[key];
    }
  }
}

/** Apply the selected official client identity to a Cloud Code content request. */
export function applyAntigravityClientProfileHeaders(
  headers: Record<string, string>,
  credentials: AntigravityProfileCredentials | null | undefined,
  _body: unknown
): AntigravityClientProfile {
  const profile = getAntigravityClientProfile(credentials);
  const identityHeaders = getAntigravityContentHeaders(profile);

  removeHeaderCaseInsensitive(headers, "User-Agent");
  headers["User-Agent"] = identityHeaders["User-Agent"];
  for (const name of ABSENT_CONTENT_IDENTITY_HEADERS) {
    removeHeaderCaseInsensitive(headers, name);
  }

  // Cloud Code rejects `x-goog-user-project` with 403 on streamGenerateContent
  // (#2703 replayed 2703x in proxy_logs: every request burned a refused send
  // before the header-stripped retry succeeded). The project travels in the
  // request envelope's `project` field, which is what the official clients send.
  // executeAttempt.ts keeps the strip-and-retry as a no-op safety net.
  removeHeaderCaseInsensitive(headers, "x-goog-user-project");

  return profile;
}
