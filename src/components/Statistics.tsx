// src/components/Statistics.tsx
"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    end: 100,
    label: "Personalized Care",
    suffix: "%",
    description: "Every plan uniquely designed for each child's needs",
    icon: "✨",
  },
  {
    end: 4,
    label: "Core Exercise Pathways",
    description: "Focused paths for strength, mobility, posture & more",
    icon: "🛤️",
  },
  {
    end: 5,
    label: "Years of Experience",
    suffix: "+",
    description: "Expertise in neurodevelopmental exercise therapy",
    icon: "🧠",
  },
  {
    end: 98,
    label: "Parent Satisfaction",
    suffix: "%",
    description: "Families love the joyful, effective results",
    icon: "❤️",
  },
  {
    end: 100,
    label: "Children Supported",
    suffix: "+",
    description: "Kids building independence through fun movement",
    icon: "👧👦",
  },
  {
    end: 93,
    label: "Achieved Independence",
    suffix: "%",
    description: "Children gaining confidence and self-reliance",
    icon: "🌟",
  },
];

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Translucent joyful background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg2.jpg"
          alt="Happy children engaged in playful coordination and balance exercises"
          fill
          className="object-cover brightness-90 contrast-110"
          priority
        />
        {/* Overlay for readability + childish vibe */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/35 via-purple-800/25 to-orange-800/30 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-8"
        >
          Real Impact, Real Joy ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-orange-100 mb-16 max-w-4xl mx-auto drop-shadow-lg"
        >
          See how Arukah Health is transforming lives through personalized,
          evidence-based movement for children with neurodevelopmental
          challenges.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-orange-300/40 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <div className="text-6xl md:text-7xl mb-4 drop-shadow-md">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-black text-blue-700 mb-3">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.8}
                    separator=","
                    suffix={stat.suffix || ""}
                    enableScrollSpy
                  />
                ) : (
                  "0"
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                {stat.label}
              </h3>
              <p className="text-gray-700 text-lg md:text-xl">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating playful elements */}
      <motion.div
        className="absolute top-16 left-8 w-20 h-20 bg-yellow-300 rounded-full opacity-70 blur-xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-12 w-24 h-24 bg-orange-400 rounded-full opacity-60 blur-2xl"
        animate={{ y: [0, 35, 0], scale: [1, 1.2, 1] }}
        transition={{
          repeat: Infinity,
          duration: 11,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
