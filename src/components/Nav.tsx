"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { nav, site } from "@/content/content";
import { MonoLabel } from "./MonoLabel";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease",
        scrolled
          ? "border-b border-border bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex w-full max-w-page items-center justify-between gap-6 px-6 py-4 md:px-12">
        <a href="#top" className="group flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          <span className="font-display text-base tracking-tight text-fg md:text-lg">
            {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <li key={l.href} className="flex items-center gap-1.5">
              <span className="font-mono text-mono tracking-mono text-fg-tertiary">{l.index}</span>
              <a
                href={l.href}
                className="font-mono text-mono uppercase tracking-mono text-fg-secondary transition-colors duration-200 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={nav.cta.href}
          download=""
          className="inline-flex items-center gap-2 border border-border px-3.5 py-2 font-mono text-mono uppercase tracking-mono text-fg transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          <span>{nav.cta.label}</span>
          <span aria-hidden>↓</span>
        </a>
      </nav>
      <div className="mx-auto hidden w-full max-w-page items-center justify-between px-12 pb-2 md:flex">
        <MonoLabel variant="muted" bracket={false}>
          INDEX
        </MonoLabel>
        <MonoLabel variant="muted" bracket={false}>
          {site.version}
        </MonoLabel>
      </div>
    </header>
  );
}
