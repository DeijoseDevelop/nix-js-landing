import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function DxEcosystem(): NixTemplate {
  return raw(`
<section class="section" id="dx-ecosystem">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🛠️ DX Ecosystem</div>
        <h2 class="section-title">New in the ecosystem.<br>Testing + Vite + CLI.</h2>
        <p class="section-desc">First-party tooling that fits the framework: a test harness, a Vite plugin for
          zero-config transformation, and two CLIs for scaffolding and code generation.</p>
      </div>
      <div class="dx-ecosystem-grid">
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">🧪</span>
            <h3>Nix.js Testing</h3>
            <span class="badge-new" style="margin-left:auto">New</span>
          </div>
          <p>Render components, interact with signals, and assert against the real DOM with helpers designed for Nix.js.
            No synthetic wrappers required.</p>
          <code><span style="color:var(--accent-light)">const</span> { getByText } = <span
              style="color:var(--blue)">render</span>(<span style="color:var(--blue)">Counter</span>());

            <span style="color:var(--blue)">expect</span>(<span style="color:var(--blue)">getByText</span>(<span
              style="color:var(--green)">"0"</span>)).<span style="color:var(--blue)">toBeTruthy</span>();
            count.value++;
            <span style="color:var(--blue)">await</span> <span style="color:var(--blue)">waitFor</span>(() =>
            <span style="color:var(--blue)">expect</span>(<span style="color:var(--blue)">getByText</span>(<span
              style="color:var(--green)">"1"</span>)).<span style="color:var(--blue)">toBeTruthy</span>()
            );</code>
          <a href="https://www.npmjs.com/package/@deijose/nix-js-testing" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">⚡</span>
            <h3>Vite Plugin for Nix.js</h3>
            <span class="badge-new" style="margin-left:auto">New</span>
          </div>
          <p>Drop the plugin into your Vite config and get optimized Nix.js handling, better HMR, and template-aware
            transforms out of the box.</p>
          <code><span style="color:var(--accent-light)">import</span> nix <span
              style="color:var(--accent-light)">from</span> <span
              style="color:var(--green)">"@deijose/vite-plugin-nix-js"</span>;

            <span style="color:var(--accent-light)">export default</span> <span
              style="color:var(--blue)">defineConfig</span>({
            plugins: [<span style="color:var(--blue)">nix</span>()],
            });</code>
          <a href="https://www.npmjs.com/package/@deijose/vite-plugin-nix-js" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">🚀</span>
            <h3>create-nix-app CLI</h3>
            <span class="badge-new" style="margin-left:auto">New</span>
          </div>
          <p>Scaffold a Nix.js project in seconds. Vanilla JS, TypeScript, or Ionic mobile templates with Vite, tests,
            and
            HMR pre-configured.</p>
          <code><span style="color:var(--accent-light)">npx</span> <span style="color:var(--blue)">create-nix-app</span>
            <span style="color:var(--blue)">my-app</span>

            <span style="color:var(--accent-light)">cd</span> <span style="color:var(--blue)">my-app</span>
            <span style="color:var(--accent-light)">npm run</span> <span style="color:var(--blue)">dev</span></code>
          <a href="https://www.npmjs.com/package/create-nix-app" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">⌨️</span>
            <h3>Nix.js CLI</h3>
            <span class="badge-new" style="margin-left:auto">New</span>
          </div>
          <p>Generate components, pages, stores, and services inside an existing project. Auto-detects Nix.js or
            Nix Ionic and picks the right template.</p>
          <code><span style="color:var(--accent-light)">npx</span> <span style="color:var(--blue)">nixjs</span> <span
              style="color:var(--blue)">add component Button</span>

            <span style="color:var(--accent-light)">npx</span> <span style="color:var(--blue)">nixjs</span> <span
              style="color:var(--blue)">dev</span>

            <span style="color:var(--accent-light)">npx</span> <span style="color:var(--blue)">nixjs</span> <span
              style="color:var(--blue)">build</span></code>
          <a href="https://www.npmjs.com/package/@deijose/nix-cli" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Nix.js Kit Section -->
  `);
}
