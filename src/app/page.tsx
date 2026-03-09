import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { SkipToContent } from "@/components/SkipToContent";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <Hero />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Impact />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Experience />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Projects />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Skills />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Certifications />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Education />
        <div className="border-b border-stone-200/60 dark:border-stone-800/60" aria-hidden />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 dark:border-stone-800 px-6 py-8 text-center text-sm text-stone-500 dark:text-stone-400">
        © {new Date().getFullYear()} Shaik Mohammad Abdullah
      </footer>
      <BackToTop />
    </div>
  );
}
