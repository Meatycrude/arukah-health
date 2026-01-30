// src/components/AboutPageContent.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function AboutPageContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-24">
      {/* Hero / Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-800 mb-8 drop-shadow-lg">
          About Arukah Health
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          A movement of hope, science, and soul—where every childs step is
          sacred, and every story matters.
        </p>

        {/* Floating elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-16 h-16 bg-orange-300 rounded-full opacity-60 blur-lg hidden md:block"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2, duration: 9 }}
          className="absolute bottom-40 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-50 blur-xl hidden md:block"
        />
      </motion.section>

      {/* Our Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-800 space-y-6">
            <p>
              Arukah Health is more than an exercise clinic. We are a movement
              of hope, science, and soul—where every step is sacred, and every
              child’s story matters.
            </p>
            <p>
              We understand that nurturing children with neuro-developmental
              challenges can be a walk through seasons of uncertainty, burnout,
              pain, and quiet resilience. And oftentimes, care can be
              intricate/complex, with no single fix or simple path forward. With
              us, care and support looks different—it is more embodied, more
              inclusive, more human.
            </p>
            <p>
              We create a space where exercise is not just movement, but
              medicine. Where children feel seen, not just defined by their
              challenges. Where parents feel equipped, not overwhelmed. Where
              families can reclaim wellness, strength, mobility, and joy with
              dignity and hope.
            </p>
            <p>
              Arukah Health is built on the belief that movement is medicine.
              For us, movement is more than biomechanics—it’s a language of
              healing, play, and growth. Every stretch, step, and breath is an
              opportunity to restore what challenges may have taken away and to
              open new pathways of strength, confidence, and joy.
            </p>
            <p>
              Our care is rooted in compassion and clinical excellence, honoring
              the full humanity of the children and families we serve. We meet
              each child where they are—physically, emotionally, and
              developmentally—crafting therapeutic exercise experiences that are
              inclusive, intentional, and transformative.
            </p>
            {/* ... continue with the rest of the story paragraphs ... */}
            <p className="font-semibold text-blue-700 italic">
              Movement with us; this is where science meets soul. Thank you for
              being part of this story. Whether you’re here to learn, move,
              teach, or heal, you belong.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-300/50">
            <Image
              src="/images/IMG_2491.jpg"
              alt="Diverse group of children joyfully playing outdoors in inclusive activities"
              width={800}
              height={533}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-300/50">
            <Image
              src="/images/IMG_2492.jpg"
              alt="Therapist supporting a young child on a balance beam in a colorful therapy room"
              width={1500}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border-4 border-blue-300/50"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            To be East Africa’s leading provider of pediatric movement-centered
            care—where exercise therapy shines as a beacon of hope, empowering
            every child with neuro-developmental challenges to grow in strength,
            joy, and lifelong independence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border-4 border-orange-300/50"
        >
          <h2 className="text-4xl font-bold text-orange-600 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed">
            To deliver inclusive, evidence-based pediatric exercise therapy that
            enhances function, builds confidence, and nurtures independence in
            children with neurodevelopmental challenges—blending clinical
            excellence with compassionate care to transform lives through
            personalized movement.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-5xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-md">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Teamwork & Collaborations",
              desc: "We thrive through shared wisdom, open communication, and collective care—building strong partnerships within our team and with the families we serve.",
              image: "/images/IMG_2491.jpg",
            },
            {
              title: "Commitment",
              desc: "Our smiles, words, affirmations, and follow-up throughout each child's movement journey reflects our unwavering dedication to delivering compassionate, consistent care.",
              image: "/images/IMG_2493.jpg",
            },
            {
              title: "Respect & Compassion",
              desc: "We honor each child's journey with empathy, dignity, and personalized care—creating safe spaces for healing through movement and relationship.",
              image: "/images/IMG_2494.jpg",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-300/40 hover:border-blue-400/70 hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
