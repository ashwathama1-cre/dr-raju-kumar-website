"use client";

import Image from "next/image";
import { motion } from "framer-motion";


type Props = {
  title: string;
  category: string;
  image: string;
};


export default function GalleryCard({
  title,
  category,
  image,
}: Props) {


  return (

    <motion.div

      whileHover={{
        y: -10,
      }}

      transition={{
        duration:0.4,
      }}

      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >


      {/* IMAGE AREA */}

      <div
        className="
        relative
        aspect-[4/3]
        overflow-hidden
        bg-gradient-to-br
        from-neutral-900
        via-neutral-950
        to-black
        "
      >


        <Image

          src={image}

          alt={`${title} - Dr. Raju Kumar Clinic Lucknow`}

          fill

          sizes="
          (max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          33vw
          "

          className="
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "

        />


      </div>



      {/* Dark Gradient Overlay */}


      <div

        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-black/20
        to-transparent
        opacity-70
        transition
        duration-500
        group-hover:opacity-90
        "

      />



      {/* Content */}


      <div

        className="
        absolute
        bottom-0
        p-6
        "

      >


        <p

          className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-[#c9b8a0]
          "

        >

          {category}

        </p>



        <h3

          className="
          mt-2
          text-xl
          font-semibold
          text-white
          "

        >

          {title}

        </h3>


      </div>



    </motion.div>

  );

}