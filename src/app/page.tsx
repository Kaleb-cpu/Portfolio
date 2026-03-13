import { Navbar } from "@/components/nav/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { OpenSource } from "@/components/sections/open-source";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Container } from "@/components/ui/container";
import { GOOGLE_APPOINTMENTS_URL } from "@/lib/calendar";
import { PROJECTS, SERVICES, SITE, SKILLS } from "@/lib/site";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar
        name={SITE.name}
        ctaHref={GOOGLE_APPOINTMENTS_URL}
        ctaLabel="Book A Call"
      />
      <main>
        <Hero name={SITE.name} title={SITE.title} />
        <About bio={SITE.bio} />
        <Services services={[...SERVICES]} />
        <Projects projects={PROJECTS} githubHref={SITE.links.github} />
        <Skills skills={SKILLS} />
        <OpenSource username="Kaleb-cpu" githubHref={SITE.links.github} />
        <Contact
          githubHref={SITE.links.github}
          linkedinHref={SITE.links.linkedin}
        />

        <footer className="border-t border-border bg-white">
          <Container>
            <div className="flex flex-col gap-2 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
              </p>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
