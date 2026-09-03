"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface FlowChainProps {
  items: string[];
  tone?: "light" | "dark";
}

export default function FlowChain({ items, tone = "light" }: FlowChainProps) {
  const isDark = tone === "dark";
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-2.5">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={
              isDark
                ? "text-[13px] font-bold px-4 py-2 rounded-full bg-white/10 text-white border border-white/15"
                : "text-[13px] font-bold px-4 py-2 rounded-full bg-white text-ink border border-line"
            }
          >
            {item}
          </motion.span>
          {i < items.length - 1 && (
            <ArrowRight size={15} className={isDark ? "text-white/30" : "text-ink/25"} />
          )}
        </div>
      ))}
    </div>
  );
}
