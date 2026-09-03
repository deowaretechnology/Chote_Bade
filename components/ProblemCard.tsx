"use client";

/* getIcon() returns a stable reference from a static lookup table, so using
   it as a JSX component tag is safe even though this rule flags the pattern. */
/* eslint-disable react-hooks/static-components */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "../lib/icons";
import Reveal from "./Reveal";

interface ProblemCardProps {
  id: string;
  icon: string;
  title: string;
  body: string;
  delay?: number;
}

export default function ProblemCard({
  icon,
  title,
  body,
  delay = 0,
}: ProblemCardProps) {
  const Icon = getIcon(icon);

  return (
    <Reveal delay={delay}>
      <Link
        href="/contact"
        aria-label={`Find a solution for ${title}`}
        className="
          group
          relative
          flex
          h-full
          min-h-[290px]
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-line
          bg-white
          p-6
          sm:p-7

          transition-all
          duration-300
          ease-out

          hover:-translate-y-1
          hover:border-saffron/40
          hover:shadow-[0_20px_45px_-25px_rgba(34,26,20,0.35)]

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-saffron
          focus-visible:ring-offset-2
        "
      >
        {/* ================================
            TOP AREA
        ================================= */}

        <div className="flex items-start justify-between">
          {/* Icon */}
          <div
            className="
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              overflow-hidden
              rounded-[13px]
              bg-saffron-tint

              transition-all
              duration-300

              group-hover:bg-saffron
            "
          >
            {/* Decorative dot */}
            <span
              className="
                absolute
                right-1.5
                top-1.5
                h-1.5
                w-1.5
                rounded-full
                bg-saffron/30

                transition-colors
                duration-300

                group-hover:bg-white/50
              "
            />

            <Icon
              size={21}
              strokeWidth={2}
              className="
                relative
                z-10
                text-saffron-dark

                transition-all
                duration-300

                group-hover:scale-105
                group-hover:text-white
              "
            />
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-line
              bg-white
              text-ink/35

              transition-all
              duration-300

              group-hover:border-saffron
              group-hover:bg-saffron
              group-hover:text-white
            "
          >
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </div>
        </div>

        {/* ================================
            CONTENT
        ================================= */}

        <div className="mt-7 flex-1">
          <h3
            className="
              font-display
              font-bold
              text-[18px]
              leading-[1.25]
              text-ink

              transition-colors
              duration-200

              group-hover:text-saffron-dark
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              max-w-[40ch]
              text-[14px]
              leading-[1.65]
              text-ink-soft
            "
          >
            {body}
          </p>
        </div>

        {/* ================================
            BOTTOM ACTION
        ================================= */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-line
            pt-4
          "
        >
          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-ink/35

              transition-colors
              duration-300

              group-hover:text-saffron-dark
            "
          >
            Need a solution?
          </span>

          <span
            className="
              flex
              items-center
              gap-1
              text-[12px]
              font-bold
              text-saffron-dark

              opacity-0
              translate-x-[-5px]

              transition-all
              duration-300

              group-hover:translate-x-0
              group-hover:opacity-100
            "
          >
            Let&apos;s talk

            <ArrowUpRight
              size={13}
              strokeWidth={2}
            />
          </span>
        </div>

        {/* ================================
            BOTTOM HOVER ACCENT
        ================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-0
            bg-saffron

            transition-all
            duration-300

            group-hover:w-full
          "
        />
      </Link>
    </Reveal>
  );
}