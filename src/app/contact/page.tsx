"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function ContactUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with EmailJS, Formspree, or API route
    alert(
      "Thank you! Your message has been sent. We will get back to you soon! 🌟",
    );
    setFormData({ name: "", email: "", message: "", concern: "" });
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50"
    >
      {/* Translucent joyful background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_9647.jpg"
          alt="Happy child swinging joyfully in a colorful therapy space"
          fill
          className="object-cover brightness-95 opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-orange-900/30 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-md"
        >
          Get in Touch with Arukah Health 🌈
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          We are here to answer your questions, discuss your childs needs, or
          help you start their joyful movement journey. Reach out today lets
          build strength and independence together!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border-4 border-orange-300/50 hover:border-blue-400/60 transition-all">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">
                Contact Information
              </h3>
              <ul className="space-y-6 text-left text-gray-800">
                <li className="flex items-center gap-4">
                  <span className="text-3xl">📧</span>
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
                <li className="flex items-center gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+254712345678"
                      className="hover:text-orange-600 transition"
                    >
                      +254 712 345 678
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Nairobi, Kenya</p>
                    <p className="text-sm text-gray-600">
                      (Home-based & virtual sessions available)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="text-center"
            >
              <p className="text-lg font-medium text-purple-700">
                We are excited to hear from you! 💙🧡
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-blue-300/50"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">
              Send Us a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>

              <div>
                <label
                  htmlFor="concern"
                  className="block text-gray-700 font-medium mb-2"
                >
                  What is this about? (optional)
                </label>
                <select
                  id="concern"
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition bg-white"
                >
                  <option value="">Select one...</option>
                  <option value="assessment">
                    Initial Assessment / Consultation
                  </option>
                  <option value="enrollment">Enrolling My Child</option>
                  <option value="question">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition duration-300"
              >
                Send Message 🚀
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Floating playful accents */}
      <motion.div
        className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-60 blur-lg"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-50 blur-xl"
        animate={{ y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 9, delay: 2 }}
      />
    </section>
  );
}
