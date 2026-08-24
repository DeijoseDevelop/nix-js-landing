import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function NixIonic(): NixTemplate {
  return raw(`
<section class="section nix-ionic-section" id="nix-ionic">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label" style="color:var(--orange)">📱 Mobile Apps</div>
        <h2 class="section-title">Nix.js goes&nbsp;<span
            style="background:linear-gradient(135deg,var(--orange),var(--accent-light));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent">mobile.</span>
        </h2>
        <p class="section-desc">
          <strong>Nix-Ionic</strong> bridges Nix.js reactivity with the full Ionic component library.
          Build native-quality mobile apps with signals, client-side routing, and&nbsp;<em>modular loading</em>.
          Since <strong>v1.x</strong>, only 6 routing-critical Ionic elements are registered by default, and the rest
          is imported on demand.
        </p>
      </div>

      <!-- Hero layout: text + code -->
      <div class="ionic-hero-layout animate-on-scroll">
        <div class="ionic-hero-text">
          <h3>Ionic Web Components.<br>Nix.js Reactivity.</h3>
          <p>
            Install <code
              style="font-family:var(--font-mono);font-size:0.85em;color:var(--orange);background:rgba(251,146,60,0.1);padding:2px 6px;border-radius:4px">@deijose/nix-ionic</code>
            and call <code
              style="font-family:var(--font-mono);font-size:0.85em;color:var(--accent-light);background:var(--accent-subtle);padding:2px 6px;border-radius:4px">setupNixIonic()</code>.
            Only import the components your app actually uses — the bundler tree-shakes everything else.
          </p>
          <ul class="ionic-features-list">
            <li><span class="ionic-check">✓</span> Modular loading — import only what you need</li>
            <li><span class="ionic-check">✓</span> Core bootstrap registers only 6 essential Ionic elements</li>
            <li><span class="ionic-check">✓</span> Pre-made bundles: layout, forms, overlays, navigation…</li>
            <li><span class="ionic-check">✓</span> Full Ionic routing with ion-router &amp; ion-back-button</li>
            <li><span class="ionic-check">✓</span> Compatible with Capacitor for true native deployment</li>
            <li><span class="ionic-check">✓</span> Signals-first — all state is reactive by default</li>
          </ul>
          <div class="ionic-install-box">
            <span><span class="dollar">$</span> npm install <span class="pkg">@deijose/nix-ionic</span></span>
          </div>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;font-size:0.78rem;color:var(--text-muted)">
            <span
              style="padding:6px 10px;border:1px solid var(--border);border-radius:999px;background:rgba(251,146,60,0.08)">Nix-Ionic
              1.4.14</span>
            <span
              style="padding:6px 10px;border:1px solid var(--border);border-radius:999px;background:rgba(96,165,250,0.08)">Nix.js
              3.4.0 compatible</span>
            <span
              style="padding:6px 10px;border:1px solid var(--border);border-radius:999px;background:rgba(52,211,153,0.08)">Ionic
              Core 8.x</span>
          </div>
        </div>

        <div class="ionic-code-panel">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-filename">main.ts</span>
          </div>
          <div class="code-body">
            <pre><span class="kw">import</span> { setupNixIonic, IonRouterOutlet } <span class="kw">from</span> <span class="str">"@deijose/nix-ionic"</span>;
<span class="kw">import</span> { NixComponent, html, mount } <span class="kw">from</span> <span class="str">"@deijose/nix-js"</span>;

<span class="cmt">// Import only the bundles you need</span>
<span class="kw">import</span> { layoutComponents } <span class="kw">from</span>
  <span class="str">"@deijose/nix-ionic/bundles/layout"</span>;
<span class="kw">import</span> { formComponents } <span class="kw">from</span>
  <span class="str">"@deijose/nix-ionic/bundles/forms"</span>;

<span class="fn">setupNixIonic</span>({
  components: [...layoutComponents, ...formComponents],
});

<span class="cmt">// Ionic router — uses ion-router under the hood</span>
<span class="kw">const</span> outlet = <span class="kw">new</span> <span class="fn">IonRouterOutlet</span>([
  { path: <span class="str">"/"</span>,         component: (ctx) => <span class="kw">new</span> <span class="fn">HomePage</span>(ctx) },
  { path: <span class="str">"/task/:id"</span>, component: (ctx) => <span class="kw">new</span> <span class="fn">TaskDetailPage</span>(ctx) },
]);

<span class="kw">class</span> <span class="fn">App</span> <span class="kw">extends</span> <span class="type">NixComponent</span> {
  <span class="fn">render</span>() {
    <span class="kw">return</span> <span class="fn">html</span><span class="str">\`&lt;ion-app&gt;\${outlet}&lt;/ion-app&gt;\`</span>;
  }
}

<span class="fn">mount</span>(<span class="kw">new</span> <span class="fn">App</span>(), <span class="str">"#app"</span>);</pre>
          </div>
        </div>
      </div>

      <!-- Feature cards -->
      <div class="ionic-features-grid">
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">⚡</span>
          <h4>Modular Loading</h4>
          <p>Register only the Ionic components your app uses. The runtime initializes a minimal routing core first,
            then you add bundles (or individual components) so the bundler tree-shakes the rest.</p>
        </div>
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">📦</span>
          <h4>8 Category Bundles</h4>
          <p>Layout, Navigation, Forms, Lists, Feedback, Buttons, Overlays, and All. Import by category or mix & match
            individual components.</p>
        </div>
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">🔗</span>
          <h4>Sub-path Exports</h4>
          <p>First-class <code style="color:var(--orange);font-size:0.85em">package.json exports</code> let bundlers
            resolve only the chunks you import. Full tree-shaking by design.</p>
        </div>
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">📡</span>
          <h4>Signals-First State</h4>
          <p>Every page and component uses Nix.js signals. Form inputs, tab states, modal toggles — all reactive without
            extra wiring.</p>
        </div>
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">🧭</span>
          <h4>Built-in Routing</h4>
          <p>ion-router, ion-route, ion-router-outlet, and ion-back-button are always registered. Deep linking and
            history-api navigation work out of the box.</p>
        </div>
        <div class="ionic-feature-card animate-on-scroll">
          <span class="ionic-feature-icon">📲</span>
          <h4>Capacitor Ready</h4>
          <p>Wrap the output with Capacitor to deploy as a real iOS or Android app. Same codebase, same signals, native
            shell.</p>
        </div>
      </div>

      <!-- Bundle showcase -->
      <div class="ionic-bundle-section animate-on-scroll">
        <div class="ionic-bundle-header">
          <h3>Available Bundles — v1.4.14</h3>
          <span class="ionic-bundle-badge">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--orange)"></span>
            Tree-shakeable
          </span>
        </div>
        <div class="ionic-bundles-grid">
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">layout</div>
            <div class="ionic-bundle-pill-desc">header, toolbar, title, content, footer, buttons</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">navigation</div>
            <div class="ionic-bundle-pill-desc">menu, menu-button, menu-toggle</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">forms</div>
            <div class="ionic-bundle-pill-desc">input, textarea, checkbox, radio, select, toggle, searchbar</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">lists</div>
            <div class="ionic-bundle-pill-desc">list, item, label, thumbnail, avatar, card</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">feedback</div>
            <div class="ionic-bundle-pill-desc">spinner, progress-bar, skeleton-text, badge, chip, note</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">buttons</div>
            <div class="ionic-bundle-pill-desc">button, fab, fab-button, fab-list, ripple-effect</div>
          </div>
          <div class="ionic-bundle-pill">
            <div class="ionic-bundle-pill-name">overlays</div>
            <div class="ionic-bundle-pill-desc">modal, popover, toast, alert, action-sheet</div>
          </div>
          <div class="ionic-bundle-pill" style="border-color:rgba(251,146,60,0.3);background:rgba(251,146,60,0.04)">
            <div class="ionic-bundle-pill-name" style="color:var(--text-secondary)">all</div>
            <div class="ionic-bundle-pill-desc">Everything — backward-compatible, ~35 KB gz</div>
          </div>
        </div>

        <div
          style="margin-bottom:16px;font-size:0.82rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px">
          Legacy migration guide (v0.2.x -> v1.x)</div>
        <div class="ionic-migration-box">
          <span class="diff-cmt">// Before — loaded all components automatically</span><br>
          <span class="diff-del">- setupNixIonic();</span><br><br>
          <span class="diff-cmt">// After — you choose what to load</span><br>
          <span class="diff-add">+ import { allComponents } from "@deijose/nix-ionic/bundles/all";</span><br>
          <span class="diff-add">+ setupNixIonic({ components: allComponents });</span><br><br>
          <span class="diff-cmt">// Or go modular for the smallest possible bundle</span><br>
          <span class="diff-add">+ import { layoutComponents } from "@deijose/nix-ionic/bundles/layout";</span><br>
          <span class="diff-add">+ setupNixIonic({ components: [...layoutComponents, defineIonButton] });</span>
        </div>

        <div style="margin-top:24px;display:flex;align-items:center;gap:16px;flex-wrap:wrap">
          <a href="https://github.com/DeijoseDevelop/create-nix-app/tree/main/template-nix-ionic" target="_blank"
            rel="noopener" class="btn-secondary" style="padding:10px 22px;font-size:0.88rem">
            Starter Template
          </a>
          <a href="https://www.npmjs.com/package/@deijose/nix-ionic" target="_blank" rel="noopener" class="btn-primary"
            style="padding:10px 22px;font-size:0.88rem">
            View on npm
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="https://github.com/DeijoseDevelop/nix-ionic" target="_blank" rel="noopener" class="btn-secondary"
            style="padding:10px 22px;font-size:0.88rem">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Case Study: Iron Bikers -->
  `);
}
