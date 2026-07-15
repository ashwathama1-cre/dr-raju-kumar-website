"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/shared/SectionHeading";

import AppointmentForm from "./AppointmentForm";

import ClinicInfo from "./ClinicInfo";


export default function Contact() {

  return (

    <section
      id="contact"

      className="
      relative
      overflow-hidden
      bg-[#0a0a0a]
      py-32
      "
    >


      {/* Background Glow */}


      <div
        className="
        absolute
        left-0
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
        absolute
        bottom-0
        right-0
        h-[400px]
        w-[400px]
        rounded-full
        bg-[#c9b8a0]/10
        blur-[150px]
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

        >

          <SectionHeading

            label="CONTACT"

            title="Schedule Your"

            highlight="Consultation"

            description="
            Book an appointment or contact the clinic
            for expert gastroenterology care.
            "

          />


        </motion.div>





        {/* Contact Grid */}


        <motion.div

          initial={{
            opacity:0,
            y:50,
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
            delay:0.2,
          }}

          className="
          grid
          gap-10
          lg:grid-cols-2
          "

        >


          {/* Appointment */}


          <div

            className="
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(167,139,113,0.08)]
            "

          >

            <AppointmentForm />

          </div>






          {/* Clinic Info */}


          <div

            className="
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            p-6
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(167,139,113,0.08)]
            "

          >

            <ClinicInfo />

          </div>



        </motion.div>



      </div>


    </section>

  );

}