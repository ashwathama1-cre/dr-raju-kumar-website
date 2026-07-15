type Props = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: Props) {
  return (
    <div className="glass rounded-[28px] p-8 transition duration-300 hover:-translate-y-2">
      <div className="text-4xl mb-6">{icon}</div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </div>
  );
}