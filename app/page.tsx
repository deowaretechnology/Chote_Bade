"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import HeroFlow from "@/components/HeroFlow";
import ProblemCard from "@/components/ProblemCard";
import DemoCard from "@/components/DemoCard";
import SolutionCard from "@/components/SolutionCard";
import ProcessSteps from "@/components/ProcessSteps";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getIcon } from "@/lib/icons";
import { useContent } from "@/lib/useContent";
import {
  getProblemItems,
  getSolutionItems,
  getDemoItems,
  getWhyUsItems,
  getProcessSteps,
  getCaseStudies,
  getAboutPage,
} from "@/lib/content";

import problemsJson from "@/data/problems.json";
import demosJson from "@/data/demos.json";
import solutionsJson from "@/data/solutions.json";
import processJson from "@/data/process.json";
import whyUsJson from "@/data/whyUs.json";
import caseStudiesJson from "@/data/caseStudies.json";
import aboutJson from "@/data/about.json";

export default function Home() {
  const problemItems = useContent(getProblemItems, problemsJson.items);
  const demoItems = useContent(getDemoItems, demosJson.items);
  const solutionItems = useContent(getSolutionItems, solutionsJson.items);
  const philosophySteps = useContent(() => getProcessSteps("philosophy"), processJson.steps);
  const whyUsItems = useContent(getWhyUsItems, whyUsJson.items);
  const caseStudies = useContent(getCaseStudies, caseStudiesJson.items);
  const about = useContent(getAboutPage, aboutJson);

  const problems = { ...problemsJson, items: problemItems };
  const demos = { ...demosJson, items: demoItems };
  const solutions = { ...solutionsJson, items: solutionItems };
  const process = { ...processJson, steps: philosophySteps };
  const whyUs = { ...whyUsJson, items: whyUsItems };
  return (
    <div className="pt-24 md:pt-28">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="section !pb-16 md:!pb-20">
        <div className="container-page grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">

          {/* LEFT */}
          <div>
            <Reveal>
              <span className="eyebrow">
                Digital Solutions for Small Businesses
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <AnimatedHeading
                as="h1"
                text={"Chhota Business,\nBade Sapne."}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] mb-3"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-saffron mb-6">
                Your Digital Key.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-ink-soft text-[16.5px] leading-relaxed mb-2 max-w-lg">
                You focus on running your business. We&apos;ll take care of the technology.
              </p>

              <p className="text-ink-soft text-[16.5px] leading-relaxed mb-9 max-w-lg">
                We build simple websites, tools and digital solutions around
                the real problems your business faces.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3.5">
                <Link href="/contact" className="btn-primary">
                  Tell Us Your Problem
                  <ArrowRight size={16} />
                </Link>

                <Link href="/demos" className="btn-secondary">
                  Explore Our Demos
                </Link>
              </div>
            </Reveal>
          </div>

          {/* RIGHT - HERO FLOW */}
          <Reveal delay={0.25} width="100%">
            <div className="min-w-0">
              <HeroFlow />
            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
    PROBLEMS TEASER
===================================================== */}
<section className="section bg-cream-2">
  <div className="container-page">

    {/* HEADER */}
    <div className="relative mb-12">

      {/* Eyebrow + Heading */}
      <Reveal width="100%">
        <div>
          <span className="eyebrow">
            {problems.label}
          </span>

          <AnimatedHeading
            as="h2"
            text={problems.heading}
            className="font-display font-extrabold text-3xl sm:text-4xl leading-tight max-w-xl"
          />
        </div>
      </Reveal>

      {/* SEE ALL PROBLEMS */}
      <Reveal delay={0.1}>
        <Link
          href="/problems"
          className="
            group
            absolute
            right-0
            bottom-2

            hidden
            md:inline-flex

            items-center
            gap-2

            text-[14px]
            font-bold
            text-ink

            transition-colors
            duration-200

            hover:text-saffron
          "
        >
          <span>See all problems</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </Link>
      </Reveal>

      {/* MOBILE BUTTON */}
      <Reveal delay={0.1}>
        <Link
          href="/problems"
          className="
            group
            mt-6
            inline-flex
            md:hidden

            items-center
            gap-2

            text-[14px]
            font-bold
            text-ink

            transition-colors
            duration-200

            hover:text-saffron
          "
        >
          <span>See all problems</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          />
        </Link>
      </Reveal>

    </div>


    {/* PROBLEM CARDS */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {problems.items.slice(0, 3).map((p, i) => (
        <ProblemCard
          key={p.id || p._id}
          id={p.id || p._id || ""}
          icon={p.icon}
          title={p.title}
          body={p.body}
          delay={i * 0.08}
        />
      ))}
    </div>

  </div>
</section>


      {/* =====================================================
          REAL BUSINESS EXAMPLES / DEMOS
      ===================================================== */}
      <section className="section">
        <div className="container-page">

          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="eyebrow justify-center">
                {demos.label}
              </span>

              <AnimatedHeading
                as="h2"
                text={demos.heading}
                className="font-display font-extrabold text-3xl sm:text-4xl mb-3"
              />

              <p className="text-ink-soft text-[15.5px]">
                {demos.description}
              </p>
            </div>
          </Reveal>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {demos.items.map((d, i) => (
              <div key={d.slug} className="h-full flex">
                <DemoCard
                  {...d}
                  delay={i * 0.08}
                />
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          HOW WE WORK TEASER
      ===================================================== */}
      <section className="section bg-navy text-white">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>
            <Reveal>
              <span className="eyebrow text-saffron">
                Our Philosophy
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-5 leading-tight">
                {process.philosophy.heading}
              </h2>

              <p className="text-white/60 text-[15.5px] leading-relaxed mb-8 max-w-md">
                {process.philosophy.description}
              </p>

              <Link
                href="/how-we-work"
                className="inline-flex items-center gap-1.5 font-bold text-[14px] text-saffron hover:gap-2.5 transition-all"
              >
                See how we work
                <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>


          {/* RIGHT */}
          <div className="[&_h3]:text-white [&_p]:text-white/55 [&_.border-line]:border-white/10 [&_.bg-white]:bg-white/[0.06]">
            <ProcessSteps
              steps={process.steps.map((s) => ({
                number: s.number,
                title: s.title,
                body: s.body,
              }))}
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}
      <section className="section">
        <div className="container-page">

          <div className="relative mb-14">

            {/* Eyebrow + Heading */}
            <Reveal width="100%">
              <div>
                <span className="eyebrow">
                  {solutions.label}
                </span>

                <AnimatedHeading
                  as="h2"
                  text={solutions.heading}
                  className="font-display font-extrabold text-3xl sm:text-4xl max-w-lg"
                />
              </div>
            </Reveal>

            {/* SEE ALL SOLUTIONS */}
            <Reveal delay={0.1}>
              <Link
                href="/solutions"
                className="
                  group
                  absolute
                  right-0
                  bottom-2

                  hidden
                  md:inline-flex

                  items-center
                  gap-2

                  text-[14px]
                  font-bold
                  text-ink

                  transition-colors
                  duration-200

                  hover:text-saffron
                "
              >
                <span>See all solutions</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </Reveal>

            {/* MOBILE BUTTON */}
            <Reveal delay={0.1}>
              <Link
                href="/solutions"
                className="
                  group
                  mt-6
                  inline-flex
                  md:hidden

                  items-center
                  gap-2

                  text-[14px]
                  font-bold
                  text-ink

                  transition-colors
                  duration-200

                  hover:text-saffron
                "
              >
                <span>See all solutions</span>

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </Reveal>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.items.slice(0, 3).map((s, i) => (
              <SolutionCard
                key={s.id}
                icon={s.icon}
                title={s.title}
                description={s.description}
                points={s.points}
                delay={i * 0.08}
                compact
              />
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          WHY WE ARE DIFFERENT
      ===================================================== */}
      <section className="section bg-cream-2">
        <div className="container-page">

          <Reveal>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center mb-14 max-w-xl mx-auto">
              {whyUs.heading}
            </h2>
          </Reveal>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.items.map((w, i) => {
              const Icon = getIcon(w.icon);

              return (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="flex items-start gap-4 p-2">

                    <div className="h-11 w-11 rounded-xl bg-white border border-line flex items-center justify-center shrink-0">
                      <Icon
                        size={18}
                        className="text-saffron-dark"
                      />
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-[15.5px] text-ink mb-1">
                        {w.title}
                      </h3>

                      <p className="text-ink-soft text-[13.5px] leading-relaxed">
                        {w.body}
                      </p>
                    </div>

                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}
      <section className="section">
        <div className="container-page">
          {caseStudies.length > 0 ? (
            <>
              <div className="relative mb-14">

                {/* Eyebrow + Heading */}
                <Reveal width="100%">
                  <div>
                    <span className="eyebrow">Case Studies</span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl max-w-lg">
                      {caseStudiesJson.heading}
                    </h2>
                  </div>
                </Reveal>

                {/* SEE ALL CASE STUDIES */}
                <Reveal delay={0.1}>
                  <Link
                    href="/case-studies"
                    className="
                      group
                      absolute
                      right-0
                      bottom-2

                      hidden
                      md:inline-flex

                      items-center
                      gap-2

                      text-[14px]
                      font-bold
                      text-ink

                      transition-colors
                      duration-200

                      hover:text-saffron
                    "
                  >
                    <span>See all case studies</span>

                    <ArrowRight
                      size={17}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </Reveal>

                {/* MOBILE BUTTON */}
                <Reveal delay={0.1}>
                  <Link
                    href="/case-studies"
                    className="
                      group
                      mt-6
                      inline-flex
                      md:hidden

                      items-center
                      gap-2

                      text-[14px]
                      font-bold
                      text-ink

                      transition-colors
                      duration-200

                      hover:text-saffron
                    "
                  >
                    <span>See all case studies</span>

                    <ArrowRight
                      size={17}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-200
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </Reveal>

              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {caseStudies.slice(0, 3).map((cs, i) => (
                  <CaseStudyCard key={cs.slug} caseStudy={cs} delay={i * 0.08} />
                ))}
              </div>
            </>
          ) : (
            <Reveal>
              <div className="card bg-cream-2 border-dashed text-center px-8 py-16 max-w-2xl mx-auto">
                <span className="eyebrow justify-center">Case Studies</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-4">
                  {caseStudiesJson.heading}
                </h2>
                <p className="text-ink-soft text-[15px] leading-relaxed">
                  {caseStudiesJson.placeholderMessage}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>


      {/* =====================================================
          ABOUT TEASER
      ===================================================== */}
      <section className="section bg-cream-2">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <Reveal>
            <span className="eyebrow">
              About ChoteBade
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl mb-5 leading-tight">
              {about.heading}
            </h2>

            <p className="text-ink-soft text-[15.5px] leading-relaxed mb-3">
              {about.paragraphs[0]} {about.paragraphs[1]}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-bold text-[14px] text-saffron hover:gap-2.5 transition-all"
            >
              More about us
              <ArrowRight size={15} />
            </Link>
          </Reveal>


          {/* RIGHT */}
          <Reveal delay={0.1}>
            <div className="card p-7">

              <span className="text-[11px] font-bold uppercase tracking-widest text-ink-soft mb-4 block">
                {about.audience.heading}
              </span>

              <div className="flex flex-wrap gap-2">
                {about.audience.items.map((a) => (
                  <span
                    key={a}
                    className="pill bg-white border border-line text-ink/75"
                  >
                    {a}
                  </span>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="section text-center">
        <div className="container-page">

          <Reveal>

            <span className="eyebrow justify-center">
              Ready When You Are
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl max-w-xl mx-auto mb-4">
              What&apos;s difficult in your business right now?
            </h2>

            <p className="text-ink-soft text-[15.5px] max-w-md mx-auto mb-9">
              No need for technical details. Just tell us the problem.
              We&apos;ll figure out together what a simple digital solution
              could look like.
            </p>

            <div className="flex flex-wrap gap-3.5 justify-center">

              <Link
                href="/contact"
                className="btn-primary"
              >
                Tell Us Your Problem
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Let&apos;s Talk
              </a>

            </div>

          </Reveal>

        </div>
      </section>

    </div>
  );
}