"use client";

import { StarsCanvas } from "@/components/star-background";

/**
 * Wraps a page's heading section with a star background and gradient fade-out.
 * Used on every page to scope the stars to the top/hero area only.
 *
 * Enforces a consistent minimum height so all page headers feel uniform.
 * The home hero overrides this with its own min-h-screen.
 */
export function StarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden">
      <StarsCanvas />
      {children}
      {/* Multi-stop gradient fade — smooth dissolve into the page background */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-56"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 60%, transparent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
