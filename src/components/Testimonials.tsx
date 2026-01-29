"use client";

import React from "react";
import {
  FaStar,
  FaUserMd,
  FaHeartbeat,
  FaRunning,
  FaHandsHelping,
  FaQuoteLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";

const InfiniteTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Mwangi",
      role: "Back Pain Recovery",
      content:
        "After 6 months of chronic back pain, the team at Arukah restored my mobility. I can now play with my kids pain-free!",
      rating: 5,
      icon: FaRunning,
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: 2,
      name: "Sarah Kamau",
      role: "Post-Stroke Therapy",
      content:
        "The compassionate care and expert therapy helped me regain strength and confidence. My quality of life has improved dramatically.",
      rating: 5,
      icon: FaHeartbeat,
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 3,
      name: "Dr. Michael Otieno",
      role: "Orthopedic Surgeon",
      content:
        "I regularly refer my post-op patients to Arukah. Their evidence-based approach ensures optimal recovery outcomes.",
      rating: 5,
      icon: FaUserMd,
      color: "from-green-500 to-emerald-400",
    },
    {
      id: 4,
      name: "Grace Wanjiku",
      role: "Arthritis Management",
      content:
        "Living with arthritis was challenging until I found Arukah. Their tailored exercises reduced my pain by 80%.",
      rating: 5,
      icon: FaHandsHelping,
      color: "from-orange-500 to-yellow-400",
    },
    {
      id: 5,
      name: "Robert Kiprop",
      role: "Sports Injury",
      content:
        "As a marathon runner, my knee injury threatened my career. Arukah got me back to running in 3 months!",
      rating: 5,
      icon: FaRunning,
      color: "from-red-500 to-orange-400",
    },
    {
      id: 6,
      name: "Maryanne Akoth",
      role: "Elderly Care",
      content:
        "My mother's balance and strength improved significantly. The home exercise program was easy to follow.",
      rating: 5,
      icon: FaHeartbeat,
      color: "from-indigo-500 to-blue-400",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Patient{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who have transformed their health with our
            personalized exercise therapy
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Scroll Wrapper */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              animate={{
                x: [0, -2000], // Adjust based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => {
                const Icon = testimonial.icon;
                return (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[350px] md:w-[400px]"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${testimonial.color} bg-opacity-10`}
                        >
                          <FaQuoteLeft className="text-2xl text-gray-600" />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                        {testimonial.content}
                      </p>

                      {/* Rating */}
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-xl" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${testimonial.color}`}
                        >
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full opacity-10`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats Section Below */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            {
              value: "98%",
              label: "Patient Satisfaction",
              color: "text-blue-600",
            },
            {
              value: "5,000+",
              label: "Lives Transformed",
              color: "text-purple-600",
            },
            {
              value: "15+",
              label: "Years Experience",
              color: "text-green-600",
            },
            {
              value: "24/7",
              label: "Support Available",
              color: "text-cyan-600",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Share Your Success Story
          </button>
          <p className="text-gray-500 mt-4">
            Join our community of transformed lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;
