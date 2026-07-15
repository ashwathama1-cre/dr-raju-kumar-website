import SectionHeading from "@/components/shared/SectionHeading";
import TreatmentCard from "./TreatmentCard";
import { treatments } from "./data";

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="py-32"
    >
      <div className="container mx-auto px-6">

        <SectionHeading
          label="SPECIALIZED TREATMENTS"
          title="Comprehensive Gastro"
          highlight="Care & Procedures"
          description="Advanced diagnosis and treatment for digestive, liver and pancreatic diseases using modern medical techniques."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {treatments.map((item) => (
            <TreatmentCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}