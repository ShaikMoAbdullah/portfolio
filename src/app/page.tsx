import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { SkipToContent } from "@/components/SkipToContent";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-foreground">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <Hero />
        <div className="border-b border-edge/60" aria-hidden />
        <Impact />
        <div className="border-b border-edge/60" aria-hidden />
        <Experience />
        <div className="border-b border-edge/60" aria-hidden />
        <Projects />
        <div className="border-b border-edge/60" aria-hidden />
        <Skills />
        <div className="border-b border-edge/60" aria-hidden />
        <Education />
        <div className="border-b border-edge/60" aria-hidden />
        <Contact />
      </main>
      <footer className="border-t border-edge px-6 py-8 text-center text-sm text-stone-500 dark:text-stone-400">
        © {new Date().getFullYear()} Shaik Mohammad Abdullah
      </footer>
      <BackToTop />
    </div>
  );
}
