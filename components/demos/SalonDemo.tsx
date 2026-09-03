"use client";

import { useState } from "react";
import { Scissors, Sparkles, Droplet, Clock, Check, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  { id: "haircut", label: "Haircut & Style", icon: Scissors, duration: "45 min" },
  { id: "facial", label: "Facial", icon: Sparkles, duration: "60 min" },
  { id: "spa", label: "Spa Treatment", icon: Droplet, duration: "90 min" },
];

const slots = ["11:00 AM", "1:30 PM", "3:00 PM", "5:30 PM"];

export default function SalonDemo() {
  const [service, setService] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const reset = () => {
    setService(null);
    setSlot(null);
    setConfirmed(false);
  };

  const selectedService = services.find((s) => s.id === service);

  return (
    <div className="card overflow-hidden">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[14px]">Glow Studio — Book a Service</span>
        {(service || confirmed) && (
          <button onClick={reset} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            <RotateCcw size={12} /> Start over
          </button>
        )}
      </div>

      <div className="p-6 md:p-8 min-h-[280px]">
        <AnimatePresence mode="wait">
          {confirmed ? (
            <motion.div key="confirm" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
              <div className="h-14 w-14 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                <Check className="text-green" size={26} />
              </div>
              <h4 className="font-display font-bold text-xl mb-2">Booking Confirmed!</h4>
              <p className="text-ink-soft text-[14.5px] mb-1">{selectedService?.label} at {slot}</p>
              <p className="text-ink-soft text-[13px]">A reminder will be sent 1 hour before your appointment.</p>
            </motion.div>
          ) : !service ? (
            <motion.div key="services" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[13px] font-semibold text-ink-soft mb-4">Step 1 — Choose a service</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className="flex flex-col items-center text-center gap-2.5 p-5 rounded-xl border border-line hover:border-saffron hover:bg-saffron-tint transition-colors"
                  >
                    <s.icon size={22} className="text-saffron-dark" />
                    <span className="font-semibold text-[13.5px]">{s.label}</span>
                    <span className="text-[11px] text-ink-soft">{s.duration}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="slots" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[13px] font-semibold text-ink-soft mb-4">
                Step 2 — Pick a time for <span className="text-ink">{selectedService?.label}</span>
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {slots.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setSlot(t);
                      setConfirmed(true);
                    }}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-line hover:border-saffron hover:bg-saffron-tint transition-colors font-semibold text-[13.5px]"
                  >
                    <Clock size={14} className="text-ink-soft" /> {t}
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
