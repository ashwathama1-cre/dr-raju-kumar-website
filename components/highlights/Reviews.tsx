import SectionHeading from "@/components/shared/SectionHeading";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    name: "Gyanendra Kumar Mishraa",
    review:
      "Dr. Raju Kumar is an excellent gastroenterologist. He is humble, knowledgeable and provides the right advice.",
  },
  {
    name: "Kumar Rohit",
    review:
      "The consultation was detailed and reassuring. The clinic was clean and the treatment plan was explained clearly.",
  },
  {
    name: "Poonam Pal",
    review:
      "Very polite doctor. I experienced significant relief and felt treated like family.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="PATIENT REVIEWS"
          title="Trusted by"
          highlight="Hundreds of Patients"
          description="Real experiences shared by patients who received treatment and care."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}