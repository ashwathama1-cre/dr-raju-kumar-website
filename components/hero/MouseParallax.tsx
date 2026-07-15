"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
}

export default function MouseParallax({
  children,
  strength = 20,
}: MouseParallaxProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-strength, strength]
  );

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [strength, -strength]
  );

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}