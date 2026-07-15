export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto text-center max-w-5xl">

        <p className="uppercase tracking-[0.5em] text-[#a78b71] text-sm mb-6">
          Trusted Gastroenterologist in Lucknow
        </p>

        <h1 className="text-5xl md:text-7xl font-bold italic leading-tight">
          Expert Care for
          <span className="gold-gradient"> Digestive </span>
          &
          <span className="gold-gradient"> Liver Health</span>
        </h1>

        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
          Dr. Raju Kumar provides advanced treatment for digestive diseases,
          liver disorders, endoscopy, colonoscopy, gastritis, fatty liver,
          IBS, GERD and many other gastrointestinal conditions with
          compassionate and evidence-based care.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

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

        <div className="mt-14 glass p-8 max-w-3xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h2 className="text-4xl gold font-bold">4.9★</h2>
              <p>Google Rating</p>
            </div>

            <div>
              <h2 className="text-4xl gold font-bold">120+</h2>
              <p>Reviews</p>
            </div>

            <div>
              <h2 className="text-4xl gold font-bold">10+</h2>
              <p>Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl gold font-bold">1000+</h2>
              <p>Patients Treated</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}