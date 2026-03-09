import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shaik Mohammad Abdullah | Product Engineer",
  description:
    "Full Stack Product Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations. React, TypeScript, Node.js, GraphQL.",
  openGraph: {
    title: "Shaik Mohammad Abdullah | Product Engineer",
    description:
      "Full Stack Product Engineer with 4+ years building scalable web platforms, SaaS products, and enterprise integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
