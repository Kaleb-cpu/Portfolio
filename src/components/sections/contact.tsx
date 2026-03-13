"use client";

import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact({
  githubHref,
  linkedinHref,
}: {
  githubHref: string;
  linkedinHref: string;
}) {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-secondary">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something great."
          description="Have a project in mind? Reach out and I’ll get back with next steps."
          right={
            <Button href={linkedinHref} external variant="primary">
              Connect on LinkedIn <Linkedin className="size-4" />
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-7 sm:p-10">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Quick message
              </p>
              

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = String(data.get("name") ?? "");
                  const email = String(data.get("email") ?? "");
                  const message = String(data.get("message") ?? "");
                  const subject = encodeURIComponent(
                    `Portfolio Inquiry — ${name || "New message"}`,
                  );
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`,
                  );
                  window.location.href = `mailto:?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      className="h-12 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="h-12 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                    placeholder="Tell me what you're building…"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold tracking-tight text-primary-foreground shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition-all duration-200 hover:bg-primary/95 hover:shadow-[0_18px_36px_rgba(37,99,235,0.28)]"
                  >
                    Send Message <Send className="size-4" />
                  </button>
                  <a
                    href={githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold tracking-tight text-foreground transition-all duration-200 hover:bg-secondary"
                  >
                    GitHub <Github className="size-4" />
                  </a>
                </div>
              </form>
            </Card>
          </motion.div>

          <div className="grid gap-6">
            <Card className="p-7 sm:p-8">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Preferred channels
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Best way to connect: LinkedIn. For code: GitHub.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-3xl border border-border bg-secondary px-5 py-4 transition-all hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="grid size-10 place-items-center rounded-2xl border border-border bg-white text-primary shadow-sm">
                      <Linkedin className="size-5" />
                    </span>
                    LinkedIn
                  </span>
                  <span className="text-xs font-semibold text-muted">
                    Connect
                  </span>
                </a>
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-3xl border border-border bg-secondary px-5 py-4 transition-all hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="grid size-10 place-items-center rounded-2xl border border-border bg-white text-primary shadow-sm">
                      <Github className="size-5" />
                    </span>
                    GitHub
                  </span>
                  <span className="text-xs font-semibold text-muted">Follow</span>
                </a>
                <div className="rounded-3xl border border-border bg-white px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl border border-border bg-secondary text-primary">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Email
                      </p>
                      <p className="text-sm text-muted">
                        Use the form to draft an email instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="rounded-3xl border border-border bg-white px-6 py-6">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Response time
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Typically within 12-24 hours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

