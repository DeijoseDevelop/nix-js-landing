// ============================================================================
// Server-safe island marker — emits the same HTML markers as island() but
// without calling document.createElement (which doesn't exist in SSG/Node).
// Supports optional fallback content rendered server-side inside the marker.
// ============================================================================

import { raw } from "@deijose/nix-js-kit/content";

export function islandMarker(
  name: string,
  props: unknown = {},
  directive = "load",
  fallback = "",
) {
  const escaped = name
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const serialized = JSON.stringify(props ?? null)
    .replace(/</g, "\\u003c").replace(/'/g, "\\u0027");
  return raw(
    `<div data-nix-js-island="${escaped}" data-directive="${directive}" data-props='${serialized}'>${fallback}</div>`,
  );
}
