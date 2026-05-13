"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

function GridPattern({
  offsetX,
  offsetY,
  color = "#CD5C36",
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  color?: string;
}) {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="ks-grid-pattern"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 64 0 L 0 0 0 64"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#ks-grid-pattern)" />
    </svg>
  );
}

export function InfiniteGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.6) % 64);
    gridOffsetY.set((gridOffsetY.get() + 0.6) % 64);
  });

  const maskImage = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Full grid — always visible across entire hero */}
      <div className="absolute inset-0 opacity-[0.15]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Mouse spotlight — brighter reveal layer */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>
    </div>
  );
}
