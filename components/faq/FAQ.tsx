"use client";

import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqData } from "./faqData";


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



export default function FAQ(){

  return (

    <section

      id="faq"

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
        right-0
        top-20
        h-[500px]
        w-[500px]
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




        {/* Header */}


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

            Patient Information

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

            Frequently Asked

            <span className="gold-gradient">

              {" "}Questions

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

            Find answers about treatments,
            procedures and appointments with
            Dr. Raju Kumar.

          </p>



        </motion.div>






        {/* FAQ List */}



        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once:true,
            amount:0.2,
          }}

          className="
          mx-auto
          mt-16
          max-w-4xl
          space-y-5
          "

        >


          {
            faqData.map((item,index)=>(

              <FAQItem

                key={index}

                question={item.question}

                answer={item.answer}

              />

            ))
          }



        </motion.div>




      </div>


    </section>

  );

}