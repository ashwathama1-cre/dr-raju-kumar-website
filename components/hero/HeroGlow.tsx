"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <>
      {/* Main Center Aura */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[900px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#a78b71]/20
        blur-[220px]
        "
      />



      {/* Top Right Floating Glow */}


      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        -right-40
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#a78b71]/10
        blur-[180px]
        "
      />



      {/* Bottom Left Glow */}


      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        -left-40
        bottom-10
        h-[450px]
        w-[450px]
        rounded-full
        bg-[#c9b8a0]/10
        blur-[160px]
        "
      />



      {/* Soft Gold Line */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        pointer-events-none
        absolute
        left-0
        right-0
        top-1/2
        h-px
        bg-[#a78b71]/20
        blur-sm
        "
      />

    </>
  );
}