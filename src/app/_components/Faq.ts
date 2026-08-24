/**
 * FAQ section: sidebar + static accordion list. Open/close behavior is
 * wired by the Faq island.
 */

import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function Faq(): NixTemplate {
  return raw(`
<section class="section faq-section" id="faq">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">❓ FAQ</div>
        <h2 class="section-title">Common questions,<br><span class="gradient-text">straight answers.</span></h2>
      </div>
      <div class="faq-layout">
        <div class="faq-sidebar animate-on-scroll">
          <h3>Still have questions?</h3>
          <p>Browse the full documentation or open an issue on GitHub. The community is small but growing fast.</p>
          <a href="https://github.com/DeijoseDevelop/nix-js" target="_blank" rel="noopener" class="faq-contact">
            Open an issue on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div class="faq-list animate-on-scroll">

          <div class="faq-item">
            <button class="faq-question">
              What's new in Nix.js 3.4.0?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Nix.js 3.4.0 moves partial attribute interpolation to the Vite plugin
                (<code>@deijose/vite-plugin-nix-js</code> >= 1.1.0), making the core runtime leaner by ~2 KB.
                The plugin's compile-time lexer rewrites partials into full bindings before the core sees them.
                Nix.js Kit 2.3.0 delegates to the plugin when installed, falling back to its legacy transform.
                The ecosystem packages <code>@deijose/nix-query</code>, <code>@deijose/nix-ionic</code>,
                and <code>@deijose/nix-ui</code> are aligned with this release.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              Is Nix.js production-ready?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Yes. It is designed for production with zero runtime dependencies in the core, strong TypeScript
                support, and a practical ecosystem for web and mobile workflows.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              Can I use JS libraries that touch the DOM directly?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Yes. Nix.js works directly with DOM-first libraries like <code>Chart.js</code>, <code>Leaflet</code>,
                and <code>AG Grid</code> without wrappers. If it runs in browser JavaScript, you can integrate it.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              How do I handle async requests and caching in web or mobile apps?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Use <code>@deijose/nix-query</code> for async requests, query cache, retries, and invalidation.
                It is platform-agnostic and works in both web and mobile stacks. Start with:
                <code>npm install @deijose/nix-js @deijose/nix-query</code>.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              Can I build mobile apps with Nix.js?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Yes. Use <code>@deijose/nix-ionic@1.4.14</code> with Ionic Core for routing + native-style UI, then wrap
                with Capacitor for Android/iOS deployment using the same codebase.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              Do I need migration changes from Nix.js 1.x?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Usually minimal. Most upgrades are dependency updates plus a quick validation pass over routes,
                reactive effects, and tooling integrations.
              </div>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              Can I verify benchmark numbers myself?
              <span class="faq-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div class="faq-answer">
              <div class="faq-answer-inner">
                Yes. Run the same benchmark scenarios from the public playground:
                <a href="https://js-benchmark.nix-js.dev/" target="_blank" rel="noopener">Open live benchmarks
                  &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
    <div data-nix-js-island="Faq" data-directive="load" data-props="{}"></div>
  `);
}
