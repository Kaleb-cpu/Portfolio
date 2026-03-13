## Caleb B — Developer Portfolio

Modern personal portfolio built with **Next.js (App Router)**, **TailwindCSS**, **TypeScript**, and **Framer Motion**, styled to match a premium minimal Dribbble-like aesthetic.

## Getting Started

Install dependencies (already installed if you just scaffolded the project):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm start
```

## Project structure

- **`src/app/`**: App Router routes, metadata, global styles
- **`src/components/`**: Reusable UI + page sections
  - **`src/components/nav/`**: Navbar + mobile menu
  - **`src/components/sections/`**: Hero, About, Services, Skills, Projects, Open Source, Contact
  - **`src/components/ui/`**: Premium card/button/container primitives
- **`src/lib/`**:
  - **`site.ts`**: Your content (services, skills, projects, links)
  - **`github.ts`**: GitHub API fetch helpers (public, no token)

## Customizing content

Edit your personal content in:

- `src/lib/site.ts`

## Notes

- The **GitHub** section pulls public data from `https://api.github.com/users/Kaleb-cpu` and displays a lightweight contribution grid via a public SVG.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
