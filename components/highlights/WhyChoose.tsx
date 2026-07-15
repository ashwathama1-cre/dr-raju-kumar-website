import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🩺",
    title: "Accurate Diagnosis",
    description:
      "Evidence-based diagnosis using modern gastroenterology techniques.",
  },
  {
    icon: "🏥",
    title: "Advanced Endoscopy",
    description:
      "Safe and advanced diagnostic procedures with modern equipment.",
  },
  {
    icon: "❤️",
    title: "Compassionate Care",
    description:
      "Personalized treatment plans with patient-first consultation.",
  },
  {
    icon: "⭐",
    title: "Trusted by Patients",
    description:
      "Highly rated with excellent patient satisfaction and positive reviews.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="WHY CHOOSE US"
          title="Healthcare Built on"
          highlight="Trust & Excellence"
          description="Combining experience, compassion, and modern technology to deliver exceptional digestive and liver care."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}