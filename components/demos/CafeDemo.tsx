"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const menu: Record<string, { name: string; price: string }[]> = {
  Coffee: [
    { name: "Cappuccino", price: "₹150" },
    { name: "Cold Brew", price: "₹180" },
  ],
  Food: [
    { name: "Avocado Toast", price: "₹220" },
    { name: "Grilled Sandwich", price: "₹160" },
  ],
  Desserts: [
    { name: "Brownie", price: "₹140" },
    { name: "Cheesecake", price: "₹190" },
  ],
};

const tabs = Object.keys(menu);

export default function CafeDemo() {
  const [tab, setTab] = useState(tabs[0]);
  const [order, setOrder] = useState<string | null>(null);
  const [placed, setPlaced] = useState(false);

  const reset = () => {
    setOrder(null);
    setPlaced(false);
    setTab(tabs[0]);
  };

  return (
    <div className="card overflow-hidden">
      <div className="bg-navy text-white px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[14px]">Brew & Co. — Menu</span>
        {(order || placed) && (
          <button onClick={reset} className="flex items-center gap-1.5 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            <RotateCcw size={12} /> Start over
          </button>
        )}
      </div>

      <div className="p-6 md:p-8 min-h-[280px]">
        <AnimatePresence mode="wait">
          {placed ? (
            <motion.div key="placed" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-8">
              <div className="h-14 w-14 rounded-full bg-green-tint flex items-center justify-center mx-auto mb-5">
                <Check className="text-green" size={26} />
              </div>
              <h4 className="font-display font-bold text-xl mb-2">Order Received!</h4>
              <p className="text-ink-soft text-[14.5px]">{order} will be ready when you visit. See you soon!</p>
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex gap-2 mb-5">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                      tab === t ? "bg-saffron text-white border-saffron" : "border-line text-ink-soft hover:border-saffron/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                {menu[tab].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 rounded-xl border border-line hover:border-saffron/40 transition-colors">
                    <span className="font-semibold text-[13.5px]">{item.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-[13px] text-ink-soft">{item.price}</span>
                      <button
                        onClick={() => {
                          setOrder(item.name);
                          setPlaced(true);
                        }}
                        className="text-[12px] font-bold text-saffron hover:text-saffron-dark"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
