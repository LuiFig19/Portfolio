"use client";

import { closing } from "@/content/content";
import { MonoLabel } from "./MonoLabel";

export function ClosingCTA() {
  return (
    <section id="contact" className="relative border-t border-border/70 px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-page">
        <MonoLabel variant="muted">{closing.eyebrow.replace(/^\[\s|\s\]$/g, "")}</MonoLabel>
        <h2 className="mt-6 font-display text-display-lg leading-[0.95] tracking-tight text-fg md:text-display-xl">
          <span className="block">{closing.headline[0]}</span>
          <span className="block text-accent">{closing.headline[1]}</span>
        </h2>

        <ul className="mt-12 grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {closing.ctas.map((cta) => (
            <li key={cta.label} className="group relative">
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="flex items-center justify-between px-5 py-6 transition-colors duration-300 hover:bg-bg-elevated md:px-7 md:py-8"
              >
                <div className="flex flex-col gap-2">
                  <MonoLabel variant="muted">{cta.label}</MonoLabel>
                  <span className="font-display text-xl text-fg md:text-2xl">{cta.value}</span>
                </div>
                <span
                  aria-hidden
                  className="font-mono text-base text-fg-tertiary transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={closing.resume.href}
            download=""
            className="group inline-flex items-center gap-2 border border-accent bg-accent/15 px-5 py-3 font-mono text-mono uppercase tracking-mono text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
          >
            <span>{closing.resume.label}</span>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
          <MonoLabel variant="muted">PGP / VCARD ON REQUEST</MonoLabel>
        </div>
      </div>
    </section>
  );
}
