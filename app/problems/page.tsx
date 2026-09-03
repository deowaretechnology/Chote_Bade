"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import ProblemCard from "@/components/ProblemCard";
import { useContent } from "@/lib/useContent";
import { getProblemItems } from "@/lib/content";
import problemsJson from "@/data/problems.json";

export default function Problems() {
  const items = useContent(getProblemItems, problemsJson.items);
  const problems = { ...problemsJson, items };
  return (
    <div className="pt-24 md:pt-28">

      {/* =========================
          PAGE INTRO
      ========================== */}
      <section className="section !pb-14">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow justify-center">
              {problems.label}
            </span>

            <AnimatedHeading
              as="h1"
              text={problems.heading}
              className="font-display font-extrabold text-4xl sm:text-5xl mb-5 leading-tight"
            />

            <p className="text-ink-soft text-[16px] leading-relaxed">
              {problems.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================
          PROBLEM CARDS
      ========================== */}
      <section className="section !pt-0">
        <div className="container-page">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.items.map((p, i) => (
              <ProblemCard
                key={p.id || p._id}
                id={p.id || p._id || ""}
                icon={p.icon}
                title={p.title}
                body={p.body}
                delay={i * 0.06}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="section !pt-0 text-center">
        <div className="container-page">
          <Reveal>
            <div
              className="
                rounded-2xl
                bg-navy
                border-none
                px-8
                py-12
                sm:py-14
                max-w-xl
                mx-auto
              "
            >
              <p className="text-white/70 text-[15px] mb-5">
                {problems.cta.prompt}
              </p>

              <Link
                href={problems.cta.path}
                className="btn-primary"
              >
                {problems.cta.label}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}