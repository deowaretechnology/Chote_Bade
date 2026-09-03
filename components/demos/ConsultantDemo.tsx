"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const needs = ["Business Strategy", "Financial Planning", "Marketing Advice", "Legal Guidance"];
const slots = ["Tomorrow, 10:00 AM", "Tomorrow, 3:00 PM", "Thu, 11:30 AM"];

export default function ConsultantDemo() {
  const [step, setStep] = useState(0);
  const [need, setNeed] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);

  const reset = () => {
    setStep(0);
    setNeed(null);
    setSlot(null);
  };

  return (
    <div className="card overflow-hidden">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[14px]">Priya Sharma — Business Consultant</span>
        {step > 0 && (
          <button onClick={reset} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            <RotateCcw size={12} /> Start over
          </button>
        )}
      </div>

      <div className="p-6 md:p-8 min-h-[280px]">
        <AnimatePresence mode="wait">
          {step === 2 ? (
            <motion.div key="confirm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
              <div className="h-14 w-14 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                <Check className="text-green" size={26} />
              </div>
              <h4 className="font-display font-bold text-xl mb-2">Appointment Booked!</h4>
              <p className="text-ink-soft text-[14.5px] mb-1">{need} — {slot}</p>
              <p className="text-ink-soft text-[13px]">You&apos;ll get a reminder before your session.</p>
            </motion.div>
          ) : step === 1 ? (
            <motion.div key="slot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[13px] font-semibold text-ink-soft mb-4">
                Step 2 — Pick an appointment for <span className="text-ink">{need}</span>
              </p>
              <div className="flex flex-col gap-2.5">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSlot(s);
                      setStep(2);
                    }}
                    className="text-left px-4 py-3.5 rounded-xl border border-line hover:border-saffron hover:bg-saffron-tint transition-colors font-semibold text-[13.5px]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="need" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[13px] font-semibold text-ink-soft mb-4">Step 1 — What do you need help with?</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {needs.map((n) => (
                  <button
                    key={n}
                    onClick={() => {
                      setNeed(n);
                      setStep(1);
                    }}
                    className="px-4 py-3.5 rounded-xl border border-line hover:border-saffron hover:bg-saffron-tint transition-colors font-semibold text-[13.5px] text-left"
                  >
                    {n}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
