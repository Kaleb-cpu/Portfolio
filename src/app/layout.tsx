import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Caleb B — Software Engineer & AI Engineer",
    template: "%s | Caleb B",
  },
  description:
    "Caleb B is a Full-Stack Software Engineer specializing in AI Engineering and modern web development. He builds high-performance websites, intelligent applications, and scalable digital systems for businesses and startups.",
  openGraph: {
    title: "Caleb B — Software Engineer & AI Engineer",
    description:
      "Modern websites, intelligent applications, and scalable software solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caleb B — Software Engineer & AI Engineer",
    description:
      "Modern websites, intelligent applications, and scalable software solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
