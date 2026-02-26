"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeSwitch } from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";
import { CommandPalette } from "@/components/ui/command-palette";
import { ThreeDCard } from "@/components/3d-card";

// ─── Animation variants (hoisted — never recreated) ─────────────────────────

const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 0.5,
      duration: 0.1,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.1, ease: "easeInOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: "easeOut" as const },
  }),
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

const isScrolledBgClass =
  "bg-background/40 dark:bg-background/30 backdrop-blur-md border-[0.5px] border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)]";

const notScrolledBgClass =
  "bg-background/20 backdrop-blur-sm border-[0.5px] border-white/10 dark:border-white/5";

// ─── Mobile dropdown menu ────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  onClose,
  toggleButtonRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, toggleButtonRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Floating dropdown card */}
          <motion.div
            ref={menuRef}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-[5rem] right-4 left-4 z-50 md:hidden"
          >
            <div className="overflow-hidden rounded-2xl border-[0.5px] border-white/20 bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl dark:border-white/10">
              <nav aria-label="Mobile navigation" className="p-3">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        isActive
                          ? "bg-muted/80 text-primary"
                          : "text-muted-foreground hover:bg-muted/40 hover:text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                {/* Resume download button */}
                <div className="mt-2 border-t border-border/30 pt-2">
                  <a
                    href="/resume.pdf"
                    download="Achyut_Katiyar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Resume
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main navbar ─────────────────────────────────────────────────────────────

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number>(0);
  const mobileMenuToggleRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const lastY = lastScrollYRef.current;

      const shouldHide = currentScrollY > lastY && currentScrollY > 100;
      const shouldBeScrolled = currentScrollY > 20;

      setIsVisible((prev) => {
        const next = !shouldHide;
        return prev === next ? prev : next;
      });

      setIsScrolled((prev) => {
        return prev === shouldBeScrolled ? prev : shouldBeScrolled;
      });

      lastScrollYRef.current = currentScrollY;
    });
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    setIsScrolled(window.scrollY > 20);
    setIsMounted(true);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <>
      {/* Hidden command palette for keyboard shortcuts */}
      <div className="sr-only">
        <CommandPalette />
      </div>

      <AnimatePresence>
        {isVisible && isMounted && (
          <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              "fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-xl px-4 py-3 transition-all duration-300",
              isScrolled ? isScrolledBgClass : notScrolledBgClass
            )}
          >
            <ThreeDCard className="w-full">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-[160px]">
                  <Link
                    href="/"
                    className="font-display text-xl font-bold transition-colors hover:text-primary"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Achyut Katiyar
                    </motion.span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden flex-1 justify-center md:flex">
                  <nav aria-label="Main navigation" className="flex items-center gap-1">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.href}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "variable-font rounded-md px-4 py-2 text-sm font-medium transition-all hover:bg-muted/50 hover:text-primary",
                            pathname === item.href
                              ? "font-variation-settings: 'wght' 600 bg-muted/60 text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Right side — theme toggle + mobile hamburger */}
                <div className="flex w-[160px] items-center justify-end gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <ThemeSwitch />
                  </motion.div>

                  {/* Mobile menu toggle */}
                  <motion.button
                    ref={mobileMenuToggleRef}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary md:hidden"
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.button>
                </div>
              </div>
            </ThreeDCard>
          </motion.header>
        )}
      </AnimatePresence>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        toggleButtonRef={mobileMenuToggleRef}
      />
    </>
  );
}
