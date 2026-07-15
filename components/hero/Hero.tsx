"use client";

import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import NeuralLines from "./NeuralLines";
import CTAButtons from "./CTAButtons";
import FloatingCard from "./FloatingCard";
import LiveBadge from "./LiveBadge";
import MouseParallax from "./MouseParallax";

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


                {/* Doctor Glow */}

                <motion.div

                  animate={{
                    scale:[1,1.1,1],
                  }}

                  transition={{
                    duration:6,
                    repeat:Infinity,
                    ease:"easeInOut",
                  }}

                  className="
                  absolute
                  h-[560px]
                  w-[560px]
                  rounded-full
                  bg-[#a78b71]/20
                  blur-[150px]
                  "
                />


                {/* Glass Doctor Container */}


                <div
                  className="
                  glass
                  relative
                  w-full
                  max-w-lg
                  mx-auto
                  rounded-[42px]
                  border
                  border-white/10
                  p-8
                  shadow-[0_0_120px_rgba(167,139,113,.15)]
                  "
                >


                  <div
                    className="
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[32px]
                    bg-gradient-to-br
                    from-neutral-900
                    via-neutral-950
                    to-black
                    flex
                    items-center
                    justify-center
                    "
                  >


                    <div
                      className="
                      text-center
                      "
                    >

                      <div className="text-[130px]">

                        👨‍⚕️

                      </div>


                      <h2
                        className="
                        mt-6
                        text-4xl
                        font-bold
                        gold-gradient
                        "
                      >

                        Dr. Raju Kumar

                      </h2>


                      <p
                        className="
                        mt-3
                        text-lg
                        text-gray-400
                        "
                      >

                        Gastroenterologist

                      </p>


                      <p
                        className="
                        mt-2
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-[#c9b8a0]
                        "
                      >

                        Liver Specialist

                      </p>


                    </div>


                  </div>
                     {/* Floating Specialty Card */}


                  <motion.div

                    animate={{
                      y:[0,-12,0],
                    }}

                    transition={{
                      duration:4,
                      repeat:Infinity,
                      ease:"easeInOut",
                    }}

                    className="
                    absolute
                    -left-6
                    md:-left-12
                    top-12
                    "
                  >

                    <FloatingCard
                      title="Speciality"
                      value="Endoscopy"
                    />

                  </motion.div>




                  {/* Floating Location Card */}


                  <motion.div

                    animate={{
                      y:[0,12,0],
                    }}

                    transition={{
                      duration:5,
                      repeat:Infinity,
                      ease:"easeInOut",
                    }}

                    className="
                    absolute
                    -right-6
                    md:-right-12
                    bottom-12
                    "
                  >

                    <FloatingCard
                      title="Location"
                      value="Lucknow"
                    />

                  </motion.div>




                  {/* Premium Badge */}


                  <motion.div

                    animate={{
                      rotate:[0,3,0,-3,0],
                    }}

                    transition={{
                      duration:8,
                      repeat:Infinity,
                    }}

                    className="
                    absolute
                    right-8
                    top-8
                    rounded-full
                    border
                    border-[#a78b71]/40
                    bg-black/40
                    px-5
                    py-3
                    backdrop-blur-xl
                    "
                  >

                    <span
                      className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-[#c9b8a0]
                      "
                    >

                      Trusted Care

                    </span>

                  </motion.div>



                </div>


              </motion.div>


            </MouseParallax>


          </Float>


        </motion.div>


      </div>


    </section>
  );
}