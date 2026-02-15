import { useEffect, useRef, useState } from "react";
import Layout from "./components/Layout";
import ProductGrid from "./components/ProductGrid";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // Controlled input
  const [loading, setLoading] = useState(true);

  const limitRef = useRef(); // Uncontrolled input

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  // Controlled filtering
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  // Uncontrolled limit apply
  function applyLimit() {
    const limitValue = Number(limitRef.current.value);

    if (!limitValue || limitValue <= 0) return;

    setProducts((prev) => prev.slice(0, limitValue));
  }

  return (
    <Layout>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          🛒 Product Listing
        </h1>

        <p className="mt-3 text-slate-600 font-medium">
          Tailwind + Controlled vs Uncontrolled Inputs
        </p>
      </div>

      {/* Inputs Section */}
      <div className="bg-white/70 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-5 mb-10">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Controlled */}
          <div>
            <p className="font-bold text-slate-900 mb-2">
              Controlled Input (useState)
            </p>

            <input
              type="text"
              placeholder="Search product by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none bg-white/80 focus:ring-2 focus:ring-sky-300"
            />
          </div>

          {/* Uncontrolled */}
          <div>
            <p className="font-bold text-slate-900 mb-2">
              Uncontrolled Input (useRef)
            </p>

            <div className="flex gap-3">
              <input
                type="number"
                placeholder="Limit products (ex: 8)"
                ref={limitRef}
                className="w-full rounded-xl border border-slate-200 px-4 py-2 outline-none bg-white/80 focus:ring-2 focus:ring-sky-300"
              />

              <button
                onClick={applyLimit}
                className="rounded-xl px-4 py-2 font-bold bg-slate-900 text-white hover:bg-slate-800 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <p className="text-center text-slate-600 font-semibold">
          Loading products...
        </p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </Layout>
  );
}
