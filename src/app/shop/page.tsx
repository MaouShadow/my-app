import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: "$49",
    image: "/products/shirt1.jpg",
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: "$89",
    image: "/products/jacket1.jpg",
  },
  {
    id: "3",
    name: "Luxury Handbag",
    price: "$120",
    image: "/products/bag1.jpg",
  },
  { id: "4", name: "Sneakers", price: "$79", image: "/products/shoes1.jpg" },
  {
    id: "5",
    name: "Evening Dress",
    price: "$199",
    image: "/products/dress1.jpg",
  },
];

export default function Shop() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
