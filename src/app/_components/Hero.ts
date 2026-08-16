// ============================================================================
// Hero — section (ported from the original landing HTML)
// ============================================================================

import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";
import { islandMarker } from "../lib/island-marker";

export function Hero(): NixTemplate {
  return raw(`
<section class="hero">
    <div class="hero-bg">
      <div class="hero-grid"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">
        <span class="dot"></span>
        v2.6.0 — Programmatic form values, reset baselines, and array patches
      </div>
      <a href="https://kit.nix-js.dev/" target="_blank" rel="noopener"
        style="display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;background:linear-gradient(90deg,rgba(52,50,200,0.15),rgba(43,199,240,0.15));border:1px solid rgba(43,199,240,0.3);font-size:0.8rem;font-weight:600;color:#2bc7f0;margin-bottom:32px;margin-left:10px;animation:fadeInUp 0.6s ease-out 0.1s both;text-decoration:none;">
        <span
          style="width:6px;height:6px;border-radius:50%;background:#2bc7f0;animation:blink 2s ease-in-out infinite"></span>
        Nix.js Kit 1.4.7 — Full-stack meta-framework →
      </a>
      <h1>
        Build reactive UIs in the browser<br>
        <span class="gradient-text">with no build step.</span>
      </h1>
      <p class="hero-subtitle">
        Signal-based reactivity that runs natively with ESM/import maps. No virtual DOM. No compiler.
        <strong>Use DOM-first JS libraries directly (Chart.js, Leaflet, AG Grid) and pick your path: web with Nix-UI
          or mobile with Nix-Ionic. Nix Query works in both.</strong>
      </p>
      <div class="hero-actions">
        <a href="https://docs.nix-js.dev/" class="btn-primary" target="_blank" rel="noopener">
          Get Started
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <a href="https://github.com/DeijoseDevelop/nix-js" class="btn-secondary" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
      <div class="hero-install">
        <div data-nix-js-island="CopyInstall" data-directive="load" data-props="{}"></div>
      </div>
      <div class="ecosystem-bar">
        <span class="eco-badge"><span class="eco-dot ts"></span> TypeScript-first</span>
        <span class="eco-badge"><span class="eco-dot mit"></span> MIT License</span>
        <span class="eco-badge"><span class="eco-dot test"></span> 524 tests passing</span>
        <span class="eco-badge"><span class="eco-dot"
            style="background:#10b981;box-shadow:0 0 10px rgba(16, 185, 129,0.5)"></span> 95.86% Coverage</span>
        <span class="eco-badge"><span class="eco-dot size"></span> ~14 KB gzipped</span>
        <span class="eco-badge"><span class="eco-dot" style="background:#60a5fa"></span> Nix UI</span>
        <span class="eco-badge"><span class="eco-dot" style="background:#fb923c"></span> Nix Query 1.3.6</span>
        <span class="eco-badge"><span class="eco-dot" style="background:#f472b6"></span> Nix Auth 1.0.1</span>
        <span class="eco-badge"><span class="eco-dot" style="background:#3432c8"></span> Nix.js Kit 1.4.7</span>
        <span class="eco-badge"><span class="eco-dot zero"></span> Zero dependencies</span>
      </div>

      <div class="hero-paths">
        <a class="hero-path-card" href="https://kit.nix-js.dev/" target="_blank" rel="noopener">
          <span class="hero-path-tag">Meta-framework</span>
          <h3>Build full-stack apps with Nix.js Kit</h3>
          <p>File-based routing, SSG, SSR, ISR, islands, content collections, and zero client JS by default. Next.js
            conventions with Astro-style islands.</p>
          <span class="hero-path-action">Explore Nix.js Kit -></span>
        </a>
        <a class="hero-path-card" href="https://ui.nix-js.dev/" target="_blank" rel="noopener">
          <span class="hero-path-tag">Web Path</span>
          <h3>Build web products with Nix.js + Nix-UI</h3>
          <p>Compose interfaces with Nix-UI, and plug Nix Query when you need server-state, retries, and cache.</p>
          <span class="hero-path-action">Launch web apps -></span>
        </a>
        <a class="hero-path-card" href="#nix-ionic" rel="noopener">
          <span class="hero-path-tag">Mobile Path</span>
          <h3>Ship mobile with Nix-Ionic</h3>
          <p>Ionic routing + Nix.js reactivity for one codebase targeting web, Android, and iOS, with optional Nix
            Query data layer.</p>
          <span class="hero-path-action">Launch mobile apps -></span>
        </a>
      </div>
    </div>
  </section>

  <!-- Stats -->
  `);
}
