import { type ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-border bg-white",
        "shadow-[0_22px_60px_rgba(15,23,42,0.08)]",
        "ring-1 ring-transparent",
        "transition-all duration-200",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

