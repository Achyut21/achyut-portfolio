"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

const springConfig = { damping: 15, stiffness: 300 };

export function ThreeDCard({ children, className }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values instead of useState — updates bypass React's render cycle entirely
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Directly set motion values — no setState, no re-render
    rotateX.set(-((e.clientY - centerY) / (rect.height / 2)) * 2);
    rotateY.set(((e.clientX - centerX) / (rect.width / 2)) * 2);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
      }}
    >
      {children}
    </motion.div>
  );
}
