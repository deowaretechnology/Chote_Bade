"use client";

/* getIcon() returns a stable reference from a static lookup table, so using
   it as a JSX component tag is safe even though this rule flags the pattern. */
/* eslint-disable react-hooks/static-components */

import { Check } from "lucide-react";
import { getIcon } from "../lib/icons";
import Reveal from "./Reveal";

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  points: string[];
  delay?: number;
  compact?: boolean;
}

export default function SolutionCard({ icon, title, description, points, delay = 0, compact = false }: SolutionCardProps) {
  const Icon = getIcon(icon);
  return (
    <Reveal delay={delay}>
      <div className="card p-7 h-full">
        <div className="h-12 w-12 rounded-xl bg-navy flex items-center justify-center mb-5">
          <Icon size={21} className="text-saffron" strokeWidth={2} />
        </div>
        <h3 className="font-display font-bold text-lg text-ink mb-2.5">{title}</h3>
        <p className="text-ink-soft text-[14.5px] leading-relaxed mb-5">{description}</p>
        {!compact && (
          <ul className="flex flex-col gap-2 pt-5 border-t border-line">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[13.5px] text-ink/75">
                <Check size={14} className="text-green shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}
