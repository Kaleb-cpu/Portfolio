"use client";

import { Music, Sparkles, Wand2 } from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    icon: Sparkles,
    title: "Full‑stack builder",
    desc: "End-to-end web experiences with clean UI and solid engineering.",
  },
  {
    icon: Wand2,
    title: "AI engineering focus",
    desc: "AI tools and automations that save time and unlock new workflows.",
  },
  {
    icon: Music,
    title: "Creative edge",
    desc: "Taste-driven product work, plus music/audio on the side.",
  },
] as const;

export function About({ bio }: { bio: string }) {
  return (
    <section id="about" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Simple, focused engineering."
          description="I build modern web products with a clean UI and reliable systems."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-7 sm:p-10">
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {bio}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border bg-secondary px-5 py-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    AI + Web
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-secondary px-5 py-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Style
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Minimal UI
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-secondary px-5 py-4">
                  <p className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Build
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    Scalable
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="grid gap-6">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                >
                  <Card className="group p-7 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
                    <div className="flex items-start gap-4">
                      <div className="grid size-11 place-items-center rounded-2xl border border-border bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold tracking-tight text-foreground">
                          {it.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          {it.desc}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

