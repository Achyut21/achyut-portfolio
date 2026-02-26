"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Dynamically import with no SSR
const StarBackgroundCanvas = dynamic(() => import("./star-background-canvas"), { ssr: false });

export function StarsCanvas() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <StarBackgroundCanvas isDark={theme === "dark"} />;
}
