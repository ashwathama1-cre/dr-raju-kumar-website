"use client";

import { motion } from "framer-motion";

import GalleryCard from "./GalleryCard";
import { galleryItems } from "./galleryData";


const containerVariants = {
  hidden:{
    opacity:0,
  },

  visible:{
    opacity:1,

    transition:{
      staggerChildren:0.15,
    },
  },
};


const itemVariants = {

  hidden:{
    opacity:0,
    y:40,
  },

  visible:{
    opacity:1,
    y:0,

    transition:{
      duration:0.8,
      ease:"easeOut",
    },
  },

};



export default function Gallery(){

  return (

    <section
      id="gallery"

      className="
      relative
      overflow-hidden
      bg-[#0a0a0a]
      py-28
      "
    >


      {/* Background Glow */}


      <div
        className="
        absolute
        left-1/2
        top-0
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[#a78b71]/10
        blur-[180px]
        "
      />





      <div
        className="
        container
        relative
        z-10
        mx-auto
        px-6
        "
      >



        {/* Heading */}


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
          mx-auto
          max-w-3xl
          text-center
          "
        >


          <p
            className="
            text-xs
            uppercase
            tracking-[0.5em]
            text-[#c9b8a0]
            "
          >

            Our Medical Environment

          </p>



          <h2
            className="
            mt-6
            text-4xl
            font-bold
            italic
            md:text-6xl
            "
          >

            Excellence In

            <span className="gold-gradient">

              {" "}Healthcare

            </span>


          </h2>



          <p
            className="
            mt-6
            text-lg
            leading-8
            text-gray-400
            "
          >

            Explore our advanced gastroenterology care,
            modern medical facilities and patient-focused
            treatment environment.

          </p>


        </motion.div>





        {/* Gallery Grid */}



        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true,
            amount:0.2,
          }}

          className="
          mt-16
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >



          {
            galleryItems.map((item)=>(

              <motion.div

                key={item.id}

                variants={itemVariants}

              >

                <GalleryCard

                  title={item.title}

                  category={item.category}

                  image={item.image}

                />

              </motion.div>

            ))
          }



        </motion.div>




      </div>


    </section>

  );

}