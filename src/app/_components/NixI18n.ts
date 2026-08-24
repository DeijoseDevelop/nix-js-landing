import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function NixI18n(): NixTemplate {
  return raw(`
<section class="section nix-i18n-section" id="nix-i18n">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🌐 Nix i18n</div>
        <h2 class="section-title">Type-safe internationalization.<br><span class="gradient-text">Reactive by
            default.</span>
        </h2>
        <p class="section-desc">The official i18n library for Nix.js. Built on signals, zero runtime dependencies, and
          designed for real-world apps.</p>
      </div>

      <div class="nix-i18n-layout">
        <div class="nix-i18n-copy animate-on-scroll">
          <p><strong>@deijose/nix-i18n</strong> gives your Nix.js apps first-class internationalization:</p>
          <ul class="nix-i18n-points">
            <li><span class="nix-i18n-check">✓</span> <span><strong>Type-safe keys</strong> and interpolation
                parameters with autocompletion.</span></li>
            <li><span class="nix-i18n-check">✓</span> <span><strong>Reactive translations</strong> powered by Nix.js
                signals.</span></li>
            <li><span class="nix-i18n-check">✓</span> <span><strong>Plugins</strong> for persistence, locale detection,
                router sync, head tags, forms, ICU pluralization, and dev overlay.</span></li>
            <li><span class="nix-i18n-check">✓</span> <span><strong>Backends</strong> for inline messages, JSON files,
                and custom APIs.</span></li>
          </ul>

          <div class="nix-i18n-callout">
            v1.3.2 fixes 8 critical issues: no caching of failed requests, AST-based CLI
            extraction, and a plugin composition pipeline.
          </div>

          <a href="https://github.com/DeijoseDevelop/nix-i18n" class="btn-primary" target="_blank" rel="noopener">
            View docs on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        <div class="code-block animate-on-scroll">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            <span class="code-filename">i18n.ts</span>
          </div>
          <div class="code-body">
            <pre><span class="kw">import</span> { createI18n } <span class="kw">from</span> <span class="str">"@deijose/nix-i18n"</span>;
<span class="kw">import</span> { headPlugin } <span class="kw">from</span> <span class="str">"@deijose/nix-i18n/plugins/head"</span>;

<span class="kw">const</span> i18n = <span class="fn">createI18n</span>({
  locale: <span class="str">"es"</span>,
  fallbackLocale: <span class="str">"en"</span>,
  nestedFallback: <span class="kw">true</span>,
  messages: {
    es: { hello: <span class="str">"Hola {name}"</span> },
    en: { hello: <span class="str">"Hello {name}"</span> }
  }
});

<span class="fn">headPlugin</span>(i18n);

i18n.<span class="fn">t</span>(<span class="str">"hello"</span>, { name: <span class="str">"Deiver"</span> }); <span class="cmt">// "Hola Deiver"</span></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
}
