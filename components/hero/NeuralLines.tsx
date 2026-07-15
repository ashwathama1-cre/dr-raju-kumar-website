"use client";

import { motion } from "framer-motion";

export default function NeuralLines() {
  return (
    <motion.svg
      className="
      absolute
      inset-0
      h-full
      w-full
      pointer-events-none
      opacity-50
      "
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"

      animate={{
        y:[0,-8,0],
      }}

      transition={{
        duration:12,
        repeat:Infinity,
        ease:"easeInOut",
      }}
    >

      <defs>

        <linearGradient id="premiumGoldStroke">

          <stop
            offset="0%"
            stopColor="#c9b8a0"
          />

          <stop
            offset="50%"
            stopColor="#ffffff"
            stopOpacity="0.6"
          />

          <stop
            offset="100%"
            stopColor="#a78b71"
          />

        </linearGradient>


        <filter id="glow">

          <feGaussianBlur
            stdDeviation="4"
            result="coloredBlur"
          />

        </filter>

      </defs>



      {/* Main Neural Connections */}


      <path
        d="M250 180 C550 150 720 280 820 430"

        stroke="url(#premiumGoldStroke)"

        strokeWidth="3"

        fill="none"

      >

        <animate

          attributeName="stroke-dashoffset"

          from="300"

          to="0"

          dur="8s"

          repeatCount="indefinite"

        />

      </path>




      <path

        d="M1350 220 C1180 250 1000 340 820 430"

        stroke="url(#premiumGoldStroke)"

        strokeWidth="3"

        fill="none"

      >

        <animate

          attributeName="opacity"

          values="0.3;1;0.3"

          dur="6s"

          repeatCount="indefinite"

        />

      </path>




      <path

        d="M380 700 C540 640 690 530 820 430"

        stroke="url(#premiumGoldStroke)"

        strokeWidth="2"

        strokeDasharray="12 14"

        fill="none"

      >

        <animate

          attributeName="stroke-dashoffset"

          from="120"

          to="0"

          dur="7s"

          repeatCount="indefinite"

        />

      </path>





      {/* Glow Layer */}


      <circle

        cx="820"

        cy="430"

        r="30"

        fill="#a78b71"

        opacity="0.15"

        filter="url(#glow)"

      />





      {/* Animated Nodes */}



      <motion.circle

        cx="820"

        cy="430"

        r="8"

        fill="#c9b8a0"

        animate={{

          r:[8,14,8],

          opacity:[0.5,1,0.5],

        }}

        transition={{

          duration:3,

          repeat:Infinity,

        }}

      />




      <motion.circle

        cx="250"

        cy="180"

        r="6"

        fill="#a78b71"

        animate={{

          opacity:[0.3,1,0.3],

        }}

        transition={{

          duration:4,

          repeat:Infinity,

        }}

      />




      <motion.circle

        cx="1350"

        cy="220"

        r="6"

        fill="#a78b71"

        animate={{

          opacity:[0.3,1,0.3],

        }}

        transition={{

          duration:5,

          repeat:Infinity,

        }}

      />




      <motion.circle

        cx="380"

        cy="700"

        r="6"

        fill="#a78b71"

        animate={{

          opacity:[0.3,1,0.3],

        }}

        transition={{

          duration:6,

          repeat:Infinity,

        }}

      />



    </motion.svg>
  );
}