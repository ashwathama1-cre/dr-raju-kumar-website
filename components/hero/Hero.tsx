"use client";

import CTAButtons from "./CTAButtons";
import FloatingCard from "./FloatingCard";
import HeroBackground from "./HeroBackground";
import NeuralLines from "./NeuralLines";
import Float from "@/components/animations/Float";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center bg-[#0a0a0a]">

      {/* Premium Background */}
      <HeroBackground />

      {/* Neural SVG */}
      <NeuralLines />

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <Float>

            <div>

              <span className="inline-flex items-center rounded-full border border-[#a78b71]/40 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.45em] text-[#c9b8a0] backdrop-blur-md">
                Best Gastroenterologist • Lucknow
              </span>

              <h1
                className="
                mt-8
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                italic
                leading-tight
              "
              >
                Advanced{" "}

                <span className="gold-gradient">
                  Digestive Care
                </span>

                <br />

                For A

                <span className="gold-gradient">
                  {" "}Healthier Life
                </span>

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

                Dr. Raju Kumar provides expert diagnosis and
                treatment for digestive disorders, liver diseases,
                GERD, IBS, gastritis, fatty liver, pancreatitis,
                gastrointestinal bleeding and advanced endoscopy.

              </p>

              <CTAButtons />

              <div className="mt-14 flex flex-wrap gap-5">

                <FloatingCard
                  title="Google Rating"
                  value="4.9 ★"
                />

                <FloatingCard
                  title="Patients"
                  value="1000+"
                />

              </div>

            </div>

          </Float>

          {/* ================= RIGHT ================= */}

          <Float delay={0.4}>

            <div className="relative flex justify-center">

              {/* Glow */}

              <div className="absolute h-[520px] w-[520px] rounded-full bg-[#a78b71]/20 blur-[120px]" />

              {/* Doctor Card */}

              <div
                className="
                glass
                relative
                w-full
                max-w-md
                rounded-[40px]
                border
                border-white/10
                p-8
                backdrop-blur-xl
              "
              >

                <div
                  className="
                  aspect-[4/5]
                  rounded-[30px]
                  bg-neutral-900
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                >

                  {/* Placeholder until real image */}

                  <div className="text-center">

                    <div className="text-[120px]">
                      👨‍⚕️
                    </div>

                    <h2 className="mt-6 text-3xl font-bold gold">
                      Dr. Raju Kumar
                    </h2>

                    <p className="mt-3 text-gray-400">
                      Gastroenterologist
                    </p>

                    <p className="text-gray-500 mt-2 text-sm">
                      Liver Specialist • Endoscopy Expert
                    </p>

                  </div>

                </div>

                {/* Floating Rating */}

                <div className="absolute -left-8 top-12">

                  <FloatingCard
                    title="Experience"
                    value="10+ Years"
                  />

                </div>

                {/* Floating Reviews */}

                <div className="absolute -right-8 bottom-12">

                  <FloatingCard
                    title="Reviews"
                    value="120+"
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