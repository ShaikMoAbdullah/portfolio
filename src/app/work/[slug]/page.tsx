import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";
import { LegalFooter } from "@/components/LegalFooter";
import { caseStudies, getCaseStudy } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const title = `${study.name} · Shaik Mohammad Abdullah`;
  return {
    title,
    description: study.problem,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title,
      description: study.summary,
      url: `/work/${study.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyView study={study} />
      <LegalFooter />
    </>
  );
}
