import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SkipToContent } from "@/components/SkipToContent";
import { Header } from "@/components/Header";
import { CommandPalette } from "@/components/CommandPalette";
import { BackToTop } from "@/components/BackToTop";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const baseUrl = "https://shaikmoabdullah.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
  description:
    "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner for AI applications in the public sector. 5+ years taking products from client scoping through delivery, the last two on LLM evaluation, training data, and AI tools with governments and frontier labs.",
  applicationName: "Shaik Mohammad Abdullah",
  authors: [{ name: "Shaik Mohammad Abdullah", url: baseUrl }],
  creator: "Shaik Mohammad Abdullah",
  keywords: [
    "Shaik Mohammad Abdullah",
    "shaik mohammad abdullah",
    "shaikmoabdullah",
    "shaikmoabdullah.com",
    "Product Owner",
    "AI applications",
    "Public sector",
    "LLM evaluation",
    "Training data",
    "Senior Product Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Arabic",
    "Bangalore",
    "Bengaluru",
  ],
  openGraph: {
    title: "Shaik Mohammad Abdullah | Product Owner | shaikmoabdullah.com",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner for AI applications in the public sector. 5+ years from client scoping through delivery, the last two on LLM evaluation, training data, and AI tools with governments and frontier labs.",
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
      "Shaik Mohammad Abdullah (shaikmoabdullah) — product owner for AI applications in the public sector. LLM evaluation, training data, and AI tools with governments and frontier labs.",
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
      "Product owner for AI applications in the public sector. 5+ years taking products from client scoping through delivery, the last two on LLM evaluation, training data, and AI tools with governments and frontier labs. Based in Bangalore, India.",
    knowsAbout: [
      "Product ownership",
      "AI applications",
      "Public sector",
      "LLM evaluation",
      "Evaluation rubrics",
      "Human feedback data",
      "Training-data pipelines",
      "Partner scoping",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Arabic",
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
      "Portfolio of Shaik Mohammad Abdullah (shaikmoabdullah) — product owner for AI applications in the public sector. Experience, projects, skills, and contact.",
    url: baseUrl,
    mainEntity: { "@id": `${baseUrl}#person` },
    author: { "@type": "Person", name: "Shaik Mohammad Abdullah", url: baseUrl },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${instrument.variable} font-sans antialiased`}>
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
          <SkipToContent />
          <Header />
          <CommandPalette />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
