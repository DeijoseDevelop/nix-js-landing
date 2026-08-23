import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function IronBikers(): NixTemplate {
  return raw(`
<section id="iron-bikers" class="section case-study-section">
    <div class="container">
      <div class="case-study-grid">
        <div class="animate-on-scroll">
          <div class="case-kicker">Success Case</div>
          <h2 class="case-title">Iron Bikers: <span class="gradient-text">mobile app</span> for biker community</h2>
          <p class="case-text">
            We developed a full-featured mobile app to manage their community: member registration, route and event
            coordination, internal communication, and administrative tools—all from the phone.
          </p>

          <div class="case-tags">
            <span class="case-tag">Mobile App</span>
            <span class="case-tag">Android & iOS</span>
            <span class="case-tag">Community Management</span>
            <span class="case-tag">Routes & Events</span>
          </div>

          <div class="case-metrics">
            <div class="case-metric">
              <strong>4</strong>
              <span>Weeks</span>
            </div>
            <div class="case-metric">
              <strong>Android</strong>
              <span>& iOS</span>
            </div>
            <div class="case-metric">
              <strong>100%</strong>
              <span>Custom Built</span>
            </div>
          </div>
        </div>

        <div class="case-phones animate-on-scroll">
          <div class="case-phone-stack">
            <div class="case-phone-main">
              <div class="case-phone-shell">
                <div class="case-phone-notch"></div>
                <div class="case-phone-screen">
                  <div class="ib-slider">
                    <img src="/images/app-1.webp" alt="Iron Bikers App Login" width="300" height="600" loading="lazy"
                      decoding="async">
                    <img src="/images/app-3.webp" alt="Iron Bikers App Light Mode" width="300" height="600"
                      loading="lazy" decoding="async">
                    <img src="/images/app-2.webp" alt="Iron Bikers App Dark Mode" width="300" height="600"
                      loading="lazy" decoding="async">
                  </div>
                </div>
              </div>
              <div class="case-phone-home"></div>
            </div>

            <div class="case-phone-secondary" aria-hidden="true">
              <div class="case-phone-shell">
                <div class="case-phone-notch"></div>
                <div class="case-phone-screen">
                  <img src="/images/app-2.webp" alt="App Back Screen" width="260" height="560" loading="lazy"
                    decoding="async">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Showcases -->
  `);
}
