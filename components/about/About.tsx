import DoctorProfile from "./DoctorProfile";
import Experience from "./Experience";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <DoctorProfile />

          <div>

            <SectionHeading
              label="ABOUT DOCTOR"
              title="Trusted Care for"
              highlight="Digestive & Liver Health"
              description="Dr. Raju Kumar is a trusted Gastroenterologist in Lucknow providing diagnosis and treatment for digestive disorders, liver diseases, gastrointestinal bleeding, fatty liver, IBS, GERD, gastritis, pancreatitis and advanced endoscopy procedures."
            />

            <Experience />

          </div>

        </div>

      </div>
    </section>
  );
}