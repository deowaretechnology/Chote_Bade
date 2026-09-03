"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import siteConfig from "../data/siteConfig.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Intentionally close the mobile menu when the route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =========================
          MAIN NAVBAR
      ========================== */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-line py-2.5"
            : "bg-transparent py-4"
        )}
      >
        <div className="container-page flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            aria-label="ChoteBade home"
            className="flex items-center shrink-0"
          >
            <img
              src="/logo.png"
              alt="ChoteBade"
              className="
                block
                w-[125px]
                h-auto
                object-contain
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-[14px] font-semibold transition-colors duration-200",
                  pathname === link.path
                    ? "text-saffron"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact"
              className="
                btn-primary
                !py-2.5
                !px-5
                text-[13.5px]
              "
            >
              {siteConfig.navCta}
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="
              lg:hidden
              h-9
              w-9
              flex
              items-center
              justify-center
              rounded-lg
              border
              border-line
              bg-white/50
            "
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="w-[18px] h-[18px]" />
          </button>
        </div>
      </header>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-[60]
              bg-cream
              flex
              flex-col
              px-6
              pt-5
              pb-8
              lg:hidden
            "
          >
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between mb-8">

              {/* LOGO */}
              <Link
                href="/"
                aria-label="ChoteBade home"
                className="flex items-center"
              >
                <img
                  src="/logo.png"
                  alt="ChoteBade"
                  className="
                    block
                    w-[130px]
                    h-auto
                    object-contain
                  "
                />
              </Link>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                className="
                  h-9
                  w-9
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-line
                "
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <nav className="flex flex-col gap-1">
              {siteConfig.nav.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                  }}
                >
                  <Link
                    href={link.path}
                    className={cn(
                      "block py-3 text-xl font-display font-bold border-b border-line",
                      pathname === link.path
                        ? "text-saffron"
                        : "text-ink"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* MOBILE CTA */}
            <Link
              href="/contact"
              className="btn-primary mt-7 w-full text-center"
            >
              {siteConfig.navCta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}