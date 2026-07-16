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

      staggerChildren:0.12,

      delayChildren:0.15,

    },

  },

};



const itemVariants = {

  hidden:{

    opacity:0,

    y:35,

  },


  visible:{

    opacity:1,

    y:0,


    transition:{

      duration:0.7,

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



      {/* Premium Background Glow */}


      <motion.div

        animate={{

          scale:[1,1.1,1],

          opacity:[0.25,0.45,0.25],

        }}

        transition={{

          duration:8,

          repeat:Infinity,

          ease:"easeInOut",

        }}

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




        {/* SECTION HEADER */}


        <motion.div


          initial={{

            opacity:0,

            y:30,

          }}


          whileInView={{

            opacity:1,

            y:0,

          }}


          viewport={{

            once:true,

            amount:0.3,

          }}


          transition={{

            duration:0.7,

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






        {/* GALLERY GRID */}



        <motion.div


          variants={containerVariants}


          initial="hidden"


          whileInView="visible"



          viewport={{

            once:true,

            amount:0.15,

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



                style={{

                  willChange:"transform, opacity",

                }}


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