"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import { getIcon } from "@/lib/icons";
import { useContent } from "@/lib/useContent";
import { getAboutPage } from "@/lib/content";
import aboutJson from "@/data/about.json";
import siteConfig from "@/data/siteConfig.json";

const audienceIcons: Record<string, string> = {
  "Salon / Beauty Studio": "scissors",
  "Jewellery Boutique": "gem",
  "Cafe / Restaurant": "coffee",
  "Boutique / Clothing Store": "shirt",
  Consultant: "briefcase",
  Freelancer: "laptop",
  "Local Service Business": "wrench",
  "Small Shops": "store",
};

const audienceTones = [
  "bg-saffron-tint text-saffron-dark",
  "bg-[#EEF1F6] text-navy",
  "bg-green-tint text-green",
];

export default function About() {
  const about = useContent(getAboutPage, aboutJson);
  return (
    <div className="pt-24 md:pt-28">
      <section className="section !pb-14">
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="eyebrow">About ChoteBade</span>

            <AnimatedHeading
              as="h1"
              text={about.heading}
              className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-8"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-ink-soft text-[16px] leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {about.promises && about.promises.length > 0 && (
            <Reveal delay={0.15}>
              <div className="card bg-green-tint border-green/20 p-6 md:p-8 mt-8">
                {about.promisesHeading && (
                  <span className="text-[11px] font-bold uppercase tracking-widest text-green mb-4 block">
                    {about.promisesHeading}
                  </span>
                )}
                <ul className="flex flex-col gap-3">
                  {about.promises.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[14.5px] text-ink/80 leading-relaxed"
                    >
                      <Check size={15} className="text-green mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section !pt-0">
        <div className="container-page">
          <Reveal>
            <div className="card bg-navy border-none p-8 md:p-12 flex flex-col items-center text-center">
              {/* Exact public/logo.png */}
              <img
                src="/logo.png"
                alt="ChoteBade"
                className="w-auto h-16 md:h-20 object-contain mb-6"
              />

              <p className="font-display italic text-white/80 text-xl md:text-2xl max-w-lg">
                &ldquo;{siteConfig.brand.tagline} {siteConfig.brand.subTagline}
                &rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section !pt-0 bg-cream-2">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <span className="eyebrow justify-center">Who We Build For</span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl">
                {about.audience.heading}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {about.audience.items.map((a, i) => {
              const Icon = getIcon(audienceIcons[a] || "store");
              const tone = audienceTones[i % audienceTones.length];
              return (
                <Reveal key={a} delay={i * 0.06} width="100%">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="card h-full flex flex-col items-center text-center gap-3 py-6 px-4 hover:border-saffron/40 hover:shadow-[0_16px_32px_-18px_rgba(34,26,20,0.25)] transition-[border-color,box-shadow] duration-300"
                  >
                    <div
                      className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${tone}`}
                    >
                      <Icon size={19} />
                    </div>
                    <span className="text-[13.5px] font-semibold text-ink leading-snug min-h-[36px] flex items-center justify-center">
                      {a}
                    </span>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container-page">
          <Reveal>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl mb-6">
              Let&apos;s talk about your business.
            </h2>

            <Link href="/contact" className="btn-primary">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}