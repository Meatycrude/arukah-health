// src/components/ContactPageContent.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const floatingVariants = {
  animate: {
    y: [0, -25, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function ContactPageContent() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Replace with real submission (EmailJS, API route, etc.)
    alert(
      "Thank you! We'll get back to you soon to support your child's journey. 🌟",
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero Intro */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-20 relative"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
          Let's Connect
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We're here to listen, answer questions, and help your child start
          their joyful movement adventure with Arukah Health. Reach out — every
          conversation is a step toward hope and strength.
        </p>

        {/* Floating playful orbs */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full opacity-60 blur-xl hidden md:block"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5, duration: 10 }}
          className="absolute bottom-20 right-16 w-24 h-24 bg-blue-300 rounded-full opacity-50 blur-2xl hidden md:block"
        />
      </motion.section>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-4 border-orange-300/50">
            <h2 className="text-3xl font-bold text-orange-600 mb-8">
              Get in Touch
            </h2>
            <ul className="space-y-8 text-gray-800 text-lg">
              <li className="flex items-center gap-5">
                <span className="text-4xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:info@arukahhealth.com"
                    className="hover:text-orange-600 transition"
                  >
                    info@arukahhealth.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <span className="text-4xl">📞</span>
                <div>
                  <p className="font-semibold">Phone / WhatsApp</p>
                  <a
                    href="tel:+254712345678"
                    className="hover:text-orange-600 transition"
                  >
                    +254 712 345 678
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <span className="text-4xl">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Nairobi, Kenya</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Home-based sessions, school visits & virtual options
                    available across Nairobi and beyond.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="text-center text-xl font-medium text-purple-700"
          >
            We're excited to hear your story and support your family! 💙🧡
          </motion.div>
        </motion.div>

        {/* Form - Select removed */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-4 border-blue-300/50"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Send Us a Message
          </h2>

          <div className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2 text-lg"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 text-lg"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2 text-lg"
              >
                Phone Number (WhatsApp preferred)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition text-lg"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2 text-lg"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-5 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition duration-300 mt-4"
            >
              Send Message 🌟
            </button>
          </div>
        </motion.form>
      </div>

      {/* Visual reassurance */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Every message matters to us. We usually respond within 24–48 hours
          (often faster via WhatsApp). Looking forward to partnering with you on
          your child's path to greater independence and joy!
        </p>
      </motion.section>
    </div>
  );
}
