"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import type * as THREE from "three";

const STAR_COUNT = 1500;

function Stars() {
  const ref = useRef<THREE.Points>(null);

  // Generate sphere-distributed positions once — array length MUST be a multiple of 3
  const positions = useMemo(() => {
    return inSphere(new Float32Array(STAR_COUNT * 3), { radius: 1.2 }) as Float32Array;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function StarBackgroundCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] opacity-70">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
