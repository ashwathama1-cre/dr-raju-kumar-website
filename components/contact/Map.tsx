"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";


export default function Map(){

  return (

    <motion.div

      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:0.8,
      }}

      className="
      relative
      mt-10
      overflow-hidden
      rounded-[36px]
      border
      border-white/10
      bg-white/[0.04]
      p-4
      backdrop-blur-xl
      shadow-[0_0_80px_rgba(167,139,113,0.08)]
      "
    >


      {/* Map Header */}


      <div
        className="
        mb-4
        flex
        items-center
        justify-between
        px-4
        "
      >


        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#a78b71]/20
            text-[#c9b8a0]
            "
          >

            <MapPin size={20}/>

          </div>


          <div>

            <p
              className="
              text-sm
              text-gray-400
              "
            >

              Clinic Location

            </p>


            <h3
              className="
              font-semibold
              text-white
              "
            >

              Lucknow, Uttar Pradesh

            </h3>


          </div>


        </div>




        <a

          href="https://maps.google.com"

          target="_blank"

          className="
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-[#a78b71]/40
          px-5
          py-2
          text-sm
          text-[#c9b8a0]
          transition
          hover:bg-[#a78b71]/10
          sm:flex
          "

        >

          <Navigation size={16}/>

          Directions


        </a>



      </div>





      {/* Map */}


      <div

        className="
        overflow-hidden
        rounded-[28px]
        "

      >

        <iframe

          src="https://www.google.com/maps?q=Lucknow%20Uttar%20Pradesh&output=embed"

          width="100%"

          height="400"

          style={{
            border:0,
          }}

          loading="lazy"

          title="Clinic Location"

          className="
          grayscale
          contrast-125
          opacity-80
          "
        />


      </div>



    </motion.div>

  );

}