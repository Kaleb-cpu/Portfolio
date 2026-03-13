"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";

const HERO_PORTRAIT_SRC = "/images/kaleb-hero.png";

export function Hero({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <section id="top" className="relative bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 pt-10 pb-10 sm:px-6 lg:px-8 lg:pt-12">
        <div className="relative min-h-[calc(100dvh-88px)]">
          {/* Left rail (desktop) */}
          <div className="pointer-events-none absolute left-0 top-6 hidden h-[calc(100%-24px)] w-12 lg:block">
            <div className="absolute left-5 top-0 h-full w-px bg-border" />
            <div className="absolute left-0 top-2 -rotate-90 origin-left text-xs font-semibold tracking-[0.22em] text-muted uppercase">
              Software engineer
            </div>
            <div className="absolute left-2 bottom-10 text-xs font-semibold text-muted">
              {new Date().getFullYear()}
            </div>
            <div className="absolute left-12 bottom-8 flex items-center gap-2 text-xs font-semibold text-muted">
              Scroll down <ArrowDown className="size-4" />
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 lg:pl-14">
            <div className="pt-4 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-end gap-8"
              >
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    10+
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Projects shipped
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    3+
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Products launched
                  </p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06 }}
                className="mt-10 text-[72px] leading-[0.9] font-medium tracking-[-0.04em] text-foreground sm:text-[104px] lg:text-[124px]"
              >
                Hello
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14 }}
                className="mt-4 text-sm leading-6 text-muted sm:text-base"
              >
                — it&apos;s <span className="font-semibold text-foreground">{name}</span>. I build
                clean websites and AI-powered products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button href="#projects" variant="primary">
                  View My Work <ArrowRight className="size-4" />
                </Button>
                <Button href="#contact" variant="secondary">
                  Contact Me <Mail className="size-4" />
                </Button>
              </motion.div>

              <p className="mt-8 text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                {title}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[44px] bg-secondary shadow-[0_40px_120px_rgba(15,23,42,0.10)] ring-1 ring-border">
                <Image
                  src={HERO_PORTRAIT_SRC}
                  alt={`${name} portrait`}
                  fill
                  priority
                  className="object-cover grayscale contrast-105 brightness-95"
                  sizes="(min-width: 1024px) 520px, 90vw"
                />
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 hidden size-40 rounded-full bg-foreground/10 blur-3xl lg:block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

