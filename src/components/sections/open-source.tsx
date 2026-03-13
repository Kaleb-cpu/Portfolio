import type { ReactNode } from "react";
import Image from "next/image";
import { Star, GitFork, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getGithubRepos,
  getGithubUser,
  pickFeaturedRepos,
} from "@/lib/github";

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-secondary px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold tracking-tight text-foreground">
          {label}
        </p>
        <div className="grid size-10 place-items-center rounded-2xl border border-border bg-white text-primary shadow-sm">
          {icon}
        </div>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}

export async function OpenSource({
  username,
  githubHref,
}: {
  username: string;
  githubHref: string;
}) {
  const [user, repos] = await Promise.all([
    getGithubUser(username),
    getGithubRepos(username),
  ]);

  const featured = pickFeaturedRepos(repos, 6);
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  return (
    <section id="open-source" className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Open Source & GitHub Work"
          title="Shipping in public."
          description="Live GitHub data—stats, a contributions grid, and featured repositories."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-7 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="relative size-14 overflow-hidden rounded-2xl border border-border bg-secondary">
                <Image
                  src={user.avatar_url}
                  alt={`${user.login} avatar`}
                  fill
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  {user.name ?? user.login}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-muted hover:text-foreground"
                >
                  @{user.login}
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Stat label="Repositories" value={user.public_repos} icon={<Star className="size-5" />} />
              <Stat label="Followers" value={user.followers} icon={<Users className="size-5" />} />
              <Stat label="Total Stars" value={totalStars} icon={<Star className="size-5" />} />
              <Stat label="Total Forks" value={totalForks} icon={<GitFork className="size-5" />} />
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-white p-5">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Contribution graph
              </p>
              <p className="mt-1 text-sm text-muted">
                A lightweight SVG grid based on public GitHub contributions.
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-secondary">
                {/* Public SVG contribution grid */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="GitHub contributions"
                  src={`https://ghchart.rshah.org/2563EB/${encodeURIComponent(
                    username,
                  )}`}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-4">
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View GitHub profile
                </a>
              </div>
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="p-7 sm:p-8">
              <p className="text-sm font-semibold tracking-tight text-foreground">
                Featured repositories
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Highlighting recent and high-signal repos based on stars and
                activity.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {featured.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-3xl border border-border bg-secondary p-5 transition-all hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
                  >
                    <p className="text-sm font-semibold tracking-tight text-foreground">
                      {r.name}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                      {r.description ?? "No description provided."}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-2">
                      <span className="rounded-full border border-border bg-white px-3 py-1">
                        ★ {r.stargazers_count}
                      </span>
                      <span className="rounded-full border border-border bg-white px-3 py-1">
                        ⑂ {r.forks_count}
                      </span>
                      {r.language ? (
                        <span className="rounded-full border border-border bg-white px-3 py-1">
                          {r.language}
                        </span>
                      ) : null}
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-secondary px-6 py-5">
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  Clean engineering
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Reusable components, consistent patterns, and maintainable
                  abstractions.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-secondary px-6 py-5">
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  Performance-first
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Optimized images, semantic HTML, and sensible data fetching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

