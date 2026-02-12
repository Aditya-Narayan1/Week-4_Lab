export default function ProductCard({ title, price, rating, thumbnail }) {
  return (
    <div className="rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200 shadow-xl p-4 hover:-translate-y-1 transition">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-44 object-cover rounded-xl mb-3 shadow-md"
      />

      <h2 className="text-base font-extrabold text-slate-900 line-clamp-1">
        {title}
      </h2>

      <p className="text-lg font-black text-sky-700 mt-2">
        ₹ {price}
      </p>

      <p className="text-sm text-slate-600 mt-1 font-semibold">
        ⭐ {rating}
      </p>
    </div>
  );
}
