"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight, ArrowRight, MapPin, Check } from "lucide-react";
import Reveal from "./Reveal";
import type { CaseStudy } from "@/lib/content";

export default function CaseStudyCard({ caseStudy, delay = 0 }: { caseStudy: CaseStudy; delay?: number }) {
  const cs = caseStudy;
  const router = useRouter();
  const detailPath = `/case-studies/${cs.slug}`;

  const goToDetail = () => router.push(detailPath);

  return (
    <Reveal delay={delay}>
      <div
        role="link"
        tabIndex={0}
        onClick={goToDetail}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goToDetail();
          }
        }}
        className="group card overflow-hidden h-full flex flex-col hover:border-saffron/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        {cs.imageUrl ? (
          <img src={cs.imageUrl} alt={cs.title} className="w-full h-40 object-cover" loading="lazy" />
        ) : (
          <div className="w-full h-40 bg-[#EEF1F6] flex items-center justify-center">
            <span className="font-display font-bold text-ink/20 text-2xl">{cs.business?.[0] || "C"}</span>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[12px] font-bold text-saffron-dark uppercase tracking-wide">
              {cs.businessType || cs.business}
            </span>
            {cs.address && (
              <span className="inline-flex items-center gap-1 text-[11px] text-ink-soft">
                <MapPin size={11} /> {cs.address}
              </span>
            )}
          </div>

          <h3 className="font-display font-bold text-[17px] text-ink mb-2 leading-snug">{cs.title}</h3>

          {cs.summary && <p className="text-ink-soft text-[13.5px] leading-relaxed mb-4">{cs.summary}</p>}

          {cs.bulletPoints && cs.bulletPoints.length > 0 && (
            <ul className="flex flex-col gap-1.5 mb-5">
              {cs.bulletPoints.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-ink/75">
                  <Check size={13} className="text-green mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-saffron font-bold text-[13.5px] group-hover:gap-2.5 transition-all">
              Read case study <ArrowRight size={15} />
            </span>

            {cs.ctaUrl && (
              <a
                href={cs.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-ink-soft hover:text-ink relative z-10"
                aria-label="View live site"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
