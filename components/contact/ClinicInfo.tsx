export default function ClinicInfo() {
  return (
    <div className="glass rounded-[28px] p-8">

      <h3 className="text-3xl font-bold gold mb-8">
        Clinic Information
      </h3>

      <div className="space-y-6">

        <div>
          <h4 className="gold font-semibold">
            Address
          </h4>

          <p className="text-gray-400">
            C-1015, Church Road,
            Near Shekhar Hospital,
            Indira Nagar,
            Lucknow - 226016
          </p>
        </div>

        <div>
          <h4 className="gold font-semibold">
            Phone
          </h4>

          <a
            href="tel:+917379755375"
            className="text-gray-300"
          >
            +91 73797 55375
          </a>
        </div>

        <div>
          <h4 className="gold font-semibold">
            Timings
          </h4>

          <p className="text-gray-400">
            Monday - Saturday
            <br />
            10:00 AM – 7:00 PM
          </p>
        </div>

      </div>

    </div>
  );
}