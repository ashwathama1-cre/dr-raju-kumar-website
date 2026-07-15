type Props = {
  title: string;
  value: string;
};

export default function FloatingCard({
  title,
  value,
}: Props) {
  return (
    <div className="glass rounded-3xl p-5 backdrop-blur-lg shadow-2xl">

      <p className="text-xs uppercase tracking-[0.3em] text-[#c9b8a0]">
        {title}
      </p>

      <h3 className="text-2xl mt-3 font-bold gold">
        {value}
      </h3>

    </div>
  );
}