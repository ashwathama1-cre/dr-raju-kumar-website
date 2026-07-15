export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78b71]/20 blur-[180px]" />

      <div className="container relative z-10 mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.5em] text-[#c9b8a0] text-xs mb-5">
              BEST GASTROENTEROLOGIST IN LUCKNOW
            </p>

            <h1 className="text-5xl md:text-7xl font-bold italic leading-tight">

              Expert Care for

              <span className="gold-gradient">
                {" "}Digestive{" "}
              </span>

              &

              <span className="gold-gradient">
                {" "}Liver Health
              </span>

            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

              Dr. Raju Kumar provides compassionate and advanced treatment
              for digestive diseases, liver disorders, endoscopy,
              colonoscopy, fatty liver, IBS, GERD, gastritis and
              gastrointestinal emergencies.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="tel:+917379755375"
                className="btn-primary"
              >
                📞 Call Now
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                Book Appointment
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="glass p-8">

            <div className="rounded-3xl overflow-hidden bg-neutral-900 aspect-[4/5] flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl mb-4">
                  👨‍⚕️
                </div>

                <h2 className="text-3xl font-bold gold">
                  Dr. Raju Kumar
                </h2>

                <p className="mt-2 text-gray-400">
                  Gastroenterologist & Liver Specialist
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="glass p-5 text-center">
                <h3 className="text-3xl gold font-bold">
                  4.9★
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Google Rating
                </p>
              </div>

              <div className="glass p-5 text-center">
                <h3 className="text-3xl gold font-bold">
                  120+
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Reviews
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}