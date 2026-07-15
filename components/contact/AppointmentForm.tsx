export default function AppointmentForm() {
  return (
    <div className="glass rounded-[28px] p-8">
      <h3 className="text-3xl font-bold mb-8 gold">
        Book an Appointment
      </h3>

      <form className="space-y-5">
        <input
          className="w-full glass rounded-xl p-4 outline-none"
          placeholder="Full Name"
        />

        <input
          className="w-full glass rounded-xl p-4 outline-none"
          placeholder="Phone Number"
        />

        <input
          className="w-full glass rounded-xl p-4 outline-none"
          placeholder="Email (Optional)"
        />

        <textarea
          rows={5}
          className="w-full glass rounded-xl p-4 outline-none"
          placeholder="Describe your symptoms"
        />

        <button className="btn-primary w-full">
          Request Appointment
        </button>
      </form>
    </div>
  );
}