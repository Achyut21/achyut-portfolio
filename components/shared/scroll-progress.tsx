"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Derive opacity from scroll position — visible after first ~5% of page scroll
  // No extra scroll listener needed — framer-motion's useScroll handles it all
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.03], [0, 0, 1]);

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-primary"
      style={{ scaleX: scrollYProgress, opacity }}
    />
  );
}
