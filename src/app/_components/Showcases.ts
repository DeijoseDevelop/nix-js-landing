import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function Showcases(): NixTemplate {
  return raw(`
<section class="section showcases-section" id="showcases">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🌟 Showcases</div>
        <h2 class="section-title">Built with <span class="gradient-text">Nix.js</span></h2>
        <p class="section-desc">Discover how the community is leveraging the Nix.js ecosystem to build high-performance
          UIs without the complexity.</p>
      </div>

      <div class="showcases-grid">
        <!-- Card 1 -->
        <a href="https://nix-js-crypto-dashboard.vercel.app/" target="_blank" rel="noopener"
          class="showcase-card animate-on-scroll">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/nix-crypto-dashboard.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/nix-crypto-dashboard.png"
              alt="Real-time cryptocurrency dashboard built with Nix.js reactivity and signals"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>Nix.js Crypto Dashboard</text></svg>'">
          </div>
          <div class="showcase-content">
            <h3>Crypto Dashboard</h3>
            <p>A real-time cryptocurrency tracking dashboard demonstrating fine-grained reactivity, live data fetching,
              and dynamic UI updates.</p>
            <span class="showcase-link">Visit project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>

        <!-- Card 2 -->
        <a href="https://parcial-1-analisis-2-unicolombo.vercel.app/home" target="_blank" rel="noopener"
          class="showcase-card animate-on-scroll">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/nix-student-library.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/nix-student-library.png"
              alt="Academic Management System built using Nix.js and Nix-UI components"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>Academic System</text></svg>'">
          </div>
          <div class="showcase-content">
            <h3>University Academic System</h3>
            <p>An academic tracking platform showcasing client-side routing, global state management, and nested layouts
              powered by Nix.js.</p>
            <span class="showcase-link">Visit project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>

        <!-- Card 3 -->
        <a href="https://nix-todo-app.vercel.app/" target="_blank" rel="noopener"
          class="showcase-card animate-on-scroll">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/premium-nix-todo-app.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/premium-nix-todo-app.png" alt="Nix.js Premium TodoApp"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>Premium TodoApp</text></svg>'">
          </div>
          <div class="showcase-content">
            <h3>Premium TodoApp</h3>
            <p>High-performance task management with real-time stats, reactive stores, and advanced filtering with
              debounce.</p>
            <span class="showcase-link">Visit project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>

        <!-- Card 4 -->
        <a href="https://kit.nix-js.dev/" target="_blank" rel="noopener" class="showcase-card animate-on-scroll">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/nix-js-kit-docs.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/nix-js-kit-docs.png"
              alt="Nix.js Kit documentation site — built with Nix.js Kit itself (dogfooding)"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>Nix.js Kit Docs</text></svg>'">
          </div>
          <div class="showcase-content">
            <h3>Nix.js Kit Docs</h3>
            <p>The official Nix.js Kit documentation — built with Nix.js Kit itself. File-based routing, SSG, islands,
              Shiki code highlighting, full-text search, and SEO out of the box.</p>
            <span class="showcase-link">Visit project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  `);
}
