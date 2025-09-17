"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

export default function Page() {
  const galleryItems = [
    { src: "1000286390.jpg", label: "Team Training" },
    { src: "1000286392.jpg", label: "Medical Insights" },
    { src: "1000286398.jpg", label: "Match Analysis" },
    { src: "tactec-2nd-lockup.png", label: "TacTec Branding" },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Navbar />

      {/* Hero with animated aurora gradient */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-40"
          animate={{
            background: [
              "linear-gradient(to right, #f43f5e, #8b5cf6, #3b82f6)",
              "linear-gradient(to right, #3b82f6, #10b981, #f59e0b)",
              "linear-gradient(to right, #8b5cf6, #ec4899, #f43f5e)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />

        <div className="max-w-6xl mx-auto py-20 flex flex-col md:flex-row items-center gap-10 relative">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Revolutionising Football Club Management
            </motion.h1>
            <motion.p
              className="text-gray-300 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              One platform for operations, medical, tactics, reporting,
              communication, and more.
            </motion.p>
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a
                href="#start"
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="border border-white/30 px-6 py-3 rounded-xl font-semibold"
              >
                Explore Features
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="/images/surface-pro-8-1-2.png"
              alt="TacTec App"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Other sections (Challenge, Solution, Features, Tech, Start) remain unchanged... */}

      {/* Refined Gallery with Lightbox */}
      <Section title="Gallery">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white/5 cursor-pointer"
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={`/images/${item.src}`}
                alt={item.label}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isOpen && (
          <Lightbox
            mainSrc={`/images/${galleryItems[photoIndex].src}`}
            nextSrc={`/images/${galleryItems[(photoIndex + 1) % galleryItems.length].src}`}
            prevSrc={`/images/${galleryItems[(photoIndex + galleryItems.length - 1) % galleryItems.length].src}`}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + galleryItems.length - 1) % galleryItems.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % galleryItems.length)
            }
            imageTitle={galleryItems[photoIndex].label}
          />
        )}
      </Section>

      <Footer />
    </main>
  );
}
