"use client";

/* getIcon() returns a stable reference from a static lookup table, so using
   it as a JSX component tag is safe even though this rule flags the pattern. */
/* eslint-disable react-hooks/static-components */

import { getIcon } from "../lib/icons";

const accentMap: Record<string, { bg: string; chip: string; bar: string }> = {
  saffron: { bg: "bg-saffron-tint", chip: "bg-saffron text-white", bar: "bg-saffron/30" },
  navy: { bg: "bg-[#EEF1F6]", chip: "bg-navy text-white", bar: "bg-navy/20" },
  green: { bg: "bg-green-tint", chip: "bg-green text-white", bar: "bg-green/25" },
};

interface DemoMockupProps {
  icon: string;
  accent: string;
  business: string;
  className?: string;
}

export default function DemoMockup({ icon, accent, business, className = "" }: DemoMockupProps) {
  const Icon = getIcon(icon);
  const tone = accentMap[accent] || accentMap.saffron;

  return (
    <div className={`relative rounded-xl border border-line overflow-hidden bg-white ${className}`}>
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line bg-[#FAF7F2]">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
      </div>
      <div className={`p-5 ${tone.bg}`}>
        <div className="flex items-center gap-2.5 mb-4">
          <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${tone.chip}`}>
            <Icon size={16} />
          </div>
          <span className="font-display font-bold text-[13px] text-ink">{business}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className={`h-3 rounded-full w-3/4 ${tone.bar}`} />
          <div className={`h-3 rounded-full w-1/2 ${tone.bar}`} />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="h-12 rounded-lg bg-white/70 border border-white" />
          <div className="h-12 rounded-lg bg-white/70 border border-white" />
          <div className="h-12 rounded-lg bg-white/70 border border-white" />
        </div>
      </div>
    </div>
  );
}
