import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function Tooling(): NixTemplate {
  return raw(`
<section class="section" id="tooling">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🧰 Developer Tools</div>
        <h2 class="section-title">Editor, formatter,<br><span class="gradient-text">and compiler.</span></h2>
        <p class="section-desc">First-party tooling that fits the framework — from syntax highlighting in your editor to an optional build-time compiler for maximum performance.</p>
      </div>
      <div class="dx-ecosystem-grid">
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">🎨</span>
            <h3>VS Code Extension</h3>
            <span class="badge-new" style="margin-left:auto">v0.7.0</span>
          </div>
          <p>Syntax highlighting for <code>html\`\`</code> tagged templates and <code>raw()</code> function-wrapped templates. Event binding autocomplete (<code>@click</code>, <code>@input</code>…), diagnostics for invalid modifier combinations, quick fixes, formatting, and snippets.</p>
          <code><span style="color:var(--cmt)"># Install from VS Code Marketplace</span>
            <span style="color:var(--green)">$</span> code --install-extension DeijoseDevelop.vscode-nix-js</code>
          <ul style="margin:12px 0;padding-left:18px;color:var(--text-muted);font-size:0.85rem;line-height:1.7">
            <li>HTML highlighting inside <code>html\`\`</code> and <code>raw()</code></li>
            <li>Event binding autocomplete + modifier suggestions</li>
            <li>Template formatter (format on save)</li>
            <li>Snippets: component, effect, computed, router, store</li>
            <li>Powered by a language server (Neovim, Helix, Zed, Emacs)</li>
          </ul>
          <a href="https://marketplace.visualstudio.com/items?itemName=DeijoseDevelop.vscode-nix-js" class="feature-card-link" target="_blank"
            rel="noopener">Install from Marketplace →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">🔧</span>
            <h3>Build-Time Compiler</h3>
            <span class="badge-new" style="margin-left:auto">Optional</span>
          </div>
          <p>Parses <code>html\`\`</code> templates at build time and generates direct DOM manipulation code (firstChild/nextSibling navigation). Eliminates runtime TreeWalker, detectContext, and buildHTML overhead.</p>
          <code><span style="color:var(--cmt)">// Nix.js SIN vs CON compilador (js-framework-benchmark)</span>
            <span style="color:var(--green)">create 1k:</span>   -24.7%
            <span style="color:var(--green)">replace 1k:</span>  -26.8%
            <span style="color:var(--green)">update 10th:</span> -39.4%
            <span style="color:var(--green)">clear 1k:</span>    -44.0%
            <span style="color:var(--green)">run mem:</span>     -34.5%
            <span style="color:var(--cmt)">// Avg: -27.8% CPU, -16.3% memory</span></code>
          <ul style="margin:12px 0;padding-left:18px;color:var(--text-muted);font-size:0.85rem;line-height:1.7">
            <li>Used internally by the Vite plugin — no manual setup</li>
            <li>Falls back to generic templates when unsafe</li>
            <li>Beats Solid on 6/9 CPU benchmarks + 2/3 memory</li>
            <li>DCL -27.6% faster than Solid (18.3ms vs 25.3ms)</li>
          </ul>
          <a href="https://www.npmjs.com/package/@deijose/nix-js-compiler" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">📐</span>
            <h3>Prettier Plugin</h3>
          </div>
          <p>Format <code>html\`\`</code> tagged template literals with Prettier. Indentation, attribute wrapping, and expression alignment that match the framework's style conventions.</p>
          <code><span style="color:var(--green)">$</span> npm install -D prettier-plugin-nix-js

            <span style="color:var(--cmt)">// .prettierrc</span>
            { <span style="color:var(--green)">"plugins"</span>: [<span style="color:var(--green)">"prettier-plugin-nix-js"</span>] }</code>
          <a href="https://www.npmjs.com/package/prettier-plugin-nix-js" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
        <div class="feature-card animate-on-scroll">
          <div class="feature-card-header">
            <span class="feature-card-icon">💬</span>
            <h3>Language Server</h3>
          </div>
          <p>The same LSP that powers the VS Code extension works in any editor with LSP support. Diagnostics, completion, hover, code actions, and formatting — all editor-agnostic.</p>
          <code><span style="color:var(--cmt)"># Neovim</span>
            :MasonInstall nix-js-language-server

            <span style="color:var(--cmt)"># Helix / Zed / Emacs</span>
            <span style="color:var(--cmt)"># configure via LSP settings</span></code>
          <a href="https://www.npmjs.com/package/@deijose/nix-js-language-server" class="feature-card-link" target="_blank"
            rel="noopener">Read docs →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Nix.js Kit Section -->
  `);
}
