"use client";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* Hero with animated aurora gradient */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 -z-10 blur-3xl opacity-40"
          animate={{
            background: [
              "linear-gradient(to right, #f43f5e, #8b5cf6, #3b82f6)",
              "linear-gradient(to right, #3b82f6, #10b981, #f59e0b)",
              "linear-gradient(to right, #8b5cf6, #ec4899, #f43f5e)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
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

      <Section
        id="challenge"
        title="The Challenge"
        subtitle="Fragmented football operations slow teams down."
      >
        <img
          src="/images/2-the-challenge-fragmented-football-operations.png"
          alt="Challenge"
          className="rounded-xl"
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
          className="rounded-xl"
        />
      </Section>

      <Section
        id="features"
        title="Features"
        subtitle="Cross-platform excellence, integrated care, advanced reporting, and more."
      >
        <div className="grid md:grid-cols-2 gap-6">
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
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard index={0} title="Universal Clean Architecture" img="/images/13-technical-excellence-universal-clean-architecture.png" />
          <FeatureCard index={1} title="Revolutionary Graphics Engine" img="/images/14-revolutionary-graphics-engine.png" />
        </div>
      </Section>

      <Section
        id="start"
        title="Getting Started"
        subtitle="Onboarding is simple and guided."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard index={0} title="Getting Started" img="/images/18-getting-started.png" />
          <FeatureCard index={1} title="Your Club in Your Hand" img="/images/19-your-club-in-your-hand.png" />
        </div>
      </Section>

      {/* Refined Gallery */}
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
          {[
            { src: "1000286390.jpg", label: "Team Training" },
            { src: "1000286392.jpg", label: "Medical Insights" },
            { src: "1000286398.jpg", label: "Match Analysis" },
            { src: "tactec-2nd-lockup.png", label: "TacTec Branding" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white/5"
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
              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
