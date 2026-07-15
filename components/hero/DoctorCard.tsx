"use client";

import Image from "next/image";
import { Award, HeartPulse, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export default function DoctorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="relative"
    >
      {/* Glow */}

      <div className="absolute inset-0 rounded-[42px] bg-[#a78b71]/20 blur-3xl" />

      {/* Glass Card */}

      <div className="glass relative overflow-hidden rounded-[42px] border border-white/10 p-6 backdrop-blur-xl">

        {/* Doctor Image */}

        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900">

          {/* Replace this image later */}

          <Image
            src="/doctor-placeholder.jpg"
            alt="Dr. Raju Kumar"
            fill
            priority
            className="
              object-cover
              grayscale
              transition-all
              duration-700
              hover:scale-105
              hover:grayscale-0
            "
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* Doctor Details */}

          <div className="absolute bottom-8 left-8">

            <h2 className="text-4xl font-bold italic text-white">
              Dr. Raju Kumar
            </h2>

            <p className="mt-2 uppercase tracking-[0.35em] text-[#c9b8a0] text-xs">
              Gastroenterologist
            </p>

          </div>

        </div>

        {/* Bottom Feature Cards */}

        <div className="mt-8 grid grid-cols-3 gap-4">

          <div className="glass rounded-2xl p-4 text-center">

            <Award
              className="mx-auto mb-3 text-[#a78b71]"
              size={28}
            />

            <p className="text-sm font-semibold">
              10+ Years
            </p>

          </div>

          <div className="glass rounded-2xl p-4 text-center">

            <HeartPulse
              className="mx-auto mb-3 text-[#a78b71]"
              size={28}
            />

            <p className="text-sm font-semibold">
              1000+ Patients
            </p>

          </div>

          <div className="glass rounded-2xl p-4 text-center">

            <Stethoscope
              className="mx-auto mb-3 text-[#a78b71]"
              size={28}
            />

            <p className="text-sm font-semibold">
              Endoscopy
            </p>

          </div>

        </div>

        {/* Floating Badge */}

        <div className="absolute -left-6 top-10">

          <div className="glass rounded-full px-5 py-3">

            <span className="text-xs uppercase tracking-[0.3em] text-[#c9b8a0]">
              Google
            </span>

            <p className="mt-1 text-xl font-bold gold-gradient">
              4.9 ★
            </p>

          </div>

        </div>

        <div className="absolute -right-6 bottom-12">

          <div className="glass rounded-full px-5 py-3">

            <span className="text-xs uppercase tracking-[0.3em] text-[#c9b8a0]">
              Reviews
            </span>

            <p className="mt-1 text-xl font-bold gold-gradient">
              120+
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}