export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id}>
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl md:text-4xl mb-2">{title}</h2>}
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
