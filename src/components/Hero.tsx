// src/components/Hero.tsx
"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const imageVariants = {
  hover: { scale: 1.08, rotate: 2 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 md:pt-32 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Floating child-like animations (bubbles, stars) */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-60 blur-md"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 right-20 w-20 h-20 bg-pink-300 rounded-full opacity-50 blur-lg"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1, duration: 8 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-70"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2, duration: 7 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-10 h-10 bg-green-300 rounded-full opacity-60"
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
          <h1 className="text-5xl md:text-7xl font-extrabold text-purple-800 mb-6 leading-tight">
            Joyful Movement,
            <br />
            Endless Possibilities
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-xl">
            Fun, guided exercise sessions designed for children with
            neurodevelopmental challenges — helping build strength, improve
            mobility, stabilize posture, rebuild capacity, restore function, and
            grow independence.
          </p>
          <Link
            href="/exercises"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-5 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300"
          >
            Start Your Child Adventure
          </Link>
        </motion.div>

        {/* Right: Image Grid with animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="grid grid-cols-2 gap-6"
        >
          <motion.img
            src="https://www.skillpointtherapy.com/wp-content/uploads/2024/11/gross_motor_skills_improvement.jpg"
            alt="Kids building gross motor skills through fun play"
            className="rounded-2xl shadow-2xl object-cover h-64 w-full"
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.img
            src="https://www.skillpointtherapy.com/wp-content/uploads/2024/11/enhancing_balance_through_activities.jpg"
            alt="Child enhancing balance in playful therapy"
            className="rounded-2xl shadow-2xl object-cover h-64 w-full"
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.img
            src="https://www.skillpointtherapy.com/wp-content/uploads/2024/11/navigating_obstacle_courses_efficiently.jpg"
            alt="Kids navigating obstacle courses for mobility"
            className="rounded-2xl shadow-2xl object-cover h-64 w-full"
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            src="https://www.skillpointtherapy.com/wp-content/uploads/2024/11/building_muscle_through_exercise.jpg"
            alt="Children building muscle strength in exercises"
            className="rounded-2xl shadow-2xl object-cover h-64 w-full"
            variants={imageVariants}
            whileHover="hover"
            animate={{ y: [0, -9, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
