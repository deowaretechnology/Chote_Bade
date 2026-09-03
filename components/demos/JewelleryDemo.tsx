"use client";

import { useState } from "react";
import { Gem, Check, RotateCcw, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const products = [
  { id: "necklace", label: "Kundan Necklace Set", price: "₹18,500" },
  { id: "earrings", label: "Pearl Drop Earrings", price: "₹4,200" },
  { id: "bangle", label: "Gold Plated Bangle", price: "₹6,800" },
  { id: "ring", label: "Diamond Ring", price: "₹32,000" },
];

export default function JewelleryDemo() {
  const [product, setProduct] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");

  const reset = () => {
    setProduct(null);
    setSent(false);
    setPhone("");
  };

  const selected = products.find((p) => p.id === product);

  return (
    <div className="card overflow-hidden">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[14px]">Aura Jewels — Catalogue</span>
        {(product || sent) && (
          <button onClick={reset} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            <RotateCcw size={12} /> Start over
          </button>
        )}
      </div>

      <div className="p-6 md:p-8 min-h-[280px]">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
              <div className="h-14 w-14 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                <Check className="text-green" size={26} />
              </div>
              <h4 className="font-display font-bold text-xl mb-2">Enquiry Sent!</h4>
              <p className="text-ink-soft text-[14.5px]">Our team will follow up about the {selected?.label} shortly.</p>
            </motion.div>
          ) : !product ? (
            <motion.div key="catalogue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[13px] font-semibold text-ink-soft mb-4">Browse the catalogue</p>
              <div className="grid grid-cols-2 gap-3">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProduct(p.id)}
                    className="flex flex-col gap-2.5 p-4 rounded-xl border border-line hover:border-saffron hover:bg-saffron-tint transition-colors text-left"
                  >
                    <div className="h-16 rounded-lg bg-[#EEF1F6] flex items-center justify-center">
                      <Gem size={20} className="text-navy" />
                    </div>
                    <span className="font-semibold text-[13px]">{p.label}</span>
                    <span className="text-[12px] text-saffron-dark font-bold">{p.price}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="enquiry" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <button onClick={() => setProduct(null)} className="flex items-center gap-1.5 text-ink-soft hover:text-ink text-xs font-semibold mb-5">
                <ArrowLeft size={13} /> Back to catalogue
              </button>
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-cream-2">
                <div className="h-12 w-12 rounded-lg bg-[#EEF1F6] flex items-center justify-center shrink-0">
                  <Gem size={18} className="text-navy" />
                </div>
                <div>
                  <p className="font-semibold text-[13.5px]">{selected?.label}</p>
                  <p className="text-[12px] text-saffron-dark font-bold">{selected?.price}</p>
                </div>
              </div>
              <label className="text-[13px] font-semibold text-ink-soft mb-2 block">Your phone / WhatsApp number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-line focus:border-saffron outline-none text-[14px] mb-4"
              />
              <button
                onClick={() => phone.length > 3 && setSent(true)}
                disabled={phone.length <= 3}
                className="btn-primary !w-full disabled:opacity-40 disabled:pointer-events-none"
              >
                Send Enquiry
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
