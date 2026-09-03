"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import SolutionCard from "@/components/SolutionCard";
import FlowChain from "@/components/FlowChain";
import { useContent } from "@/lib/useContent";
import { getSolutionItems } from "@/lib/content";
import solutionsJson from "@/data/solutions.json";

export default function Solutions() {
  const items = useContent(getSolutionItems, solutionsJson.items);
  const solutions = { ...solutionsJson, items };
  const { websiteOffer, buildYourWay } = solutions;

  return (
    <div className="pt-24 md:pt-28">
      <section className="section !pb-14">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow justify-center">{solutions.label}</span>
            <AnimatedHeading
              as="h1"
              text={solutions.heading}
              className="font-display font-extrabold text-4xl sm:text-5xl leading-tight"
            />
          </Reveal>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.items.map((s, i) => (
              <SolutionCard key={s.id || s._id} icon={s.icon} title={s.title} description={s.description} points={s.points} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ₹7,000 Website Offer */}
      <section className="section bg-cream-2">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow">Website Offer</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-4 leading-tight">
                {websiteOffer.heading}
              </h2>
              <p className="text-ink-soft text-[15.5px] leading-relaxed mb-7 max-w-md">
                {websiteOffer.description}
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                {websiteOffer.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[13.5px] text-ink/75">
                    <Check size={14} className="text-green shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                {websiteOffer.cta} <ArrowRight size={16} />
              </Link>
              <p className="text-ink-soft text-xs mt-4 max-w-md">{websiteOffer.note}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-8">
                <div className="text-center mb-8 pb-8 border-b border-line">
                  <span className="text-ink-soft text-sm">Starting from</span>
                  <div className="font-display font-extrabold text-5xl text-ink mt-1">
                    ₹{websiteOffer.startingPrice}
                  </div>
                  <span className="text-ink-soft text-xs mt-1 block">{websiteOffer.additionalLanguageNote}</span>
                </div>
                <div className="flex flex-col gap-3">
                  {websiteOffer.pricingExamples.map((p, i) => (
                    <div
                      key={p.label}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl ${
                        i === 0 ? "bg-saffron-tint border border-saffron-light" : "bg-cream-2"
                      }`}
                    >
                      <span className="font-semibold text-[14px] text-ink">{p.label}</span>
                      <span className="font-display font-bold text-[16px] text-ink">₹{p.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Already have a website */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="card p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-4 leading-tight">
                  {buildYourWay.heading}
                </h2>
                <p className="text-ink-soft text-[15px] leading-relaxed mb-7">{buildYourWay.description}</p>
                <Link href="/contact" className="btn-secondary">
                  {buildYourWay.cta} <ArrowRight size={16} />
                </Link>
              </div>
              <div className="bg-cream-2 rounded-2xl p-6 md:p-8">
                <FlowChain items={buildYourWay.flow} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}