"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


type Props = {
  question: string;
  answer: string;
};


export default function FAQItem({
  question,
  answer,
}: Props) {

  const [open, setOpen] = useState(false);


  return (

    <motion.div

      initial={{
        opacity:0,
        y:20,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      className="
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      "
    >


      {/* Question Button */}

      <button

        onClick={() => setOpen(!open)}

        className="
        flex
        w-full
        items-center
        justify-between
        gap-5
        px-6
        py-6
        text-left
        "
      >

        <span
          className="
          text-lg
          font-semibold
          text-white
          "
        >

          {question}

        </span>


        <motion.span

          animate={{
            rotate: open ? 180 : 0,
          }}

          transition={{
            duration:0.3,
          }}

          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-[#a78b71]/40
          text-[#c9b8a0]
          "
        >

          <ChevronDown size={20}/>

        </motion.span>


      </button>




      {/* Answer */}

      <AnimatePresence>


        {
          open && (

            <motion.div

              initial={{
                height:0,
                opacity:0,
              }}

              animate={{
                height:"auto",
                opacity:1,
              }}

              exit={{
                height:0,
                opacity:0,
              }}

              transition={{
                duration:0.35,
              }}

              className="
              overflow-hidden
              "
            >

              <p
                className="
                px-6
                pb-6
                leading-8
                text-gray-400
                "
              >

                {answer}

              </p>


            </motion.div>

          )
        }


      </AnimatePresence>



    </motion.div>

  );

}