"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";
import type * as THREE from "three";

interface StarsLayerProps {
  count: number;
  radius: number;
  color: string;
  size: number;
}

function StarsLayer({ count, radius, color, size }: StarsLayerProps) {
  const ref = useRef<THREE.Points>(null);
  const { pointer } = useThree();

  const positions = useMemo(
    () => inSphere(new Float32Array(count * 3), { radius }) as Float32Array,
    [count, radius]
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;

      // Subtle mouse reactivity
      ref.current.rotation.x += pointer.x * 0.001;
      ref.current.rotation.y += pointer.y * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

interface StarBackgroundCanvasProps {
  isDark: boolean;
}

export default function StarBackgroundCanvas({ isDark }: StarBackgroundCanvasProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {isDark ? (
          <>
            {/* Dark mode — soft white primary + blue-violet accent */}
            <StarsLayer count={4000} radius={1.5} color="#fafafa" size={0.002} />
            <StarsLayer count={800} radius={1.5} color="#a5b4fc" size={0.003} />
          </>
        ) : (
          <>
            {/* Light mode — violet primary + deeper violet accent */}
            <StarsLayer count={3000} radius={1.5} color="#8b5cf6" size={0.002} />
            <StarsLayer count={600} radius={1.5} color="#6d28d9" size={0.003} />
          </>
        )}
      </Canvas>
    </div>
  );
}
