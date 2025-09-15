import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[url('/banner.jpg')] bg-cover bg-center h-[500px] flex items-center justify-center text-center">
      <div className="bg-black bg-opacity-50 p-6 rounded-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          New Collection 2025
        </h1>
        <p className="text-lg text-gray-200 mt-2">
          Redefining fashion. Redefining you.
        </p>
        <Link
          href="/shop"
          className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
