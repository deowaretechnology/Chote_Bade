"use client";

/* getIcon() returns a stable reference from a static lookup table, so using
   it as a JSX component tag is safe even though this rule flags the pattern. */
/* eslint-disable react-hooks/static-components */

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lightbulb, Layers, Quote, Info } from "lucide-react";
import Reveal from "@/components/Reveal";
import FlowChain from "@/components/FlowChain";
import { getIcon } from "@/lib/icons";
import { useContentState } from "@/lib/useContent";
import { getDemoItems } from "@/lib/content";
import demosJson from "@/data/demos.json";

import SalonDemo from "@/components/demos/SalonDemo";
import JewelleryDemo from "@/components/demos/JewelleryDemo";
import CafeDemo from "@/components/demos/CafeDemo";
import ConsultantDemo from "@/components/demos/ConsultantDemo";

const liveDemoMap: Record<string, React.ComponentType> = {
  salon: SalonDemo,
  jewellery: JewelleryDemo,
  cafe: CafeDemo,
  consultant: ConsultantDemo,
};

export default function DemoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { data: items, loading } = useContentState(getDemoItems, demosJson.items);
  const demo = items.find((d) => d.slug === slug);

  useEffect(() => {
    // Only redirect once the Sanity fetch has actually finished — redirecting
    // on the first render (still holding the stale fallback JSON) would bounce
    // people away before the real item has had a chance to load.
    if (!loading && !demo) router.replace("/demos");
  }, [loading, demo, router]);

  if (loading) return null;
  if (!demo) return null;

  const Icon = getIcon(demo.icon);
  const LiveDemo = liveDemoMap[demo.slug];

  return (
    <div className="pt-24 md:pt-28">
      <section className="section !pb-8">
        <div className="container-page">
          <Reveal>
            <Link href="/demos" className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink text-sm font-semibold mb-8">
              <ArrowLeft size={15} /> All demos
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 rounded-xl bg-navy flex items-center justify-center">
                <Icon size={20} className="text-saffron" />
              </div>
              <span className="eyebrow !mb-0">{demo.business}</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl max-w-2xl leading-tight">
              {demo.problem}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Tech stack strip */}
      {demo.techStack && demo.techStack.length > 0 && (
        <section className="section !py-0">
          <div className="container-page">
            <Reveal delay={0.05}>
              <div className="card p-6 inline-flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-ink-soft">
                  <Layers size={12} /> Built With
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {demo.techStack.map((t) => (
                    <span key={t} className="pill bg-saffron-tint text-saffron-dark text-[11.5px] px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section !pt-8 !pb-14">
        <div className="container-page grid md:grid-cols-2 gap-5">
          <Reveal>
            <div className="card p-7 h-full">
              <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-3 block">Before</span>
              <p className="text-ink text-[15px] leading-relaxed">{demo.before}</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card p-7 h-full bg-saffron-tint border-saffron-light">
              <span className="text-[11px] font-bold uppercase tracking-widest text-saffron-dark mb-3 block">The Solution</span>
              <p className="text-ink text-[15px] leading-relaxed mb-5">{demo.solution}</p>
              <FlowChain items={demo.flow} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Demo */}
      <section className="section !pt-0">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-10">
              <span className="eyebrow justify-center">Live Demo</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl">Try it yourself</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-xl mx-auto">
              {LiveDemo && <LiveDemo />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why it helps */}
      <section className="section !pt-0">
        <div className="container-page">
          <Reveal>
            <div className="card p-8 max-w-2xl mx-auto flex gap-4 items-start bg-green-tint border-green/20">
              <div className="h-10 w-10 rounded-xl bg-green flex items-center justify-center shrink-0">
                <Lightbulb size={18} className="text-white" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-green mb-1.5 block">Why it helps</span>
                <p className="text-ink text-[15px] leading-relaxed">{demo.whyItHelps}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Illustrative Results */}
      {demo.results && demo.results.length > 0 && (
        <section className="section bg-cream-2">
          <div className="container-page max-w-4xl">
            <Reveal>
              <div className="text-center mb-4">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-3">What This Could Look Like</h2>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-ink-soft bg-white border border-line rounded-full px-3 py-1.5">
                  <Info size={12} /> Example scenario — {demo.business} is a fictional demo, not a real client
                </span>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {demo.results.map((r, i) => (
                <Reveal key={r.label} delay={i * 0.08}>
                  <div className="card p-7 text-center h-full">
                    <span className="block font-display font-extrabold text-3xl sm:text-4xl text-saffron mb-2">
                      {r.value}
                    </span>
                    <span className="text-ink-soft text-[13.5px] leading-snug">{r.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Example scenario quote */}
      {demo.testimonialQuote && (
        <section className="section !pb-10">
          <div className="container-page max-w-3xl">
            <Reveal>
              <div className="card p-8 md:p-10 bg-navy border-none text-center relative">
                <Quote className="text-saffron mx-auto mb-4" size={28} />
                <p className="font-display text-white text-xl md:text-2xl leading-snug mb-5">
                  &ldquo;{demo.testimonialQuote}&rdquo;
                </p>
                <p className="text-white/50 text-[13px] font-medium">
                  {demo.testimonialAuthor || "Illustrative example, not a real client quote"}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {demo.websiteUrl && (
        <section className="section !pt-0 text-center">
          <div className="container-page">
            <Reveal>
              <a
                href={demo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {demo.websiteLabel || "View Live Site"}
              </a>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section !pt-0 text-center">
        <div className="container-page">
          <Reveal>
            <p className="text-ink-soft text-[15px] mb-5">Want something like this for your business?</p>
            <Link href="/contact" className="btn-primary">
              Tell Us Your Problem <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}