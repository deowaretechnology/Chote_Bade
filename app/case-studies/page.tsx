"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useContent } from "@/lib/useContent";
import { getCaseStudies } from "@/lib/content";
import caseStudiesJson from "@/data/caseStudies.json";

export default function CaseStudies() {
  const items = useContent(getCaseStudies, caseStudiesJson.items);

  return (
    <div className="pt-24 md:pt-28">
      <section className="section !pb-14">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow justify-center">Case Studies</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              {caseStudiesJson.heading}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container-page">
          {items.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((cs, i) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} delay={i * 0.08} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card bg-cream-2 border-dashed text-center px-8 py-16 max-w-2xl mx-auto">
                <p className="text-ink-soft text-[15px] leading-relaxed mb-6">
                  {caseStudiesJson.placeholderMessage}
                </p>
                <Link href="/demos" className="inline-flex items-center gap-1.5 font-bold text-[14px] text-saffron hover:gap-2.5 transition-all">
                  Try our working demos instead <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}