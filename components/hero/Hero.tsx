"use client";

import HeroBackground from "./HeroBackground";
import NeuralLines from "./NeuralLines";
import CTAButtons from "./CTAButtons";
import FloatingCard from "./FloatingCard";
import LiveBadge from "./LiveBadge";

import Float from "@/components/animations/Float";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] flex items-center">

      {/* Background */}
      <HeroBackground />

      {/* Neural SVG */}
      <NeuralLines />

      {/* Main Glow */}
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78b71]/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-6 py-28">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ========================================================= */}
          {/* LEFT */}
          {/* ========================================================= */}

          <Float>

            <div className="max-w-2xl">

              <LiveBadge />

              <div className="mt-8 inline-flex rounded-full border border-[#a78b71]/40 bg-white/5 px-5 py-2 backdrop-blur-xl">

                <span className="text-[11px] uppercase tracking-[0.45em] text-[#c9b8a0]">
                  Best Gastroenterologist • Lucknow
                </span>

              </div>

              <h1 className="mt-10 text-5xl font-bold italic leading-tight md:text-6xl lg:text-7xl">

                Advanced

                <span className="gold-gradient">
                  {" "}Digestive Care
                </span>

                <br />

                With

                <span className="gold-gradient">
                  {" "}Trusted Expertise
                </span>

              </h1>

              <p className="mt-10 max-w-xl text-lg leading-9 text-gray-400">

                Dr. Raju Kumar provides expert diagnosis and
                treatment for digestive disorders, liver diseases,
                GERD, IBS, fatty liver, gastritis,
                pancreatitis and advanced endoscopy procedures
                using modern medical techniques.

              </p>

              <CTAButtons />

              {/* Stats */}

              <div className="mt-14 grid gap-5 sm:grid-cols-2">

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

              </div>

            </div>

          </Float>

          {/* ========================================================= */}
          {/* RIGHT */}
          {/* ========================================================= */}

          <Float delay={0.3}>

            <div className="relative flex justify-center">

              {/* Glow */}

              <div className="absolute h-[550px] w-[550px] rounded-full bg-[#a78b71]/20 blur-[140px]" />

              {/* Glass Card */}

              <div
                className="
                glass
                relative
                w-full
                max-w-lg
                rounded-[42px]
                border
                border-white/10
                p-8
                shadow-[0_0_120px_rgba(167,139,113,.12)]
                "
              >

                <div
                  className="
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[30px]
                  bg-gradient-to-br
                  from-neutral-900
                  via-neutral-950
                  to-black
                  flex
                  items-center
                  justify-center
                  "
                >

                  {/* Placeholder */}
                  {/* Replace with Next/Image later */}

                  <div className="text-center">

                    <div className="text-[130px]">
                      👨‍⚕️
                    </div>

                    <h2 className="mt-6 text-4xl font-bold gold-gradient">
                      Dr. Raju Kumar
                    </h2>

                    <p className="mt-3 text-lg text-gray-400">
                      Gastroenterologist
                    </p>

                    <p className="mt-2 text-sm tracking-[0.3em] uppercase text-[#c9b8a0]">
                      Liver Specialist
                    </p>

                  </div>

                </div>

                {/* Floating Cards */}

                <div className="absolute -left-10 top-10">

                  <FloatingCard
                    title="Speciality"
                    value="Endoscopy"
                  />

                </div>

                <div className="absolute -right-10 bottom-10">

                  <FloatingCard
                    title="Location"
                    value="Lucknow"
                  />

                </div>

              </div>

            </div>

          </Float>

        </div>

      </div>

    </section>
  );
}