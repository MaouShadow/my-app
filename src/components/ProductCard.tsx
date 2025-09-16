import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string; // used for dynamic product page
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>
      <p className="text-gray-600">{price}</p>
      <Link
        href={`/products/${id}`}
        className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        View Details
      </Link>
    </div>
  );
}
