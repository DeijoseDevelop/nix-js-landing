import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function Showcases(): NixTemplate {
  return raw(`
<section class="section showcases-section" id="showcases">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🌟 Showcases</div>
        <h2 class="section-title">Built with <span class="gradient-text">Nix.js</span></h2>
        <p class="section-desc">Real production apps powered by the Nix.js ecosystem — from mobile to web to full-stack platforms.</p>
      </div>

      <div class="showcases-grid">
        <!-- BikerOS Landing -->
        <a href="https://www.bikeros.co/" target="_blank" rel="noopener"
          class="showcase-card animate-on-scroll">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/home.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/home.webp"
              alt="BikerOS landing page — built with Nix.js Kit (SSG, islands, SEO)"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>BikerOS Landing</text></svg>'">
          </div>
          <div class="showcase-content">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-size:0.7rem;font-weight:700;color:var(--accent-light);background:var(--accent-subtle);padding:3px 8px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px">Nix.js Kit</span>
              <span style="font-size:0.7rem;font-weight:600;color:var(--text-muted)">SSG + Islands</span>
            </div>
            <h3>BikerOS Landing</h3>
            <p>Marketing site for a motorcycle club platform. SSG with islands for interactive pricing,
              FAQ accordion, and scroll reveal. SEO, sitemap, and content collections out of the box.</p>
            <span class="showcase-link">Visit bikeros.co
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </a>

        <!-- BikerOS App -->
        <div class="showcase-card animate-on-scroll" style="cursor:default">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/sos.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/sos.webp"
              alt="BikerOS mobile app — built with Nix-Ionic and Nix Query"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>BikerOS App</text></svg>'">
          </div>
          <div class="showcase-content">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-size:0.7rem;font-weight:700;color:var(--orange);background:rgba(251,146,60,0.1);padding:3px 8px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px">Nix-Ionic</span>
              <span style="font-size:0.7rem;font-weight:600;color:var(--text-muted)">Mobile + Offline</span>
            </div>
            <h3>BikerOS Mobile App</h3>
            <p>Motorcycle club management app with SOS emergencies, live GPS tracking, offline routes,
              ICE medical info, and event RSVP. Nix-Ionic components, Nix Query for server state,
              and Capacitor for native deployment.</p>
            <span class="showcase-link" style="color:var(--text-muted)">Android &amp; iOS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>

        <!-- BikerOS Web Admin -->
        <div class="showcase-card animate-on-scroll" style="cursor:default">
          <div class="showcase-image">
            <picture>
            <source srcset="/images/showcases/panel_admin.webp" type="image/webp" />
            <img loading="lazy" src="/images/showcases/panel_admin.webp"
              alt="BikerOS admin panel — built with Nix.js and Nix Query"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\'>
          </picture><rect width=\\'100%\\' height=\\'100%\\' fill=\\'%2316161f\\'/><text x=\\'50%\\' y=\\'50%\\' fill=\\'%23a0a0b5\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\' font-family=\\'sans-serif\\' font-weight=\\'bold\\' font-size=\\'1.5rem\\'>BikerOS Admin</text></svg>'">
          </div>
          <div class="showcase-content">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span style="font-size:0.7rem;font-weight:700;color:var(--blue);background:rgba(96,165,250,0.1);padding:3px 8px;border-radius:999px;text-transform:uppercase;letter-spacing:0.5px">Nix.js + Query</span>
              <span style="font-size:0.7rem;font-weight:600;color:var(--text-muted)">Dashboard</span>
            </div>
            <h3>BikerOS Admin Panel</h3>
            <p>Web dashboard for club administrators. Member management, route builder with interactive maps,
              event dashboard, billing and invoicing. Nix.js for UI, Nix Query for data fetching and cache.</p>
            <span class="showcase-link" style="color:var(--text-muted)">Web app
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  `);
}
