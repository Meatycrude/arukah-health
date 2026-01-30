"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const imageVariants = {
  hover: { scale: 1.08, rotate: 2 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 md:pt-32 overflow-hidden bg-gradient-to-br from-[#4793FF]/10 via-purple-50 to-[#FFB347]/10">
      {/* Floating playful elements (gold accents) */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-[#EAB308] rounded-full opacity-60 blur-md"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 right-20 w-20 h-20 bg-[#FFB347]/40 rounded-full opacity-50 blur-lg"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1, duration: 8 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#4793FF]/30 rounded-full opacity-70"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2, duration: 7 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-10 h-10 bg-[#EAB308]/50 rounded-full opacity-60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-blue-700 mb-6 leading-tight">
            Exercise Is Love
          </h1>

          <p className="text-xl md:text-3xl font-serif text-gray-800 mb-8 max-w-xl">
            Redefining recovery, reclaiming milestones, reshaping beliefs, and
            transforming lives through the power of movement.
          </p>

          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FFB347] mb-4">
              THERAPY THROUGH MOTION
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We offer exercise sessions to children with neuro-developmental
              challenges, helping them build strength, improve mobility,
              stabilize posture, rebuild physical capacity, reestablish physical
              function and enhance their independence.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-block bg-[#FFB347] hover:bg-orange-400 text-white font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
          >
            KNOW MORE →
          </Link>
        </motion.div>

        {/* Right: Image Grid (kept the same structure + animations) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid grid-cols-2 gap-6"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative rounded-2xl shadow-2xl overflow-hidden h-64"
          >
            <Image
              src="/images/IMG_2182.jpg"
              alt="Children engaged in fun therapy activities with specialist"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 1,
            }}
            className="relative rounded-2xl shadow-2xl overflow-hidden h-64"
          >
            <Image
              src="/images/IMG_9647.jpg"
              alt="Kids participating in dynamic movement exercises with guide"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="relative rounded-2xl shadow-2xl overflow-hidden h-64"
          >
            <Image
              src="/images/IMG_9647.jpg"
              alt="Child supported in playful physical therapy session"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -9, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="relative rounded-2xl shadow-2xl overflow-hidden h-64"
          >
            <Image
              src="/images/IMG_2182.jpg"
              alt="Group of children in joyful movement and play therapy"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
