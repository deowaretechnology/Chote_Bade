"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import ProcessSteps from "@/components/ProcessSteps";
import { useContent } from "@/lib/useContent";
import { getProcessSteps } from "@/lib/content";
import process from "@/data/process.json";

export default function HowWeWork() {
  const steps = useContent(
    () => getProcessSteps("howWeWork"),
    process.howWeWork.steps,
  );

  return (
    <main className="bg-[#fcfaf7] text-ink overflow-hidden">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20">
        {/* Decorative background shapes */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />
        <div className="absolute top-20 -right-28 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase text-orange-500 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                How We Work
              </span>
            </Reveal>

            <AnimatedHeading
              as="h1"
              text={process.howWeWork.heading}
              className="
                font-display
                font-extrabold
                text-4xl
                sm:text-5xl
                md:text-6xl
                leading-[1.05]
                tracking-[-0.04em]
              "
            />

            <Reveal>
              <p className="mt-6 max-w-xl mx-auto text-sm md:text-[15px] leading-7 text-ink-soft">
                Every business&apos;s problem is different. That&apos;s why we don&apos;t
                follow one fixed formula. We understand first, then plan,
                build, and finally deliver the solution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="relative pb-24 md:pb-32">
        {/* very subtle section glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-100/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-page max-w-6xl mx-auto relative">
          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY / CTA
      ===================================================== */}
      <section className="relative bg-[#fff1e5] py-20 md:py-28">
        {/* Decorative blobs */}
        <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -right-20 top-0 w-72 h-72 rounded-full bg-pink-200/25 blur-3xl" />

        <div className="container-page relative">
          <Reveal>
            <div
              className="
                max-w-3xl
                mx-auto
                rounded-[28px]
                border border-black/[0.06]
                bg-white
                px-7 py-10
                md:px-14 md:py-14
                text-center
                shadow-[0_25px_70px_rgba(30,20,10,0.07)]
              "
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-orange-500 mb-4">
                Our Philosophy
              </span>

              <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-4">
                {process.philosophy.heading}
              </h2>

              <p className="max-w-xl mx-auto text-sm md:text-[15px] leading-7 text-ink-soft mb-8">
                {process.philosophy.description}
              </p>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-orange-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(249,115,22,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_32px_rgba(249,115,22,0.28)]
                "
              >
                Tell Us Your Problem
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}