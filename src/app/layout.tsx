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
  title: "Shaik Mohammad Abdullah | Product Engineer | shaikmoabdullah.com",
  description:
    "Shaik Mohammad Abdullah (shaikmoabdullah) — product-first engineer in Bangalore. 5+ years shipping SaaS products and platforms end-to-end (and founding Umrain), turning user problems into measurable business impact. React, TypeScript, Node.js, GraphQL. Portfolio at shaikmoabdullah.com.",
  applicationName: "Shaik Mohammad Abdullah",
  authors: [{ name: "Shaik Mohammad Abdullah", url: baseUrl }],
  creator: "Shaik Mohammad Abdullah",
  keywords: [
    "Shaik Mohammad Abdullah",
    "shaik mohammad abdullah",
    "shaikmoabdullah",
    "shaikmoabdullah.com",
    "Product Engineer",
    "Product-first Engineer",
    "Senior Product Engineer",
    "Senior Software Engineer",
    "Full Stack Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Bangalore",
    "Bengaluru",
  ],
  openGraph: {
    title: "Shaik Mohammad Abdullah | Product Engineer | shaikmoabdullah.com",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product-first engineer in Bangalore. 5+ years shipping SaaS products and platforms end-to-end, turning user problems into measurable business impact. Portfolio at shaikmoabdullah.com.",
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
    title: "Shaik Mohammad Abdullah | Product Engineer | shaikmoabdullah.com",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product-first engineer in Bangalore. 5+ years shipping SaaS products and platforms end-to-end, turning user problems into measurable business impact.",
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
    jobTitle: "Product Engineer",
    description:
      "Product-first engineer with 5+ years shipping SaaS products and platforms end-to-end — from user discovery and UX to architecture, launch, and growth. Founder of Umrain. Based in Bangalore, India.",
    knowsAbout: [
      "Product Engineering",
      "Product Strategy",
      "Product Discovery",
      "SaaS",
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Full Stack Development",
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
    email: "smabdullahblr@gmail.com",
    image: `${baseUrl}/profile.png`,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shaik Mohammad Abdullah | Product Engineer | shaikmoabdullah.com",
    description:
      "Portfolio of Shaik Mohammad Abdullah (shaikmoabdullah) — product-first engineer in Bangalore. Experience, projects, skills, and contact.",
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
