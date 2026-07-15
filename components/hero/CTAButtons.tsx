import { Calendar, Phone } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">

      <a
        href="#contact"
        className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
      >
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          Book Appointment
        </div>
      </a>

      <a
        href="tel:+917379755375"
        className="px-8 py-4 rounded-full border border-[#a78b71] hover:bg-[#a78b71]/10 transition"
      >
        <div className="flex items-center gap-2">
          <Phone size={18} />
          Call Now
        </div>
      </a>

    </div>
  );
}