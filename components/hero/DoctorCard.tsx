"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  MapPin,
  Star,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";

import FloatingCard from "./FloatingCard";


export default function DoctorCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      transition={{
        duration: 1,
        ease: "easeOut",
      }}

      className="
      relative
      w-full
      max-w-lg
      "
    >


      {/* Outer Gold Glow */}

      <motion.div

        animate={{
          opacity:[0.3,0.6,0.3],
          scale:[1,1.08,1],
        }}

        transition={{
          duration:6,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute
        inset-0
        rounded-[45px]
        bg-[#a78b71]/20
        blur-[100px]
        "
      />



      {/* Main Glass Card */}


      <div
        className="
        relative
        overflow-visible
        rounded-[45px]
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-2xl
        shadow-[0_0_100px_rgba(167,139,113,0.15)]
        "
      >


        {/* Doctor Image Area */}


        <div
          className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[35px]
          border
          border-white/10
          bg-gradient-to-br
          from-neutral-900
          via-neutral-950
          to-black
          flex
          items-center
          justify-center
          "
        >


{/* Optimized Doctor Image */}

<motion.div

  animate={{
    y:[0,-10,0],
  }}

  transition={{
    duration:5,
    repeat:Infinity,
    ease:"easeInOut",
  }}

  className="
  relative
  h-full
  w-full
  "
>


<Image

  src="/doctor-placeholder.jpg"

  alt="Dr. Raju Kumar Gastroenterologist and Liver Specialist Lucknow"

  fill

  priority

  sizes="(max-width:768px) 100vw, 500px"

  className="
  object-cover
  rounded-[35px]
  "
/>



{/* Image Overlay */}

<div

className="
absolute
inset-0
flex
items-end
justify-center
bg-gradient-to-t
from-black/80
via-transparent
to-transparent
"

>

<div
className="
mb-10
text-center
"
>


<h2
className="
text-3xl
font-bold
gold-gradient
"
>
Dr. Raju Kumar
</h2>


<p
className="
mt-3
text-gray-300
"
>
Gastroenterologist
</p>


<p
className="
mt-2
text-xs
uppercase
tracking-[0.35em]
text-[#c9b8a0]
"
>
Liver Specialist
</p>


</div>


</div>


</motion.div>

        </div>



        {/* Top Rating Badge */}


        <motion.div

          animate={{
            y:[0,-8,0],
          }}

          transition={{
            duration:4,
            repeat:Infinity,
          }}

          className="
          absolute
          -top-5
          right-8
          "
        >

          <div
            className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-[#a78b71]/40
            bg-black/70
            px-5
            py-3
            backdrop-blur-xl
            "
          >

            <Star
              size={16}
              className="text-[#a78b71]"
              fill="currentColor"
            />

            <span
              className="
              text-sm
              text-white
              "
            >
              4.9 Rating
            </span>

          </div>


        </motion.div>




        {/* Left Experience Badge */}


        <div
          className="
          absolute
          -left-10
          top-24
          "
        >

          <FloatingCard
            title="Experience"
            value="10+ Years"
          />

        </div>




        {/* Right Specialty Badge */}


        <div
          className="
          absolute
          -right-10
          bottom-28
          "
        >

          <FloatingCard
            title="Speciality"
            value="Endoscopy"
          />

        </div>





        {/* Bottom Information */}


        <div
          className="
          mt-8
          grid
          gap-4
          sm:grid-cols-2
          "
        >


          <InfoBox
            icon={<Award size={18}/>}
            title="Certified"
            value="Medical Expert"
          />


          <InfoBox
            icon={<UserRoundCheck size={18}/>}
            title="Patients"
            value="1000+"
          />


          <InfoBox
            icon={<Stethoscope size={18}/>}
            title="Treatment"
            value="Digestive Care"
          />


          <InfoBox
            icon={<MapPin size={18}/>}
            title="Clinic"
            value="Lucknow"
          />


        </div>



      </div>


    </motion.div>
  );
}





function InfoBox({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (

    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      p-4
      backdrop-blur-xl
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
          text-[#a78b71]
          "
        >
          {icon}
        </div>


        <div>

          <p
            className="
            text-xs
            uppercase
            tracking-wider
            text-gray-500
            "
          >
            {title}
          </p>


          <p
            className="
            mt-1
            text-sm
            text-white
            "
          >
            {value}
          </p>


        </div>


      </div>


    </div>

  );
}