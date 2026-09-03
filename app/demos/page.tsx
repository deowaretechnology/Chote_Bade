"use client";

import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import DemoCard from "@/components/DemoCard";
import { useContent } from "@/lib/useContent";
import { getDemoItems } from "@/lib/content";
import demosJson from "@/data/demos.json";

export default function Demos() {
  const items = useContent(getDemoItems, demosJson.items);
  const demos = { ...demosJson, items };

  return (
    <main className="pt-24 md:pt-28 bg-[#fcfaf7] min-h-screen">
      {/* ==============================
          HEADER
      ============================== */}
      <section className="section !pb-14">
        <div className="container-page text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow justify-center">{demos.label}</span>

            <AnimatedHeading
              as="h1"
              text={demos.heading}
              className="
                font-display
                font-extrabold
                text-4xl
                sm:text-5xl
                leading-[1.05]
                tracking-[-0.035em]
                mb-5
              "
            />

            <p className="text-ink-soft text-[15px] md:text-[16px] leading-relaxed max-w-xl mx-auto">
              {demos.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==============================
          DEMOS
      ============================== */}
      <section className="section !pt-0 pb-24 md:pb-32">
        <div className="container-page">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              items-stretch
            "
          >
            {demos.items.map((d, i) => (
              <div
                key={d.slug}
                className="
                  h-full
                  flex
                "
              >
                <DemoCard {...d} delay={i * 0.08} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}