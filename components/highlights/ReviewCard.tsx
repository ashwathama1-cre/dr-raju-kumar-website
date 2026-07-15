type Props = {
  name: string;
  review: string;
};

export default function ReviewCard({
  name,
  review,
}: Props) {
  return (
    <div className="glass rounded-[28px] p-8">
      <div className="text-yellow-400 text-xl mb-4">
        ★★★★★
      </div>

      <p className="text-gray-300 leading-8">
        "{review}"
      </p>

      <h4 className="mt-8 font-semibold gold">
        {name}
      </h4>
    </div>
  );
}