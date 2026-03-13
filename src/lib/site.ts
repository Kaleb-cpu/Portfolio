export const SITE = {
  name: "Caleb B",
  title: "Software Engineer | AI Engineer | Full-Stack Developer",
  heroTitle: "Software Engineer & AI Engineer",
  bio: `I’m a full-stack software engineer with a focus on AI and modern web development. I build fast websites, practical automations, and scalable systems for businesses and startups. Outside of code, I work with music and audio.`,
  links: {
    github: "https://github.com/Kaleb-cpu",
    linkedin: "https://www.linkedin.com/in/kaleb-cpu/",
  },
} as const;

export const SERVICES = [
  {
    title: "Full‑Stack Web Development",
    description:
      "High-performance websites and web apps with clean UX, modern stacks, and scalable architecture.",
  },
  {
    title: "AI Engineering & Intelligent Automation",
    description:
      "AI-powered tools, intelligent agents, and automations that streamline workflows and unlock new capabilities.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software systems designed around your business goals, constraints, and users.",
  },
  {
    title: "Business Website Development",
    description:
      "Fast, modern marketing sites that communicate value clearly and convert visitors into customers.",
  },
  {
    title: "Digital Branding & Online Presence",
    description:
      "Cohesive digital experiences that elevate brand identity across web, content, and product touchpoints.",
  },
] as const;

export const SKILLS = {
  Languages: ["Python", "JavaScript"],
  Frontend: ["Next.js", "React", "TailwindCSS", "Bootstrap", "HTML", "CSS"],
  Backend: ["Node.js", "Fastify", "Better-Auth"],
  "AI / Development Tools": ["Python ecosystem", "AI agent development tools"],
} as const;

export type Project = {
  title: string;
  href: string;
  description: string;
  kind: "website" | "repo";
  coverImage?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Bethany Studio",
    href: "https://www.bethanystudio.ca/",
    description: "Brand-forward studio site with fast performance.",
    kind: "website",
    coverImage: "/images/projects/bethany-recording.png",
  },
  {
    title: "Elim Cleaning",
    href: "https://elimcleaning.ca/",
    description: "Service site built for trust, clarity, and conversion.",
    kind: "website",
    coverImage: "/images/projects/elim-cleaning.png",
  },
  {
    title: "HNF Cleaning",
    href: "https://hnfcleaning.ca/",
    description: "Responsive site with clean layout and clear hierarchy.",
    kind: "website",
    coverImage: "/images/projects/hnf-cleaning.png",
  },
  {
    title: "Pure Website",
    href: "https://github.com/Kaleb-cpu/pure",
    description: "Minimal UI build focused on layout and UX polish.",
    kind: "repo",
    coverImage: "/images/projects/pure-website.png",
  },
];
