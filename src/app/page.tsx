// import Image from "next/image";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section>
          <Hero />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <ProductCard
              id="1"
              name="Classic White Shirt"
              price="$49"
              image="/products/shirt1.jpg"
            />
            <ProductCard
              id="2"
              name="Denim Jacket"
              price="$89"
              image="/products/jacket1.jpg"
            />
            <ProductCard
              id="3"
              name="Luxury Handbag"
              price="$120"
              image="/products/bag1.jpg"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
