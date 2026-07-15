"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";


export default function WhatsAppButton(){

  return (

    <motion.a

      href="https://wa.me/917379755375"

      target="_blank"

      aria-label="Chat on WhatsApp"


      animate={{
        y:[0,-8,0],
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
      bottom-24
      right-6
      z-50
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      bg-[#25D366]
      text-white
      shadow-[0_0_40px_rgba(37,211,102,0.5)]
      transition
      "

    >

      <MessageCircle size={26}/>


    </motion.a>

  );

}