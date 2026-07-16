"use client";

import { motion } from "framer-motion";


export default function HeroGlow() {

  return (

    <>

      {/* Main Center Aura */}

      <motion.div

        animate={{

          scale:[1,1.08,1],

          opacity:[0.25,0.4,0.25],

        }}

        transition={{

          duration:10,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[650px]
        w-[650px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#a78b71]/20
        blur-[130px]
        "

        style={{

          willChange:"transform, opacity",

        }}

      />





      {/* Top Gold Light */}


      <motion.div

        animate={{

          y:[0,30,0],

          opacity:[0.15,0.35,0.15],

        }}

        transition={{

          duration:12,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
        pointer-events-none
        absolute
        -top-32
        right-20
        h-72
        w-72
        rounded-full
        bg-[#a78b71]/20
        blur-[100px]
        "


        style={{

          willChange:"transform, opacity",

        }}

      />






      {/* Bottom Ambient Light */}


      <motion.div

        animate={{

          x:[0,25,0],

          opacity:[0.1,0.25,0.1],

        }}


        transition={{

          duration:14,

          repeat:Infinity,

          ease:"easeInOut",

        }}


        className="
        pointer-events-none
        absolute
        bottom-0
        left-0
        h-80
        w-80
        rounded-full
        bg-[#c9b8a0]/10
        blur-[110px]
        "


        style={{

          willChange:"transform, opacity",

        }}

      />



    </>

  );

}