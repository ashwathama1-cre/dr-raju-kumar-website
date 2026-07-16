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

      initial={{
        opacity:0,
      }}

      animate={{
        opacity:1,
      }}

      transition={{
        duration:1.5,
      }}

      style={{
        willChange:"opacity",
      }}

    >


      <defs>


        <linearGradient id="goldStroke">

          <stop
            offset="0%"
            stopColor="#c9b8a0"
          />


          <stop
            offset="100%"
            stopColor="#a78b71"
          />


        </linearGradient>


        <filter id="softGlow">


          <feGaussianBlur
            stdDeviation="3"
            result="coloredBlur"
          />


        </filter>


      </defs>





      {/* Main Neural Connections */}



      <motion.path

        d="M250 180 C550 150 720 280 820 430"

        stroke="url(#goldStroke)"

        strokeWidth="2"

        fill="none"

        animate={{

          opacity:[0.25,0.7,0.25],

        }}

        transition={{

          duration:5,

          repeat:Infinity,

          ease:"easeInOut",

        }}

      />





      <motion.path


        d="M1350 220 C1180 250 1000 340 820 430"


        stroke="url(#goldStroke)"


        strokeWidth="2"


        fill="none"



        animate={{

          opacity:[0.2,0.6,0.2],

        }}



        transition={{

          duration:6,

          repeat:Infinity,

          ease:"easeInOut",

        }}

      />






      <motion.path


        d="M380 700 C540 640 690 530 820 430"


        stroke="url(#goldStroke)"


        strokeWidth="1.5"


        strokeDasharray="8 12"


        fill="none"



        animate={{


          strokeDashoffset:[80,0],


        }}



        transition={{


          duration:8,

          repeat:Infinity,

          ease:"linear",

        }}


      />






      {/* Neural Nodes */}



      {[

        [820,430],

        [250,180],

        [1350,220],

        [380,700],

      ].map(([cx,cy],index)=>(



        <motion.circle


          key={index}


          cx={cx}


          cy={cy}


          r="6"


          fill="#c9b8a0"



          animate={{


            scale:[1,1.4,1],


            opacity:[0.5,1,0.5],


          }}



          transition={{


            duration:4+index,


            repeat:Infinity,


            ease:"easeInOut",

          }}



          style={{


            transformOrigin:`${cx}px ${cy}px`,


          }}


        />


      ))}



    </motion.svg>

  );

}