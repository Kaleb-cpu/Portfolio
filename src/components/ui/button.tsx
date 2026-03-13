"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_14px_34px_rgba(20,20,20,0.20)] hover:shadow-[0_18px_44px_rgba(20,20,20,0.26)] hover:bg-primary/95",
  secondary:
    "bg-secondary text-foreground border border-border hover:bg-white hover:shadow-[0_18px_44px_rgba(15,23,42,0.10)]",
  ghost:
    "text-foreground hover:bg-secondary border border-transparent hover:border-border",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

