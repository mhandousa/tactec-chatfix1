import { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string; // allow extra classes like scroll-mt-24
};

export default function Section({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 py-14 ${className ?? ""}`}>
      <header className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
