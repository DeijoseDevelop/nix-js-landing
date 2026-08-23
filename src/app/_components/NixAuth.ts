import { raw } from "@deijose/nix-js-kit/content";
import type { NixTemplate } from "@deijose/nix-js";

export function NixAuth(): NixTemplate {
  return raw(`
<section class="section nix-auth-section" id="nix-auth">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">🔐 Nix Auth</div>
        <h2 class="section-title">Authentication and authorization<br><span class="gradient-text">built for Nix.js.
          </span>
        </h2>
        <p class="section-desc">Driver-based auth with reactive signals. JWT, session cookies, API keys, and OIDC — all
          share the same policy engine and router guards.</p>
      </div>

      <div class="nix-auth-layout">
        <div class="nix-auth-copy animate-on-scroll">
          <p><strong>@deijose/nix-js-auth</strong> is the official auth layer for the Nix.js ecosystem:</p>
          <ul class="nix-auth-points">
            <li><span class="nix-auth-check">✓</span> <span><strong>createAuth</strong> with reactive session, user,
                token, and isAuthenticated signals.</span></li>
            <li><span class="nix-auth-check">✓</span> <span><strong>Drivers</strong> for JWT, session cookies, API keys,
                and OIDC with PKCE.</span></li>
            <li><span class="nix-auth-check">✓</span> <span><strong>Policy engine</strong> with RBAC, tenant-aware
                resolvers, and custom guards.</span></li>
            <li><span class="nix-auth-check">✓</span> <span><strong>Router integration</strong> via declarative
                <code>meta.auth</code> DSL and standalone guards.</span></li>
          </ul>

          <div class="nix-auth-callout">
            v1.0.1 adds <strong>createAuthManager</strong> for multi-context apps, <strong>SSR seeds</strong>, and an
            optional <strong>@deijose/nix-js-auth/command</strong> subpath for nix-query integration.
          </div>

          <a href="https://www.npmjs.com/package/@deijose/nix-js-auth" class="btn-primary" target="_blank"
            rel="noopener">
            View Nix Auth on npm
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
            <span class="code-filename">auth.ts</span>
          </div>
          <div class="code-body">
            <pre><span class="kw">import</span> { createAuth, jwtDriver, rbacPolicy } <span class="kw">from</span> <span class="str">"@deijose/nix-js-auth"</span>;

<span class="kw">const</span> auth = <span class="fn">createAuth</span>({
  driver: <span class="fn">jwtDriver</span>({ loginUrl: <span class="str">"/api/login"</span> }),
  autoRefresh: <span class="kw">true</span>,
  identity: { roles: <span class="str">"roles"</span>, permissions: <span class="str">"permissions"</span> },
});

auth.<span class="fn">attachPolicy</span>(
  <span class="fn">rbacPolicy</span>({
    resolveRoles: (u, tenant) => tenant ? u.rolesByTenant[tenant] : u.roles,
  }),
);

<span class="kw">await</span> auth.<span class="fn">login</span>({ email: <span class="str">"deiver@example.com"</span>, password: <span class="str">"secret"</span> });

console.<span class="fn">log</span>(auth.isAuthenticated.value); <span class="cmt">// true</span>
console.<span class="fn">log</span>(auth.<span class="fn">can</span>(<span class="str">"role:admin"</span>, { tenant: <span class="str">"acme"</span> }).value);</pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Comparison (NOW WITH ADVANCED BENCHMARK) -->
  `);
}
