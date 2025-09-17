"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  img: string;
  index?: number; // position in the grid
}

export default function FeatureCard({ title, img, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }} // stagger delay
      viewport={{ once: true }}
    >
      <img src={img} alt={title} className="rounded mb-3" />
      <h3 className="text-xl">{title}</h3>
    </motion.div>
  );
}
