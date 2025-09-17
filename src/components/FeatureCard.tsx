export default function FeatureCard({ title, img }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition">
      <img src={img} alt={title} className="rounded mb-3" />
      <h3 className="text-xl">{title}</h3>
    </div>
  );
}
