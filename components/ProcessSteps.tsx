"use client";

import {
  Palette,
  Lightbulb,
  Code2,
  Rocket,
  Sparkles,
  MousePointer2,
  Braces,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

const stepStyles = [
  {
    number: "01",
    numberColor: "text-orange-500",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500",
    blob: "bg-orange-100",
    dot: "bg-pink-400",
    icon: Palette,
    miniIcon: Sparkles,
  },
  {
    number: "02",
    numberColor: "text-emerald-500",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-500",
    blob: "bg-emerald-100",
    dot: "bg-yellow-400",
    icon: Lightbulb,
    miniIcon: Sparkles,
  },
  {
    number: "03",
    numberColor: "text-pink-500",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-500",
    blob: "bg-pink-100",
    dot: "bg-cyan-400",
    icon: Code2,
    miniIcon: Braces,
  },
  {
    number: "04",
    numberColor: "text-purple-500",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-500",
    blob: "bg-purple-100",
    dot: "bg-yellow-400",
    icon: Rocket,
    miniIcon: MousePointer2,
  },
];

function StepArtwork({ index }: { index: number }) {
  const style = stepStyles[index];
  const Icon = style.icon;
  const MiniIcon = style.miniIcon;

  return (
    <div className="relative w-[170px] h-[145px] mx-auto">
      {/* organic blob */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[125px]
          h-[92px]
          ${style.blob}
          rounded-[48%_52%_58%_42%]
          rotate-[-8deg]
        `}
      />

      {/* small floating dot */}
      <span
        className={`
          absolute
          right-5
          top-5
          w-4
          h-4
          rounded-full
          ${style.dot}
          animate-process-float
        `}
      />

      {/* tiny grey dot */}
      <span className="absolute left-6 top-9 w-1.5 h-1.5 rounded-full bg-black/20" />
      <span className="absolute right-8 bottom-6 w-1.5 h-1.5 rounded-full bg-black/20" />

      {/* main icon card */}
      <div
        className={`
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[72px]
          h-[62px]
          ${style.iconBg}
          rounded-[17px]
          flex
          items-center
          justify-center
          rotate-[-5deg]
          shadow-[0_12px_25px_rgba(0,0,0,0.10)]
          animate-process-breathe
        `}
      >
        <Icon size={31} strokeWidth={1.8} className="text-white" />
      </div>

      {/* small floating card */}
      <div
        className="
          absolute
          left-7
          bottom-5
          w-10
          h-10
          bg-white
          rounded-xl
          flex
          items-center
          justify-center
          shadow-[0_8px_20px_rgba(0,0,0,0.10)]
          rotate-[8deg]
        "
      >
        <MiniIcon size={18} strokeWidth={2} className={style.iconColor} />
      </div>
    </div>
  );
}

function Step({ step, index }: { step: ProcessStep; index: number }) {
  const style = stepStyles[index];

  const isTop = index % 2 === 0;

  return (
    <div
      className={`
        process-step
        relative
        ${isTop ? "md:-translate-y-8" : "md:translate-y-8"}
      `}
      style={{
        animationDelay: `${index * 120}ms`,
      }}
    >
      <Reveal delay={index * 0.5}>
        <div className="flex flex-col items-center">
          {/* TOP POSITION */}
          {isTop && (
            <>
              <StepArtwork index={index} />

              {/* dotted vertical connector */}
              <div className="hidden md:block h-9 border-l border-dashed border-black/20 relative">
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 ring-4 ring-[#fcfaf7]" />
              </div>
            </>
          )}

          {/* text */}
          <div className="text-center max-w-[190px]">
            <div
              className={`
                font-display
                font-extrabold
                text-[26px]
                leading-none
                tracking-tight
                ${style.numberColor}
              `}
            >
              {style.number}
            </div>

            <h3 className="mt-1.5 font-display font-bold text-[15px] md:text-base">
              {step.title}
            </h3>

            <p className="mt-2 text-[11px] md:text-xs leading-5 text-ink-soft">
              {step.description}
            </p>
          </div>

          {/* BOTTOM POSITION */}
          {!isTop && (
            <>
              {/* dotted vertical connector */}
              <div className="hidden md:block h-9 border-l border-dashed border-black/20 relative">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-pink-400 ring-4 ring-[#fcfaf7]" />
              </div>

              <StepArtwork index={index} />
            </>
          )}
        </div>
      </Reveal>

      {/* mobile connector */}
      {index < 3 && (
        <div className="md:hidden flex flex-col items-center mt-8 mb-2">
          <div className="h-8 border-l border-dashed border-black/20" />

          <span className="w-2 h-2 rounded-full bg-pink-400" />

          <div className="h-8 border-l border-dashed border-black/20" />
        </div>
      )}
    </div>
  );
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  const visibleSteps = steps.slice(0, 4);

  return (
    <div className="relative py-5 md:py-10">
      {/* =================================================
          DESKTOP MAIN CONNECTING LINE
      ================================================= */}
      <div
        className="
          hidden
          md:block
          absolute
          left-[12.5%]
          right-[12.5%]
          top-1/2
          border-t
          border-dashed
          border-black/20
        "
      />

      {/* glowing center line */}
      <div
        className="
          hidden
          md:block
          absolute
          left-[12.5%]
          right-[12.5%]
          top-1/2
          h-px
          bg-gradient-to-r
          from-transparent
          via-pink-300/50
          to-transparent
        "
      />

      {/* =================================================
          STEPS
      ================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5">
        {visibleSteps.map((step, index) => (
          <Step key={`${step.title}-${index}`} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
