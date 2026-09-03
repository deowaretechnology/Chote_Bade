"use client";

import Link from "next/link";
import { Link2, Camera, MessageCircle, type LucideIcon } from "lucide-react";
import siteConfig from "../data/siteConfig.json";

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Link2,
  Instagram: Camera,
  WhatsApp: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="ChoteBade home" className="inline-flex">
              <img
                src="/logo.png"
                alt="ChoteBade"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              {siteConfig.footer.about}
            </p>

            <div className="flex gap-3 mt-6">
              {siteConfig.footer.social.map((s) => {
                const Icon = socialIcons[s.label];

                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="
                      h-9 w-9 rounded-full
                      border border-white/15
                      flex items-center justify-center
                      hover:border-saffron
                      hover:text-saffron
                      transition-colors
                    "
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5 block">
              Explore
            </span>

            <ul className="grid grid-cols-2 gap-3">
              {siteConfig.footer.links.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="
                      text-sm text-white/70
                      hover:text-saffron
                      transition-colors
                    "
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5 block">
              Talk to us
            </span>

            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="
                  text-sm text-white/80
                  hover:text-saffron
                  transition-colors
                  w-fit
                "
              >
                {siteConfig.brand.email}
              </a>

              <a
                href={siteConfig.brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm text-white/80
                  hover:text-saffron
                  transition-colors
                  w-fit
                "
              >
                {siteConfig.brand.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            pt-6
            border-t border-white/10
            flex flex-col sm:flex-row
            items-center justify-between
            gap-3
            text-xs text-white/40
          "
        >
          <span>{siteConfig.footer.copyright}</span>

          <span className="font-display italic text-white/50">
            &ldquo;{siteConfig.brand.tagline}&rdquo;
          </span>
        </div>
      </div>
    </footer>
  );
}