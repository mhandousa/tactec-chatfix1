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
    { src: "1000286398.jpg", label: "Personalised Scheduling" },
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

        <div className="max-w-6xl mx-auto py-16 sm:py-20 flex flex-col md:flex-row items-center gap-10 relative px-4">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Revolutionising Football Club Management
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-300 mt-3 sm:mt-4 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              One platform for operations, medical, tactics, reporting,
              communication, and more.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a
                href="#start"
                className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="border border-white/30 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
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
              className="rounded-xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      <Section
        id="challenge"
        title="The Challenge"
        subtitle="Fragmented football operations slow teams down."
      >
        <img
          src="/images/2-the-challenge-fragmented-football-operations.png"
          alt="Challenge"
          className="rounded-xl w-full h-auto"
        />
      </Section>

      <Section
        id="solution"
        title="The Solution"
        subtitle="A unified platform that consolidates everything clubs need."
      >
        <img
          src="/images/3-the-solution.png"
          alt="Solution"
          className="rounded-xl w-full h-auto"
        />
      </Section>

      <Section
        id="features"
        title="Features"
        subtitle="Cross-platform excellence, integrated care, advanced reporting, and more."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard index={0} title="Cross-Platform Excellence" img="/images/5-cross-platform-excellence.png" />
          <FeatureCard index={1} title="Why Choose TacTec" img="/images/6-why-choose-tactec.png" />
          <FeatureCard index={2} title="Tactical Board & Formation Maker" img="/images/7-tactical-board-and-formation-maker.png" />
          <FeatureCard index={3} title="Comprehensive Team Management" img="/images/8-comprehensive-team-management.png" />
          <FeatureCard index={4} title="Medical Module & Wellness Monitoring" img="/images/9-medical-module-and-wellness-monitoring.png" />
          <FeatureCard index={5} title="Proactive Health Management" img="/images/10-proactive-health-management.png" />
          <FeatureCard index={6} title="Advanced Reporting Systems" img="/images/11-advanced-reporting-systems.png" />
          <FeatureCard index={7} title="Integrated Communication System" img="/images/12-integrated-communication-system.png" />
        </div>
      </Section>

      <Section
        id="tech"
        title="Technical Excellence"
        subtitle="Universal Clean Architecture & Revolutionary Graphics Engine."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard index={0} title="Universal Clean Architecture" img="/images/13-technical-excellence-universal-clean-architecture.png" />
          <FeatureCard index={1} title="Revolutionary Graphics Engine" img="/images/14-revolutionary-graphics-engine.png" />
        </div>
      </Section>

      <Section
        id="start"
        title="Getting Started"
        subtitle="Onboarding is simple and guided."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard index={0} title="Getting Started" img="/images/18-getting-started.png" />
          <FeatureCard index={1} title="Your Club in Your Hand" img="/images/19-your-club-in-your-hand.png" />
        </div>
      </Section>

      {/* Refined Responsive Gallery with Lightbox */}
      <Section title="Gallery">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-base sm:text-lg">
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
