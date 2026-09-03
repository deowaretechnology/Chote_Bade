"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DemoMockup from "./DemoMockup";
import FlowChain from "./FlowChain";
import Reveal from "./Reveal";

interface DemoCardProps {
  slug: string;
  business: string;
  icon: string;
  accent: string;
  problem: string;
  flow: string[];
  cta: string;
  /** Optional real screenshot/photo from Sanity; when present, replaces the illustrative mockup card. */
  coverImageUrl?: string | null;
  delay?: number;
}

export default function DemoCard({
  slug,
  business,
  icon,
  accent,
  problem,
  flow,
  cta,
  coverImageUrl,
  delay = 0,
}: DemoCardProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/demos/${slug}`}
        className="group card p-6 h-full flex flex-col hover:border-saffron/40 hover:-translate-y-1 transition-all duration-300"
      >
        {coverImageUrl ? (
          <img
            src={coverImageUrl}
            alt={business}
            className="w-full h-40 object-cover rounded-xl border border-line mb-5"
            loading="lazy"
          />
        ) : (
          <DemoMockup
            icon={icon}
            accent={accent}
            business={business}
            className="mb-5"
          />
        )}
        <h3 className="font-display font-bold text-lg text-ink mb-2">
          {business}
        </h3>
        <p className="text-ink-soft text-[14px] leading-relaxed mb-4 flex-grow">
          {problem}
        </p>
        {/* <div className="mb-5 overflow-x-auto">
          <FlowChain items={flow} />
        </div> */}
        <span className="inline-flex items-center gap-1.5 text-saffron font-bold text-[13.5px] group-hover:gap-2.5 transition-all">
          {cta} <ArrowRight size={15} />
        </span>
      </Link>
    </Reveal>
  );
}  