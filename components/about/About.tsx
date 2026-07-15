export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-transparent"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div className="glass p-8">

            <div className="aspect-[4/5] rounded-3xl bg-neutral-900 flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl mb-6">
                  👨‍⚕️
                </div>

                <h2 className="text-3xl font-bold gold">
                  Dr. Raju Kumar
                </h2>

                <p className="text-gray-400 mt-3">
                  Gastroenterologist & Liver Specialist
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[0.45em] text-[#c9b8a0] text-xs">
              ABOUT THE DOCTOR
            </p>

            <h2 className="text-5xl italic mt-5">
              Compassionate Care with
              <span className="gold-gradient"> Modern Gastroenterology</span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              Dr. Raju Kumar is a trusted Gastroenterologist in Lucknow,
              providing diagnosis and treatment for digestive disorders,
              liver diseases, pancreatic conditions and gastrointestinal
              emergencies. His patient-focused approach emphasizes clear
              communication, evidence-based treatment and long-term care.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="glass p-6">
                <h3 className="text-3xl gold font-bold">
                  10+
                </h3>

                <p className="text-gray-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="text-3xl gold font-bold">
                  1000+
                </h3>

                <p className="text-gray-400 mt-2">
                  Happy Patients
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}