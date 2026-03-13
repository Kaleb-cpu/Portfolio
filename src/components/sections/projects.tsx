"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/lib/site";

export function Projects({
  projects,
  githubHref,
}: {
  projects: Project[];
  githubHref: string;
}) {
  return (
    <section id="projects" className="py-14 sm:py-20 bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work."
          description="A few recent websites and builds."
          right={
            <Button href={githubHref} external variant="secondary">
              View More Projects on GitHub <Github className="size-4" />
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <Card className="group overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_34px_90px_rgba(15,23,42,0.12)]">
                <div className="relative border-b border-border bg-white p-4 sm:p-5">
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary">
                    <Image
                      src={p.coverImage ?? "/file.svg"}
                      alt={`${p.title} preview`}
                      width={1100}
                      height={700}
                      className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold tracking-tight text-foreground">
                        {p.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {p.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-border bg-secondary px-3 py-2 text-xs font-semibold text-foreground/90">
                      {p.kind === "repo" ? "Open Source" : "Website"}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button href={p.href} external variant="primary" className="sm:w-auto">
                      Visit {p.kind === "repo" ? "Repository" : "Website"}{" "}
                      <ExternalLink className="size-4" />
                    </Button>
                    <Button href="#contact" variant="secondary">
                      Contact <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

