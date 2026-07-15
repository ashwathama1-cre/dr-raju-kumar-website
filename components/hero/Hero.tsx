"use client";

import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroGlow from "./HeroGlow";
import NeuralLines from "./NeuralLines";
import CTAButtons from "./CTAButtons";
import FloatingCard from "./FloatingCard";
import LiveBadge from "./LiveBadge";
import MouseParallax from "./MouseParallax";
import DoctorCard from "./DoctorCard";

import Float from "@/components/animations/Float";


const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
            py-10
           md:py-0

      overflow-hidden
      bg-[#0a0a0a]
      flex
      items-center
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND SYSTEM */}
      {/* ================================================= */}

      <HeroBackground />

      <HeroGlow />

      <NeuralLines />


      {/* Center Gold Aura */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[750px]
        w-[750px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#a78b71]/20
        blur-[180px]
        "
      />


      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}


      <div
        className="
        container
        relative
        z-10
        mx-auto
        px-5
        py-20
        sm:px-8
        md:py-28
        lg:px-10
        "
      >


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"

          className="
          grid
          items-center
          gap-12
          lg:gap-20
          lg:grid-cols-2
          "
        >


          {/* ================================ */}
          {/* LEFT CONTENT */}
          {/* ================================ */}


          <Float>


            <motion.div
              variants={itemVariants}
              className="
              max-w-2xl
              "
            >


              <LiveBadge />


              <motion.div
                variants={itemVariants}

                className="
                mt-8
                inline-flex
                rounded-full
                border
                border-[#a78b71]/40
                bg-white/5
                px-5
                py-2
                backdrop-blur-xl
                "
              >

                <span
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.45em]
                  text-[#c9b8a0]
                  "
                >

                  Best Gastroenterologist • Lucknow

                </span>

              </motion.div>



              <motion.h1
                variants={itemVariants}

                className="
                mt-10
                text-4xl
                sm:text-5xl
                font-bold
                italic
                leading-tight
                md:text-6xl
                lg:text-7xl
                "
              >

                Advanced


                <span className="gold-gradient">

                  {" "}Digestive Care

                </span>


                <br />


                With


                <span className="gold-gradient">

                  {" "}Trusted Expertise

                </span>


              </motion.h1>
                            {/* Description */}

              <motion.p
                variants={itemVariants}

                className="
                mt-10
                max-w-xl
                text-lg
                leading-9
                text-gray-400
                "
              >

                Dr. Raju Kumar provides expert diagnosis and
                advanced treatment for digestive disorders,
                liver diseases, GERD, IBS, fatty liver,
                gastritis, pancreatitis and modern endoscopy
                procedures with trusted medical expertise.

              </motion.p>



              {/* CTA */}

              <motion.div
                variants={itemVariants}

                className="
                mt-10
                "
              >

                <CTAButtons />

              </motion.div>




              {/* Statistics Cards */}


              <motion.div
                variants={itemVariants}

                className="
                mt-14
                grid
                gap-5
                sm:grid-cols-2
                "
              >


                <FloatingCard
                  title="Google Rating"
                  value="4.9 ★"
                />


                <FloatingCard
                  title="Patients Treated"
                  value="1000+"
                />


                <FloatingCard
                  title="Experience"
                  value="10+ Years"
                />


                <FloatingCard
                  title="Reviews"
                  value="120+"
                />


              </motion.div>


            </motion.div>


          </Float>



          {/* ===================================== */}
          {/* RIGHT SIDE DOCTOR SECTION START */}
          {/* ===================================== */}



          <Float delay={0.3}>


            <MouseParallax>


              <motion.div
                variants={itemVariants}

                className="
                relative
                flex
                justify-center
                "
              >
                
                <DoctorCard />
                
               </motion.div>


              

            </MouseParallax>


          </Float>


        </motion.div>


      </div>


    </section>
  );
}