// ============================================================================
// Landing page — all sections
// ============================================================================

import { html } from "@deijose/nix-js";
import type { PageMetadata } from "@deijose/nix-js-kit";
import { Hero } from "./_components/Hero";
import { Stats } from "./_components/Stats";
import { SizeBench } from "./_components/SizeBench";
import { InspiredPreview } from "./_components/InspiredPreview";
import { Interop } from "./_components/Interop";
import { QuickStart } from "./_components/QuickStart";
import { Features } from "./_components/Features";
import { Playground } from "./_components/Playground";
import { HowItWorks } from "./_components/HowItWorks";
import { CodeShowcase } from "./_components/CodeShowcase";
import { Ecosystem } from "./_components/Ecosystem";
import { DxEcosystem } from "./_components/DxEcosystem";
import { NixKit } from "./_components/NixKit";
import { NixQuery } from "./_components/NixQuery";
import { NixI18n } from "./_components/NixI18n";
import { NixAuth } from "./_components/NixAuth";
import { Comparison } from "./_components/Comparison";
import { InspiredDeep } from "./_components/InspiredDeep";
import { NixIonic } from "./_components/NixIonic";
import { IronBikers } from "./_components/IronBikers";
import { Showcases } from "./_components/Showcases";
import { Faq } from "./_components/Faq";
import { Cta } from "./_components/Cta";
import { Contribute } from "./_components/Contribute";

export const generateMetadata = (): PageMetadata => ({
  title: "Nix.js — Lightweight Reactive Micro-Framework for JavaScript",
  description:
    "Signal-based reactivity that runs natively with ESM/import maps. No virtual DOM. No compiler. ~14 KB gzipped, zero dependencies.",
  canonical: "https://nix-js.dev/",
  openGraph: {
    type: "website",
    title: "Nix.js — Lightweight Reactive Micro-Framework for JavaScript",
    description:
      "Signal-based reactivity that runs natively with ESM/import maps. No virtual DOM. No compiler.",
    siteName: "Nix.js",
    url: "https://nix-js.dev/",
    image: "https://nix-js.dev/og-image.png",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nix.js — Lightweight Reactive Micro-Framework for JavaScript",
    description:
      "Signal-based reactivity that runs natively with ESM/import maps. No virtual DOM. No compiler.",
    image: "https://nix-js.dev/og-image.png",
  },
});

export default function HomePage() {
  return html`
    ${Hero()}
    ${Stats()}
    ${SizeBench()}
    ${InspiredPreview()}
    ${Interop()}
    ${QuickStart()}
    ${Features()}
    ${Playground()}
    ${HowItWorks()}
    ${CodeShowcase()}
    ${Ecosystem()}
    ${DxEcosystem()}
    ${NixKit()}
    ${NixQuery()}
    ${NixI18n()}
    ${NixAuth()}
    ${Comparison()}
    ${InspiredDeep()}
    ${NixIonic()}
    ${IronBikers()}
    ${Showcases()}
    ${Faq()}
    ${Cta()}
    ${Contribute()}
  `;
}
