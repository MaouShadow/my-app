"use client";
import Image from "next/image";
import { use } from "react";
import { useCart } from "../../../context/CartContext";
import { toast } from "react-toastify";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

const products = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: 49,
    description: "A timeless cotton shirt.",
    image: "/products/shirt1.jpg",
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89,
    description: "Stylish and rugged denim jacket.",
    image: "/products/jacket1.jpg",
  },
  {
    id: "3",
    name: "Luxury Handbag",
    price: 120,
    description: "Elegant handbag with premium leather.",
    image: "/products/bag1.jpg",
  },
  {
    id: "4",
    name: "Sneakers",
    price: 79,
    description: "Comfortable sneakers for everyday wear.",
    image: "/products/shoes1.jpg",
  },
  {
    id: "5",
    name: "Evening Dress",
    price: 199,
    description: "Beautiful evening dress for special occasions.",
    image: "/products/dress1.jpg",
  },
];

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const { id } = use(params);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1 className="p-6 text-red-500">Product not found</h1>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    toast.success(`${product.name} added to cart! ✅`);
  };

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={600}
        className="w-full h-[400px] object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl text-gray-700 mt-2">${product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>

      <button
        onClick={handleAddToCart}
        className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </section>
  );
}
