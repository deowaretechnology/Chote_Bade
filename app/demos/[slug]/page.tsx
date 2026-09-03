"use client";

/* getIcon() returns a stable reference from a static lookup table, so using
   it as a JSX component tag is safe even though this rule flags the pattern. */
/* eslint-disable react-hooks/static-components */

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import FlowChain from "@/components/FlowChain";
import { getIcon } from "@/lib/icons";
import { useContentState } from "@/lib/useContent";
import { getDemoItems } from "@/lib/content";
import demosJson from "@/data/demos.json";

function BulletList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-2.5 mt-4">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft leading-relaxed">
          <span className="h-5 w-5 rounded-full bg-white/70 flex items-center justify-center shrink-0 mt-0.5">
            <Check size={12} className="text-current" />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

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

  return (
    <div className="pt-24 md:pt-28">

      {/* =====================================================
          HERO — cover image as a full-bleed background,
          heading + business badge overlaid on top
      ===================================================== */}
      <section className="relative overflow-hidden">
        {/* Background layer */}
        <div className="absolute inset-0">
          {demo.coverImageUrl ? (
            <img
              src={demo.coverImageUrl}
              alt={demo.business}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full ${
                demo.accent === "navy"
                  ? "bg-navy"
                  : demo.accent === "green"
                  ? "bg-green"
                  : "bg-saffron"
              }`}
            />
          )}
          {/* Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25" />
        </div>

        {/* Content */}
        <div className="relative container-page pt-14 pb-16 md:pt-20 md:pb-24">
          <Reveal>
            <Link href="/demos" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-semibold mb-10 transition-colors">
              <ArrowLeft size={15} /> All demos
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/85">
                {demo.business}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-white text-[28px] sm:text-4xl lg:text-[42px] leading-[1.2] max-w-2xl">
              {demo.problem}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROBLEM — paragraph + bullet points
      ===================================================== */}
      <section className="section !pt-10 !pb-8">
        <div className="container-page">
          <Reveal>
            <div className="card p-6 md:p-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-3 block">Problem</span>
              <p className="text-ink text-[15px] leading-[1.7] max-w-[68ch]">{demo.before}</p>
              <BulletList items={demo.problemPoints} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          SOLUTION — paragraph + bullet points + image
      ===================================================== */}
      <section className="section !pt-0 !pb-12">
        <div className="container-page">
          <Reveal>
            <div className="card p-6 md:p-8 bg-saffron-tint border-saffron-light grid md:grid-cols-2 gap-7 items-center">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-saffron-dark mb-3 block">The Solution</span>
                <p className="text-ink text-[15px] leading-[1.7] max-w-[60ch]">{demo.solution}</p>
                <BulletList items={demo.solutionPoints} />
                {(!demo.solutionPoints || demo.solutionPoints.length === 0) && demo.flow?.length > 0 && (
                  <div className="mt-5">
                    <FlowChain items={demo.flow} />
                  </div>
                )}
              </div>
              {demo.solutionImageUrl && (
                <img
                  src={demo.solutionImageUrl}
                  alt="Solution"
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-white/60"
                />
              )}
            </div>
          </Reveal>
        </div>
      </section>


      {/* =====================================================
          GALLERY — unlimited images
      ===================================================== */}
      {demo.galleryUrls && demo.galleryUrls.length > 0 && (
        <section className="section !pt-0 !pb-14">
          <div className="container-page">
            <Reveal>
              <span className="eyebrow">Gallery</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-6">A closer look</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {demo.galleryUrls.map((url, i) => (
                <Reveal key={url} delay={i * 0.06}>
                  <img
                    src={url}
                    alt={`${demo.business} screenshot ${i + 1}`}
                    className="w-full aspect-[4/3] object-cover rounded-xl border border-line"
                    loading="lazy"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          TECH — tech stack strip
      ===================================================== */}
      {demo.techStack && demo.techStack.length > 0 && (
        <section className="section !pt-0 !pb-10">
          <div className="container-page">
            <Reveal>
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

      {/* =====================================================
          LIVE LINK BUTTON
      ===================================================== */}
      {demo.websiteUrl && (
        <section className="section !pt-0 !pb-14 text-center">
          <div className="container-page">
            <Reveal>
              <a
                href={demo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {demo.websiteLabel || "View Live Site"} <ExternalLink size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      )}

    </div>
  );
}