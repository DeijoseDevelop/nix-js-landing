import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function NixKit(): NixTemplate {
  return raw(`
<section class="section nix-kit-section" id="nix-kit">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🚀 Nix.js Kit</div>
        <h2 class="section-title">Next.js conventions.<br><span class="gradient-text">Astro-style islands. Zero client
            JS.</span>
        </h2>
        <p class="section-desc">A full-stack meta-framework built on Nix.js signals — file-based routing, SSG, SSR, ISR,
          content collections, image optimization, middleware, and SPA-like navigation.</p>
      </div>

      <div class="nix-kit-layout">
        <div class="nix-kit-copy animate-on-scroll">
          <p><strong>@deijose/nix-js-kit</strong> brings production framework features to Nix.js:</p>
          <div class="nix-kit-modes">
            <span class="nix-kit-mode">SSG</span>
            <span class="nix-kit-mode">SSR</span>
            <span class="nix-kit-mode">ISR</span>
            <span class="nix-kit-mode">Islands</span>
            <span class="nix-kit-mode">API Routes</span>
            <span class="nix-kit-mode">Server Actions</span>
            <span class="nix-kit-mode">Streaming</span>
            <span class="nix-kit-mode">Adapters</span>
          </div>
          <ul class="nix-kit-points">
            <li><span class="nix-kit-check">✓</span> <span><strong>File-based routing</strong> with dynamic routes,
                catch-all, route groups, <code>generateStaticParams</code>, and named <strong>layout slots</strong>
                (<code>*.slot.ts</code>).</span></li>
            <li><span class="nix-kit-check">✓</span> <span><strong>Islands architecture</strong> — hydrate only
                interactive components with <code>load</code>, <code>idle</code>, <code>visible</code>,
                and <code>only</code> (client-only) directives. Optional <code>fallback</code>, <code>ssr: false</code>,
                and <code>isSSR()</code> for environment reads.</span></li>
            <li><span class="nix-kit-check">✓</span> <span><strong>Zero client JS by default</strong> — pages ship as
                static HTML unless you opt into hydration. Route-level code-splitting via per-island
                <code>import()</code> chunks.</span></li>
            <li><span class="nix-kit-check">✓</span> <span><strong>Content collections</strong> with typed Markdown,
                YAML frontmatter, and Zod validation.</span></li>
            <li><span class="nix-kit-check">✓</span> <span><strong>Server actions</strong> with <code>nixJsAction()</code>
                — reactive <code>pending</code>, <code>error</code>, and <code>data</code> signals. Progressive
                enhancement via HTML form submissions. <code>fail()</code> and <code>redirect()</code> helpers.</span></li>
            <li><span class="nix-kit-check">✓</span> <span><strong>Suspense streaming</strong> — <code>streamBoundary()</code>
                emits <code>&lt;template&gt;</code> chunks that swap fallback content in-place when resolved.</span></li>
          </ul>

          <div class="nix-kit-wow-grid">
            <div class="nix-kit-wow-card">
              <strong>SSG + SSR + ISR</strong>
              Static generation, server rendering, and incremental regeneration per route.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Image Optimization</strong>
              Build-time WebP/AVIF with srcset/sizes, lazy loading, and <code>getImage()</code> API.
              SHA-256 transform keys, atomic writes, bounded concurrency.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Middleware</strong>
              Auth, redirects, and header injection before routing.
            </div>
            <div class="nix-kit-wow-card">
              <strong>SPA Router</strong>
              Client-side navigation with style hoisting and no flash.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Cache Adapters</strong>
              Filesystem, Redis, Upstash, and Cloudflare KV. Tag-based invalidation.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Deployment Adapters</strong>
              Vercel, Netlify, Bun, and Node. One command: <code>nix-js-kit adapter &lt;name&gt;</code>.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Custom Error Pages</strong>
              <code>404.page.ts</code> and <code>500.page.ts</code> rendered during SSG, SSR, and all adapters.
            </div>
            <div class="nix-kit-wow-card">
              <strong>Security Hardened</strong>
              CSRF origin checks, path traversal fuzz tests, production error sanitization.
            </div>
          </div>

          <div class="nix-kit-callout">
            v2.4.4 — client-only islands (<code>directive: "only"</code>, <code>ssr: false</code>),
            <code>fallback</code> content, <code>isSSR()</code>, and hydration fix for islands without SSR DOM.
            Config file renamed to <code>nix-js.config.*</code>. Happy-dom fully removed — SSR uses the core's
            DOM-free <code>renderToString</code> directly.
          </div>

          <a href="https://kit.nix-js.dev/" class="btn-primary" target="_blank" rel="noopener">
            Explore Nix.js Kit
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
            <span class="code-filename">src/app/page.ts</span>
          </div>
          <div class="code-body">
            <pre><span class="kw">import</span> { html } <span class="kw">from</span> <span class="str">"@deijose/nix-js"</span>;
<span class="kw">import</span> type { PageProps } <span class="kw">from</span> <span class="str">"@deijose/nix-js-kit"</span>;
<span class="kw">import</span> { island } <span class="kw">from</span> <span class="str">"@deijose/nix-js-kit"</span>;
<span class="kw">import</span> { load } <span class="kw">from</span> <span class="str">"./page.data.ts"</span>;
<span class="kw">import</span> Counter <span class="kw">from</span> <span class="str">"../islands/Counter"</span>;

<span class="kw">export default</span> <span class="kw">function</span> <span class="fn">HomePage</span>({ data }: PageProps&lt;<span class="kw">typeof</span> load&gt;) {
  <span class="kw">return</span> <span class="fn">html</span><span class="str">\`</span>
    <span class="str">&lt;article&gt;</span>
      <span class="str">&lt;h1&gt;</span>\${data.title}<span class="str">&lt;/h1&gt;</span>
      <span class="str">&lt;p&gt;</span>The answer is \${data.count}.<span class="str">&lt;/p&gt;</span>
      \${<span class="fn">island</span>(<span class="str">"Counter"</span>, Counter, { initial: <span class="num">0</span> }, <span class="str">"load"</span>)}
    <span class="str">&lt;/article&gt;</span>
  <span class="str">\`</span>;
}

<span class="cmt">// page.data.ts — server-side data loader</span>
<span class="kw">export const</span> load: PageDataLoad = <span class="kw">async</span> () =&gt; {
  <span class="kw">return</span> { title: <span class="str">"Hello Nix.js Kit"</span>, count: <span class="num">42</span> };
};

<span class="cmt">// Zero client JS by default.
// Islands hydrate only when you say so.</span></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
  `);
}
