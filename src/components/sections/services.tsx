"use client";

import { Code2, Cpu, Globe, Layers3, Sparkle } from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const icons = [Code2, Cpu, Layers3, Globe, Sparkle] as const;

export function Services({
  services,
}: {
  services: { title: string; description: string }[];
}) {
  return (
    <section id="services" className="py-14 sm:py-20 bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I do."
          description="Websites, web apps, and AI automations."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.04 }}
              >
                <Card className="group h-full p-7 hover:-translate-y-0.5 hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-11 place-items-center rounded-2xl border border-border bg-white text-primary shadow-sm">
                      <Icon className="size-5" />
                    </div>
                    <div className="h-11 w-11 rounded-2xl bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-6 text-base font-semibold tracking-tight text-foreground">
                    {s.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {s.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

