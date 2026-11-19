import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { LegalFooter } from "@/components/LegalFooter";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <PartnerMarquee />
        <WorkGrid />
        <HowIWork />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <LegalFooter />
    </>
  );
}
