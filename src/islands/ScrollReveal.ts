// ============================================================================
// ScrollReveal island — adds .visible to .animate-on-scroll elements
// Renders nothing; safe when IntersectionObserver is unavailable.
// ============================================================================

import { html } from "@deijose/nix-js";

function ScrollReveal() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((el) => observer.observe(el));

  return html``;
}

export default ScrollReveal;
