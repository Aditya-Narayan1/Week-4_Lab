export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
