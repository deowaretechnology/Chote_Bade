"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin, Calendar, Layers, Quote, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useContentState } from "@/lib/useContent";
import { getCaseStudies } from "@/lib/content";
import caseStudiesJson from "@/data/caseStudies.json";

interface Block {
  _type?: string;
  style?: string;
  children?: { text?: string }[];
}

/** Minimal, dependency-free renderer for the simple block-array shape our schema produces */
function BodyBlocks({ body }: { body: unknown }) {
  if (!Array.isArray(body) || body.length === 0) return null;

  return (
    <>
      {(body as Block[]).map((block, i) => {
        const text = block.children?.map((c) => c.text).join("") ?? "";
        if (!text) return null;

        if (block.style === "h3") {
          return (
            <h3 key={i} className="font-display font-bold text-xl text-ink mt-8 mb-3">
              {text}
            </h3>
          );
        }
        return (
          <p key={i} className="text-ink-soft text-[15.5px] leading-relaxed mb-4">
            {text}
          </p>
        );
      })}
    </>
  );
}

function BulletList({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-3">
      {items.map((point) => (
        <li key={point} className="flex items-start gap-3 text-[15px] text-ink-soft leading-relaxed">
          <span className="h-5 w-5 rounded-full bg-saffron-tint flex items-center justify-center shrink-0 mt-0.5">
            <Check size={12} className="text-saffron-dark" />
          </span>
          {point}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const { data: items, loading } = useContentState(getCaseStudies, caseStudiesJson.items);
  const cs = items.find((c) => c.slug === slug);

  useEffect(() => {
    // Only redirect once the Sanity fetch has actually finished — redirecting
    // on the first render (still holding the stale fallback JSON) would bounce
    // people away before the real item has had a chance to load.
    if (!loading && !cs) router.replace("/case-studies");
  }, [loading, cs, router]);

  if (loading) return null;
  if (!cs) return null;

  const hasProjectInfo = cs.publishedDate || cs.industry || (cs.techStack && cs.techStack.length > 0);

  return (
    <div className="pt-24 md:pt-28">
      {/* Header */}
      <section className="section !pb-8">
        <div className="container-page max-w-4xl">
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink text-sm font-semibold mb-8"
            >
              <ArrowLeft size={15} /> All case studies
            </Link>

            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="eyebrow !mb-0">{cs.businessType || cs.business}</span>
              {cs.address && (
                <span className="inline-flex items-center gap-1 text-[13px] text-ink-soft">
                  <MapPin size={13} /> {cs.address}
                </span>
              )}
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
              {cs.title}
            </h1>
            <p className="text-ink font-semibold text-[15px] mb-8">{cs.business}</p>

            {cs.ctaUrl && (
              <a
                href={cs.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {cs.ctaLabel || "View Live Project"} <ExternalLink size={16} />
              </a>
            )}
          </Reveal>
        </div>
      </section>

      {/* Project info strip */}
      {hasProjectInfo && (
        <section className="section !py-0">
          <div className="container-page max-w-4xl">
            <Reveal delay={0.05}>
              <div className="card p-6 flex flex-wrap gap-x-10 gap-y-4">
                {cs.publishedDate && (
                  <div>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-1.5">
                      <Calendar size={12} /> Published
                    </span>
                    <span className="text-[14px] font-semibold text-ink">{cs.publishedDate}</span>
                  </div>
                )}
                {cs.industry && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-1.5 block">
                      Industry
                    </span>
                    <span className="text-[14px] font-semibold text-ink">{cs.industry}</span>
                  </div>
                )}
                {cs.techStack && cs.techStack.length > 0 && (
                  <div>
                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-1.5">
                      <Layers size={12} /> Tech Used
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.techStack.map((t) => (
                        <span key={t} className="pill bg-saffron-tint text-saffron-dark text-[11.5px] px-2.5 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Cover image */}
      {cs.imageUrl && (
        <section className="section !pb-10">
          <div className="container-page max-w-4xl">
            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-line">
                <img src={cs.imageUrl} alt={cs.title} className="w-full max-h-[420px] object-cover" />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Overview */}
      {cs.summary && (
        <section className="section !pt-4 !pb-10">
          <div className="container-page max-w-4xl">
            <Reveal>
              <p className="text-ink text-[18px] leading-relaxed font-medium">{cs.summary}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Challenge + What We Did */}
      {(cs.challenge?.length || cs.solutionPoints?.length) && (
        <section className="section !pt-0">
          <div className="container-page max-w-4xl grid md:grid-cols-2 gap-8">
            {cs.challenge && cs.challenge.length > 0 && (
              <Reveal>
                <h2 className="font-display font-bold text-xl text-ink mb-5">The Challenge</h2>
                <BulletList items={cs.challenge} />
              </Reveal>
            )}
            {cs.solutionPoints && cs.solutionPoints.length > 0 && (
              <Reveal delay={0.08}>
                <h2 className="font-display font-bold text-xl text-ink mb-5">What We Did</h2>
                <BulletList items={cs.solutionPoints} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Extra story */}
      {Array.isArray(cs.body) && cs.body.length > 0 && (
        <section className="section !pt-6">
          <div className="container-page max-w-4xl">
            <Reveal>
              <BodyBlocks body={cs.body} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Results & Impact */}
      {cs.results && cs.results.length > 0 && (
        <section className="section bg-cream-2">
          <div className="container-page max-w-4xl">
            <Reveal>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-center mb-12">
                Results &amp; Impact
              </h2>
            </Reveal>
            <div className={`grid gap-5 ${cs.results.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
              {cs.results.map((r, i) => (
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

      {/* Testimonial */}
      {cs.testimonialQuote && (
        <section className="section !pb-10">
          <div className="container-page max-w-3xl">
            <Reveal>
              <div className="card p-8 md:p-10 bg-navy border-none text-center relative">
                <Quote className="text-saffron mx-auto mb-4" size={28} />
                <p className="font-display text-white text-xl md:text-2xl leading-snug mb-5">
                  &ldquo;{cs.testimonialQuote}&rdquo;
                </p>
                {cs.testimonialAuthor && (
                  <p className="text-white/60 text-[14px] font-semibold">{cs.testimonialAuthor}</p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Key takeaways (short bullets from the card) */}
      {cs.bulletPoints && cs.bulletPoints.length > 0 && (
        <section className="section !pt-0">
          <div className="container-page max-w-3xl">
            <Reveal>
              <div className="card bg-green-tint border-green/20 p-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-green mb-4 block">
                  Key Takeaways
                </span>
                <ul className="flex flex-col gap-2.5">
                  {cs.bulletPoints.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-ink/80">
                      <Check size={14} className="text-green mt-0.5 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section !pt-4 text-center">
        <div className="container-page">
          <Reveal>
            <p className="text-ink-soft text-[15px] mb-5">Want a solution like this for your business?</p>
            <Link href="/contact" className="btn-dark">
              Tell Us Your Problem <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}