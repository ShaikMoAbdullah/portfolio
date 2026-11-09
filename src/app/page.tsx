import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
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
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-edge px-6 py-8 text-center text-sm text-stone-500 dark:text-stone-400">
        <p>© {new Date().getFullYear()} Shaik Mohammad Abdullah</p>
        <p className="mt-1">B.Tech, Computer Science · REVA University</p>
      </footer>
      <BackToTop />
    </div>
  );
}
