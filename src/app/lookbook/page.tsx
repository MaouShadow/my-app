import Image from "next/image";

const lookbookItems = [
  { id: "1", title: "Streetwear Vibes", image: "/products/look1.jpg" },
  { id: "2", title: "Luxury Classics", image: "/products/look2.jpg" },
  { id: "3", title: "Evening Elegance", image: "/products/look3.jpg" },
  { id: "4", title: "Casual Comfort", image: "/products/look4.jpg" },
  { id: "5", title: "Winter Warmth", image: "/products/look5.jpg" },
  { id: "6", title: "Summer Fresh", image: "/products/look6.jpg" },
  { id: "7", title: "Kids & Babies", image: "/products/look7.jpg" },
  {
    id: "8",
    title: "Wedding & Bridal collections",
    image: "/products/look8.jpg",
  },
  { id: "9", title: "swimsuits & beachwear", image: "/products/look9.jpg" },
];

export default function Lookbook() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lookbook</h1>
      <p className="text-gray-600 mb-6">
        Explore our curated fashion inspirations and styling guides.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lookbookItems.map((item) => (
          <div key={item.id} className="relative">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="w-full h-80 object-cover rounded"
            />
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
