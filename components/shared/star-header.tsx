"use client";

import { StarsCanvas } from "@/components/star-background";

/**
 * Wraps a page's heading section with a star background and gradient fade-out.
 * Used on every page to scope the stars to the top/hero area only.
 */
export function StarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <StarsCanvas />
      {children}
      {/* Gradient fade — stars dissolve into the page background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
