// ============================================================================
// Generate sitemap.xml + robots.txt after the SSG build
// ============================================================================

import { generateSitemap, generateRobots } from "@deijose/nix-js-kit/seo";

const SITE_URL = "https://nix-js.dev";

await generateSitemap({
  siteUrl: SITE_URL,
  outDir: "dist",
  urls: [{ url: "/", priority: 1.0, changefreq: "weekly" }],
});

await generateRobots({
  siteUrl: SITE_URL,
  outDir: "dist",
});

console.log("✓ Generated sitemap.xml + robots.txt");
