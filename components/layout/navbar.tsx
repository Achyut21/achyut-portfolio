"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navigation";

// Import but hide the visible button
import { CommandPalette } from "@/components/ui/command-palette";
import { ThreeDCard } from "@/components/3d-card";

// Hoisted outside component — these never change, no reason to recreate per render
const navbarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
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
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const isScrolledBgClass =
  "bg-background/40 dark:bg-background/30 backdrop-blur-md border-[0.5px] border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.03)]";

const notScrolledBgClass =
  "bg-background/20 backdrop-blur-sm border-[0.5px] border-white/10 dark:border-white/5";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Use ref for lastScrollY — avoids re-renders and prevents listener re-attachment
  const lastScrollYRef = useRef(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    // Cancel any pending rAF to avoid stacking
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const lastY = lastScrollYRef.current;

      // Only update state when values actually change
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
    // Initialize from current scroll position to avoid flash on reload-while-scrolled
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
                {/* Logo with fixed width */}
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

                {/* Desktop Navigation - Centered */}
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

                {/* Theme toggle - Right aligned with fixed width */}
                <div className="flex w-[160px] justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <ThemeSwitch />
                  </motion.div>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="ml-4 md:hidden"
                  >
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                  </motion.div>
                  <SheetContent side="right" className="p-0">
                    <div className="flex h-full flex-col">
                      <div className="flex items-center justify-between p-6">
                        <Link
                          href="/"
                          className="font-display text-2xl font-bold transition-colors hover:text-primary"
                        >
                          Achyut Katiyar
                        </Link>
                        <ThemeSwitch />
                      </div>
                      <nav aria-label="Mobile navigation" className="flex-1 px-6 py-8">
                        <ul className="flex flex-col gap-1">
                          {navItems.map((item, i) => (
                            <motion.li
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  "block rounded-md px-4 py-3 text-lg font-medium transition-colors",
                                  pathname === item.href
                                    ? "bg-muted/60 text-primary"
                                    : "text-muted-foreground hover:bg-muted/30 hover:text-primary"
                                )}
                              >
                                {item.title}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </ThreeDCard>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}
