import StatCard from "@/components/shared/StatCard";

export default function Experience() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">

      <StatCard
        value="10+"
        title="Years Experience"
      />

      <StatCard
        value="1000+"
        title="Patients Treated"
      />

      <StatCard
        value="4.9★"
        title="Google Rating"
      />

      <StatCard
        value="120+"
        title="Reviews"
      />

    </div>
  );
}