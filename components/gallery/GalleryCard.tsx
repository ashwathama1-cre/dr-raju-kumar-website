"use client";

import { motion } from "framer-motion";

type Props = {
  title:string;
  category:string;
  image:string;
};


export default function GalleryCard({
  title,
  category,
  image,
}:Props){

  return (

    <motion.div

      whileHover={{
        y:-10,
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


      <div
        className="
        aspect-[4/3]
        overflow-hidden
        bg-gradient-to-br
        from-neutral-900
        via-neutral-950
        to-black
        "
      >

        {/* Placeholder image */}

        <div
          className="
          flex
          h-full
          items-center
          justify-center
          text-6xl
          "
        >

          🏥

        </div>


      </div>



      {/* Overlay */}


      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-transparent
        opacity-0
        transition
        duration-500
        group-hover:opacity-80
        "
      />



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