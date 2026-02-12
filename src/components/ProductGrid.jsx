import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          rating={p.rating}
          thumbnail={p.thumbnail}
        />
      ))}
    </div>
  );
}
