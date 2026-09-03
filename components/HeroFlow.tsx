"use client";

import { motion } from "motion/react";
import {
  Building2,
  AlertCircle,
  Layers,
  Smile,
} from "lucide-react";

const steps = [
  {
    icon: Building2,
    label: "Business",
    tone: "bg-white text-ink border-line",
  },
  {
    icon: AlertCircle,
    label: "Problem",
    tone:
      "bg-saffron-tint text-saffron-dark border-saffron-light",
  },
  {
    label: "ChoteBade",
    tone: "bg-navy text-white border-navy",
    isBrand: true,
  },
  {
    icon: Layers,
    label: "Digital Solution",
    tone:
      "bg-saffron-tint text-saffron-dark border-saffron-light",
  },
  {
    icon: Smile,
    label: "Better Experience",
    tone:
      "bg-green-tint text-green border-green/20",
  },
];

export default function HeroFlow() {
  return (
    <div
      className="
        relative
        w-full
        min-w-0
        max-w-md
        mx-auto
        lg:max-w-none
        lg:-translate-y-6
      "
    >
      {/* =================================
          DESKTOP FLOW
      ================================== */}
      <div className="hidden sm:flex flex-col gap-0">
        {steps.map((s, i) => {
          const Icon = s.icon;

          return (
            <div key={s.label}>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15 + i * 0.12,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  flex items-center gap-4
                  rounded-2xl border
                  px-5 py-3
                  ${s.tone}
                  ${
                    i === 2
                      ? "shadow-[0_14px_30px_-12px_rgba(22,35,59,0.4)]"
                      : "shadow-sm"
                  }
                `}
              >
                <div
                  className={`
                    h-9 w-9
                    rounded-xl
                    flex items-center justify-center
                    shrink-0
                    overflow-hidden
                    ${
                      i === 2
                        ? "bg-white/10"
                        : "bg-white/70"
                    }
                  `}
                >
                  {s.isBrand ? (
                    <img
                      src="/logo.png"
                      alt="ChoteBade"
                      className="h-7 w-7 object-contain"
                    />
                  ) : (
                    Icon && (
                      <Icon
                        size={18}
                        strokeWidth={2}
                      />
                    )
                  )}
                </div>

                <span className="font-display font-bold text-[15px]">
                  {s.label}
                </span>
              </motion.div>

              {i < steps.length - 1 && (
                <div className="flex justify-start pl-8 py-0.5">
                  <svg
                    width="2"
                    height="18"
                    viewBox="0 0 2 18"
                    className="text-ink/20"
                  >
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="animate-dash"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =================================
          MOBILE FLOW
      ================================== */}
      <div className="sm:hidden">
        <div className="relative">

          {/* Vertical connector */}
          <div
            className="
              absolute
              left-[20px]
              top-7
              bottom-7
              border-l-2
              border-dashed
              border-ink/10
            "
          />

          <div className="relative flex flex-col gap-2.5">
            {steps.map((s, i) => {
              const Icon = s.icon;

              return (
                <motion.div
                  key={s.label}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.08 + i * 0.08,
                    duration: 0.4,
                  }}
                  className="relative"
                >
                  <div
                    className={`
                      flex
                      items-center
                      gap-3
                      w-full
                      rounded-xl
                      border
                      px-3
                      py-2.5
                      ${s.tone}
                      ${
                        i === 2
                          ? "shadow-[0_8px_20px_-8px_rgba(22,35,59,0.45)]"
                          : "shadow-sm"
                      }
                    `}
                  >
                    {/* Step icon */}
                    <div
                      className={`
                        relative
                        z-10
                        h-9
                        w-9
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        shrink-0
                        overflow-hidden
                        border
                        ${
                          i === 2
                            ? "bg-navy border-white/10"
                            : "bg-white border-white/70"
                        }
                      `}
                    >
                      {s.isBrand ? (
                        <img
                          src="/logo.png"
                          alt="ChoteBade"
                          className="h-7 w-7 object-contain"
                        />
                      ) : (
                        Icon && (
                          <Icon
                            size={17}
                            strokeWidth={2}
                          />
                        )
                      )}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <span className="font-display font-bold text-[13px]">
                        {s.label}
                      </span>

                      {i === 0 && (
                        <p className="text-[10px] text-ink/45 mt-0.5">
                          Your business
                        </p>
                      )}

                      {i === 1 && (
                        <p className="text-[10px] text-ink/45 mt-0.5">
                          We&apos;ll understand the real problem
                        </p>
                      )}

                      {i === 2 && (
                        <p className="text-[10px] text-white/55 mt-0.5">
                          We&apos;ll build the solution
                        </p>
                      )}

                      {i === 3 && (
                        <p className="text-[10px] text-ink/45 mt-0.5">
                          Simple digital solution
                        </p>
                      )}

                      {i === 4 && (
                        <p className="text-[10px] text-ink/45 mt-0.5">
                          Better business experience
                        </p>
                      )}
                    </div>

                    {/* Step number */}
                    <span
                      className={`
                        text-[10px]
                        font-bold
                        ${
                          i === 2
                            ? "text-white/35"
                            : "text-ink/25"
                        }
                      `}
                    >
                      0{i + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}