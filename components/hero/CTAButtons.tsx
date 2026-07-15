"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export default function CTAButtons() {
  return (
    <div
      className="
      flex
      flex-col
      gap-5
      mt-10
      sm:flex-row
      "
    >

      {/* Appointment Button */}

      <motion.a
        href="#contact"

        whileHover={{
          scale: 1.05,
          y: -4,
        }}

        whileTap={{
          scale:0.96,
        }}

        className="
        group
        relative
        overflow-hidden
        rounded-full
        px-8
        py-4
        bg-gradient-to-r
        from-[#c9b8a0]
        via-[#a78b71]
        to-[#8f7358]
        text-black
        font-semibold
        shadow-[0_0_40px_rgba(167,139,113,0.35)]
        "
      >

        {/* Shine Effect */}

        <span
          className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          group-hover:translate-x-full
          transition-transform
          duration-700
          "
        />


        <span
          className="
          relative
          flex
          items-center
          justify-center
          gap-3
          "
        >

          <Calendar size={19}/>

          Book Appointment

        </span>


      </motion.a>





      {/* Call Button */}


      <motion.a
        href="tel:+917379755375"

        whileHover={{
          scale:1.05,
          y:-4,
        }}

        whileTap={{
          scale:0.96,
        }}

        className="
        flex
        items-center
        justify-center
        gap-3
        rounded-full
        border
        border-[#a78b71]/60
        bg-white/[0.04]
        px-8
        py-4
        text-white
        backdrop-blur-xl
        transition
        hover:bg-[#a78b71]/10
        hover:border-[#a78b71]
        "
      >

        <Phone size={19}/>

        Call Now


      </motion.a>


    </div>
  );
}