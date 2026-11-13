import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baseUrl = "https://shaikmoabdullah.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
  description:
    "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner in Bangalore. 5+ years owning roadmaps, backlogs, and prioritization for SaaS products and platforms, taking user problems from PRD and user stories through launch. React, TypeScript, Node.js, PostgreSQL. Portfolio at shaikmoabdullah.com.",
  applicationName: "Shaik Mohammad Abdullah",
  authors: [{ name: "Shaik Mohammad Abdullah", url: baseUrl }],
  creator: "Shaik Mohammad Abdullah",
  keywords: [
    "Shaik Mohammad Abdullah",
    "shaik mohammad abdullah",
    "shaikmoabdullah",
    "shaikmoabdullah.com",
    "Product Owner",
    "Technical Product Owner",
    "Senior Product Engineer",
    "Roadmapping",
    "Backlog prioritization",
    "Jira",
    "Agile",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Bangalore",
    "Bengaluru",
  ],
  openGraph: {
    title: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner in Bangalore. 5+ years owning roadmaps, backlogs, and prioritization for SaaS products and platforms, taking user problems from PRD and user stories through launch. Portfolio at shaikmoabdullah.com.",
    url: baseUrl,
    siteName: "Shaik Mohammad Abdullah",
    images: [
      {
        url: "/profile.png",
        width: 512,
        height: 512,
        alt: "Shaik Mohammad Abdullah",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner in Bangalore. 5+ years owning roadmaps, backlogs, and prioritization for SaaS products and platforms, taking user problems from PRD and user stories through launch.",
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}#person`,
    name: "Shaik Mohammad Abdullah",
    alternateName: ["shaikmoabdullah", "shaikmoabdullah.com"],
    url: baseUrl,
    jobTitle: "Product Owner",
    description:
      "Product owner with 5+ years owning roadmaps, backlogs, and prioritization for SaaS products and platforms, from PRD and user stories through launch. Based in Bangalore, India.",
    knowsAbout: [
      "Product Ownership",
      "Roadmapping",
      "Backlog prioritization",
      "PRDs and user stories",
      "Acceptance criteria",
      "Agile",
      "SaaS",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/shaikmoabdullah",
      "https://github.com/shaikmoabdullah",
      "https://x.com/shaikmoabdullah",
    ],
    email: "shaikmoabdullah@gmail.com",
    image: `${baseUrl}/profile.png`,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
    description:
      "Portfolio of Shaik Mohammad Abdullah (shaikmoabdullah) — product owner in Bangalore. Experience, projects, skills, and contact.",
    url: baseUrl,
    mainEntity: { "@id": `${baseUrl}#person` },
    author: { "@type": "Person", name: "Shaik Mohammad Abdullah", url: baseUrl },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var dark = theme === 'dark' || (!theme && prefersDark);
                document.documentElement.classList.toggle('dark', dark);
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
