"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";

const floatingSocials = socialLinks.filter((s) => s.id !== "phone");

export function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-1/2 right-4 z-50 hidden -translate-y-1/2 flex-col gap-4 lg:flex"
    >
      {floatingSocials.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          className="rounded-full border bg-background p-3 shadow-lg transition-all hover:text-primary hover:shadow-xl"
          aria-label={social.name}
        >
          {getIconComponent(social.icon)}
        </motion.a>
      ))}

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mx-auto mt-4 h-20 w-px bg-border"
        style={{ originY: 0 }}
      />
    </motion.div>
  );
}
