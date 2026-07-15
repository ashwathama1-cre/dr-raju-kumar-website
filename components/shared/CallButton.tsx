"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";


export default function CallButton(){

  return (

    <motion.a

      href="tel:+917379755375"

      aria-label="Call Doctor"


      animate={{
        y:[0,8,0],
      }}

      transition={{
        duration:3,
        repeat:Infinity,
        ease:"easeInOut",
      }}


      whileHover={{
        scale:1.1,
      }}


      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-[#a78b71]
      bg-black/70
      text-[#c9b8a0]
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(167,139,113,0.35)]
      "

    >

      <Phone size={25}/>


    </motion.a>

  );

}