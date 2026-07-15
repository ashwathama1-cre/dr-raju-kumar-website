type Props = {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="uppercase tracking-[0.45em] text-xs text-[#c9b8a0] mb-4">
        {label}
      </p>

      <h2 className="text-4xl md:text-5xl italic font-bold leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gold-gradient">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-gray-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}