"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Pillar {
  title: string;
  shortDesc: string;
  bullets: string[];
  fullContent: string;
  imageUrl: string;
  color: string;
}

const pillars: Pillar[] = [
  {
    title: "Evidence-Based, Personalized Care",
    shortDesc:
      "Rooted in science, tailored to your child, guided by real data.",
    bullets: [
      "Scientific and Data-Driven Practice",
      "Custom-Tailored Treatments",
      "Ongoing Progress Monitoring & Evaluation",
    ],
    fullContent: `We blend science with soul—delivering exercise therapy that's grounded in research, tailored to each child, and guided by real-time data. No cookie-cutter plans. Just care that works.

Scientific and Data-Driven Practice
Our care is grounded in evidence-based practice, guided by the latest research and informed by real-time data in exercise physiology, rehabilitation, and wellness science - allowing us to deliver care that's not only compassionate, but consistently results-driven.

Custom-Tailored Treatments
Every exercise plan is uniquely designed to reflect the child's physical needs, emotional & sensory comfort, and personal goals—no one-size-fits-all care here.

Ongoing Progress Monitoring & Evaluation
We track each child's journey with regular assessments and feedback loops—ensuring care remains responsive, measurable, and goal-driven.`,
    imageUrl: "/public/logo.png",
    color: "orange",
  },
  {
    title: "Child-Centered Experience",
    shortDesc: "Fun, supportive, and emotionally safe movement adventures.",
    bullets: [
      "Fun & Interactive Sessions",
      "Friendly and Well-Trained Exercise Specialists",
      "Consistent Guidance and Support",
    ],
    fullContent: `We create spaces where movement feels safe, joyful, and real—offering sessions that are playful yet purposeful, guided by emotionally intelligent specialists, and supported with steady, compassionate care from day one.

Fun & Interactive Sessions
Our sessions are engaging, playful, and emotionally safe—making movement enjoyable while still clinically effective.

Friendly and Well-Trained Exercise Specialists
Our team blends clinical expertise with emotional intelligence—creating a welcoming, informed space where children feel seen and supported.

Consistent Guidance and Support
From onboarding to independence, we walk alongside each child—offering steady encouragement, clear communication, and therapeutic continuity.`,
    imageUrl: "/public/logo.png",
    color: "blue",
  },
  {
    title: "Flexible, Holistic Wellness",
    shortDesc: "Fits your life, cares for the whole child.",
    bullets: ["Flexible Hours", "Multi-disciplinary Wellness Approach"],
    fullContent: `We meet each child where they are—offering adaptable home & school schedules, whole-person care, and a wellness model that honors lifestyle, culture, and community.

Flexible Hours
We offer adaptable scheduling to accommodate diverse lifestyles, school routines, and caregiving responsibilities—because therapy should fit into real life.

Multi-disciplinary Wellness Approach
We work with a multi-disciplinary team of experts—from neurologists and pediatricians to speech therapists, occupational therapists and nutritionists —to deliver personalized care that goes beyond physical therapy. By integrating developmental support, family education and specialists’ consultations, we address the child’s neurological, physical, and emotional needs—treating the whole child, not just the isolated motor or functional challenges.`,
    imageUrl: "/public/logo.png",
    color: "orange",
  },
];

export default function AboutUs() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-6 text-blue-800 drop-shadow-md">
          What You’ll Love About Us
        </h2>
        <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
          At Arukah Health, we combine evidence-based expertise with heartfelt,
          playful care to help every child thrive through joyful movement.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl border-4 border-transparent ${
                pillar.color === "orange"
                  ? "hover:border-orange-400"
                  : "hover:border-blue-400"
              }`}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedPillar(pillar)}
            >
              <div className="relative h-48">
                <Image
                  src={pillar.imageUrl}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`}
                />
              </div>
              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${pillar.color === "orange" ? "text-orange-600" : "text-blue-600"}`}
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-600 mb-6">{pillar.shortDesc}</p>
                <ul className="space-y-3">
                  {pillar.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span
                        className={`mr-3 text-xl ${pillar.color === "orange" ? "text-orange-500" : "text-blue-500"}`}
                      >
                        ✦
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full content */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-bold"
                onClick={() => setSelectedPillar(null)}
              >
                ×
              </button>

              <div className="p-10">
                <h3
                  className={`text-4xl font-bold mb-6 ${selectedPillar.color === "orange" ? "text-orange-600" : "text-blue-600"}`}
                >
                  {selectedPillar.title}
                </h3>
                <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
                  {selectedPillar.fullContent}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
