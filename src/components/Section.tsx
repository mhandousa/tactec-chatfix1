import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-3xl md:text-4xl mb-2">{title}</h2>}
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
