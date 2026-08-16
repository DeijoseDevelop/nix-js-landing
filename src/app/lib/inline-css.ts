// ============================================================================
// Inline CSS — reads all style files, minifies them, and outputs a single CSS
// string (zero render-blocking requests: everything ships inside one <style>)
// ============================================================================

import { readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { transform } from "esbuild";

export async function getInlineCss(): Promise<string> {
  const root = resolve(process.cwd());
  const stylesDir = join(root, "src", "styles");

  const files = [
    "tokens.css",
    "base.css",
    "layout.css",
    "sections.css",
    "components.css",
    "responsive.css",
  ];

  const parts: string[] = [];
  for (const file of files) {
    try {
      const content = await readFile(join(stylesDir, file), "utf8");
      parts.push(content);
    } catch {
      // Skip missing files
    }
  }

  // Minify to shrink the inline <style> shipped in every HTML page.
  const { code } = await transform(parts.join("\n\n"), {
    loader: "css",
    minify: true,
  });
  return code;
}
