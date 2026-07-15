import SectionHeading from "@/components/shared/SectionHeading";
import AppointmentForm from "./AppointmentForm";
import ClinicInfo from "./ClinicInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="container mx-auto px-6">

        <SectionHeading
          label="CONTACT"
          title="Schedule Your"
          highlight="Consultation"
          description="Book an appointment or contact the clinic for expert gastroenterology care."
        />

        <div className="grid lg:grid-cols-2 gap-10">

          <AppointmentForm />

          <ClinicInfo />

        </div>

      </div>
    </section>
  );
}