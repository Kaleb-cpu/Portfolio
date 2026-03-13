"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export function Navbar({
  name,
  ctaHref = "#contact",
  ctaLabel = "Book A Call",
}: {
  name: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const items = useMemo(() => navItems, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center px-4 py-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-2xl bg-secondary border border-border">
            <span className="text-sm text-foreground">{name.charAt(0)}</span>
          </span>
          <span className="text-sm text-foreground">{name}</span>
        </Link>

        <nav className="hidden items-center justify-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted hover:text-foreground hover:bg-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href={ctaHref}
            className="hidden items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary md:inline-flex"
          >
            {ctaLabel} <ArrowUpRight className="size-4" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-border bg-secondary p-2 text-foreground shadow-sm md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm bg-white shadow-2xl border-l border-border">
            <div className="flex items-center justify-between px-5 py-5">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Menu
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-secondary p-2 text-foreground"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="px-3 pb-6">
              <a
                href={ctaHref}
                className="mb-3 flex items-center justify-between rounded-2xl border border-border bg-white px-4 py-4 text-sm font-semibold text-foreground shadow-sm"
                onClick={() => setOpen(false)}
              >
                {ctaLabel} <ArrowUpRight className="size-4" />
              </a>
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

