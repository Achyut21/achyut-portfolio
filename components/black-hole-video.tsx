"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme !== "dark") return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 z-[-2] overflow-hidden"
    >
      <video
        src="/blackhole.webm"
        className="absolute top-[-340px] left-0 h-[670px] w-[700px] rotate-180 object-cover opacity-70 lg:h-[700px] lg:w-full"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        width={700}
        height={670}
      />
    </motion.div>
  );
}
