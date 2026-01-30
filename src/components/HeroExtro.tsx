import Link from "next/link";
import React from "react";

const HeroExtro = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden rounded-2xl mx-4 md:mx-8 my-12 md:my-20 shadow-2xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/1200x/a9/d8/20/a9d8209ebf3d4e8eb0bd787d9fe76dc5.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl px-6 py-12 md:px-12 md:py-20">
        {/* Playful Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Let’s Create{" "}
          <span className="text-yellow-300 animate-pulse inline-block">
            Magical
          </span>{" "}
          Moments
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Join us in redefining what’s possible. Start your child’s personalized
          exercise therapy today Move towards mobility, confidence, independence
          and joy.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-xl md:text-2xl py-4 px-10 rounded-full shadow-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-300/50 border-4 border-white/30"
        >
          <span>Start the Adventure!</span>
          <span className="text-2xl animate-bounce ">🚀</span>
        </Link>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-16 h-16 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="w-20 h-20 bg-pink-400/30 rounded-full blur-sm animate-pulse delay-300"></div>
          <div className="w-16 h-16 bg-green-400/30 rounded-full blur-sm animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Floating Shapes for Childlike Vibe */}
      <div className="absolute top-10 left-5 w-10 h-10 bg-yellow-300/40 rounded-full animate-bounce hidden md:block"></div>
      <div className="absolute bottom-16 right-10 w-16 h-16 bg-pink-400/30 rounded-full animate-bounce delay-500 hidden md:block"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/40 rounded-full animate-spin slow hidden md:block"></div>
    </section>
  );
};

export default HeroExtro;
