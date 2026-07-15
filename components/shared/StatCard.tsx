type Props = {
  value: string;
  title: string;
};

export default function StatCard({
  value,
  title,
}: Props) {
  return (
    <div className="glass p-7 rounded-3xl text-center transition hover:-translate-y-1">
      <h3 className="text-4xl font-bold gold">
        {value}
      </h3>

      <p className="text-gray-400 mt-3">
        {title}
      </p>
    </div>
  );
}