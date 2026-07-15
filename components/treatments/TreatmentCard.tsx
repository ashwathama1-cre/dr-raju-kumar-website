type Props = {
  title: string;
  description: string;
};

export default function TreatmentCard({
  title,
  description,
}: Props) {
  return (
    <div className="glass rounded-[28px] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#a78b71]">

      <div className="w-14 h-14 rounded-2xl bg-[#a78b71]/10 flex items-center justify-center text-2xl mb-6">
        🩺
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>

    </div>
  );
}