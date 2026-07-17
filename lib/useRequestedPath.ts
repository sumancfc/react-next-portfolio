import { useSyncExternalStore } from "react";

// Never actually changes without a full remount, so there's nothing to
// subscribe to — this hook exists purely for the hydration-safe read.
function subscribe() {
  return () => {};
}

function getClientPath() {
  return window.location.pathname;
}

/**
 * The URL a visitor actually typed, read without causing a hydration
 * mismatch. Next.js prerenders app/not-found.tsx as a static "/_not-found"
 * page, so usePathname() there always reports that literal internal
 * segment rather than the real, wrong URL. useSyncExternalStore lets the
 * server/first-paint render stay in sync with `fallback`, then swaps to
 * the real window.location.pathname once mounted in the browser.
 */
export function useRequestedPath(fallback: string): string {
  return useSyncExternalStore(subscribe, getClientPath, () => fallback);
}
