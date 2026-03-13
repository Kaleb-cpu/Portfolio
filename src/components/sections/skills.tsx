"use client";

import type { ComponentType } from "react";
import {
  Braces,
  Database,
  Flame,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryMeta: Record<
  string,
  { icon: ComponentType<{ className?: string }>; hint: string }
> = {
  Languages: { icon: Braces, hint: "Core languages I ship with" },
  Frontend: { icon: MonitorSmartphone, hint: "UI, components, and design systems" },
  Backend: { icon: Database, hint: "APIs, auth, and scalable services" },
  "AI / Development Tools": { icon: Sparkles, hint: "Tooling for fast iteration" },
};

function techBadge(text: string) {
  return (
    <span
      key={text}
      className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground/90 transition-all group-hover:bg-white group-hover:shadow-sm"
    >
      {text}
    </span>
  );
}

export function Skills({
  skills,
}: {
  skills: Record<string, readonly string[]>;
}) {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Stack."
          description="The tools I use most."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {entries.map(([category, list], idx) => {
            const meta = categoryMeta[category] ?? { icon: Flame, hint: "" };
            const Icon = meta.icon;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
              >
                <Card className="group h-full p-7 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                  <div className="flex items-start gap-4">
                    <div className="grid size-11 place-items-center rounded-2xl border border-border bg-white text-primary shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-semibold tracking-tight text-foreground">
                        {category}
                      </p>
                      {meta.hint ? (
                        <p className="mt-1 text-sm text-muted">{meta.hint}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {list.map((t) => techBadge(t))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* keep this section tight and scannable */}
      </Container>
    </section>
  );
}

