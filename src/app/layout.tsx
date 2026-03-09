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
  title: "Shaik Mohammad Abdullah | Senior Software Engineer",
  description:
    "Shaik Mohammad Abdullah (shaikmoabdullah) — Full Stack Senior Software Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations. React, TypeScript, Node.js, GraphQL.",
  keywords: [
    "Shaik Mohammad Abdullah",
    "shaik mohammad abdullah",
    "shaikmoabdullah",
    "shaikmoabdullah.com",
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
    title: "Shaik Mohammad Abdullah | Senior Software Engineer",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — Full Stack Senior Software Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations.",
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
    title: "Shaik Mohammad Abdullah | Senior Software Engineer",
    description:
      "Shaik Mohammad Abdullah (shaikmoabdullah) — Full Stack Senior Software Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shaik Mohammad Abdullah",
    alternateName: "shaikmoabdullah",
    url: baseUrl,
    jobTitle: "Senior Software Engineer",
    description:
      "Full Stack Senior Software Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/shaikmohammadabdullah",
      "https://github.com/shaikmoabdullah",
      "https://x.com/shaikmoabdullah",
    ],
    email: "smabdullahblr@gmail.com",
    image: `${baseUrl}/profile.png`,
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
