"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutUsPage() {
  return (
    <div className="pt-20 pb-24 mt-40">
      {/* SECTION 1: HERO / Our Story */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-8">
              Our Story
            </h1>
            <div className="prose prose-lg text-gray-700 text-2xl leading-relaxed space-y-6">
              <p>
                Arukah Health is more than an exercise clinic. We are a movement
                of hope, science, and soul where every step is sacred, and every
                child’s story matters.
              </p>
              <p>
                We understand that nurturing children with neuro-developmental
                challenges can be a walk through seasons of uncertainty,
                burnout, pain, and quiet resilience. And oftentimes, care can be
                intricate and complex, with no single fix or simple path
                forward.
              </p>
              <p>
                With us, care and support looks different it is more embodied,
                more inclusive, more human. We create a space where exercise is
                not just movement, but medicine. Where children feel seen, not
                just defined by their challenges. Where parents feel equipped,
                not overwhelmed. Where families can reclaim wellness, strength,
                mobility, and joy with dignity and hope.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/IMG_2491.jpg"
              alt="Therapist and child sharing a joyful high-five moment in therapy"
              width={2160}
              height={1216}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PHILOSOPHY – Movement Is Medicine */}
      <section className="mt-24 bg-blue-50/40 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-8">
                Movement Is Medicine
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Arukah Health is built on the belief that movement is
                  medicine. For us, movement is more than biomechanics—it’s a
                  language of healing, play, and growth.
                </p>
                <p>
                  Every stretch, step, and breath is an opportunity to restore
                  what challenges may have taken away and to open new pathways
                  of strength, confidence, and joy.
                </p>
                <p>
                  Our care is rooted in compassion and clinical excellence,
                  honoring the full humanity of the children and families we
                  serve. We meet each child where they are—physically,
                  emotionally, and developmentally—crafting therapeutic exercise
                  experiences that are inclusive, intentional, and
                  transformative.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/IMG-20250822-WA0000.jpg"
                alt="Therapist gently guiding a smiling child in supportive movement exercise"
                width={1920}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAM APPROACH – Three Image Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-blue-700 mb-12">
          Our Program Approach
        </h2>

        <div className="prose prose-lg text-1.5 text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
          <p>
            Our programs blend clinical rigor with cultural sensitivity,
            emotional warmth, and playful joy.
          </p>
          <p>
            We partner with families to co-create care plans that reflect each
            child’s unique needs and aspirations. We train caregivers, empower
            communities, and walk alongside families through challenges and
            milestones—ensuring that every step forward is safe, supported, and
            deeply attuned to the journey toward wellness.
          </p>
          <p>
            Through years of clinical experience and continuous learning, we’ve
            developed an approach that combines the latest research in pediatric
            exercise physiology with time-tested therapeutic practices. This is
            more than therapy—it’s a reclamation, a celebration, and a return to
            embodied hope for every child and family we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              src: "/images/IMG_2182.jpg",
              alt: "Therapist guiding child in gentle interactive play therapy",
            },
            {
              src: "/images/IMG_2325.jpg",
              alt: "Caregiver actively participating in child's therapy session",
            },
            {
              src: "/images/IMG_9508.jpg",
              alt: "Joyful child making heart shape during playful movement activity",
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURE – Childlike Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/bg1.jpg"
            alt="Soft pastel dreamy clouds background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-gray-100"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-10">
              Movement with us
            </h2>
            <div className="prose prose-xl text-gray-800 leading-relaxed space-y-6 max-w-4xl mx-auto">
              <p className="italic font-medium">
                this is where science meets soul.
              </p>
              <p>
                Where evidence-based exercise therapy is delivered with
                tenderness.
              </p>
              <p>
                Where every child is seen, every parent supported, and every
                family empowered to move—not just physically, but towards
                wholeness.
              </p>
              <p>
                Arukah Health is more than a brand—it’s a living, breathing
                reflection of everything we believe in: clinical excellence,
                emotional safety, cultural sensitivity, and the power of
                movement to transform lives.
              </p>
              <p className="font-semibold">
                Every session, every program, every playful activity is crafted
                with intention—because wholeness deserves that kind of care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
          >
            <h3 className="text-3xl font-serif font-bold text-blue-700 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be East Africa’s leading provider of pediatric
              movement-centered care—where exercise therapy shines as a beacon
              of hope, empowering every child with neuro-developmental
              challenges to grow in strength, joy, and lifelong independence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl p-10 shadow-lg border border-blue-100"
          >
            <h3 className="text-3xl font-serif font-bold text-blue-700 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To deliver inclusive, evidence-based pediatric exercise therapy
              that enhances function, builds confidence, and nurtures
              independence in children with neurodevelopmental
              challenges—blending clinical excellence with compassionate care to
              transform lives through personalized movement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CORE VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-blue-700 mb-16">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Teamwork & Collaboration",
                desc: "We thrive through shared wisdom, open communication, and collective care—building strong partnerships within our team and with the families we serve.",
              },
              {
                title: "Commitment",
                desc: "Our smiles, words, affirmations, and follow-up throughout each child's movement journey reflect our unwavering dedication to delivering compassionate, consistent care.",
              },
              {
                title: "Respect & Compassion",
                desc: "We honor each child's journey with empathy, dignity, and personalized care—creating safe spaces for healing through movement and relationship.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
              >
                <h3 className="text-2xl font-serif font-bold text-blue-600 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FOUNDER SECTION (Placeholder) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
          >
            <Image
              src="/images/IMG-20250822-WA0000.jpg"
              alt="Founder portrait – warm, approachable professional in natural setting"
              width={2560}
              height={1707}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700 mb-8">
              Meet the Founder
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Ivy Gacheri founded Arukah Health with a deep passion for
                helping children with neuro-developmental challenges discover
                their potential through joyful, purposeful movement.
              </p>
              <p>
                With years of clinical experience in pediatric therapy and a
                heart for families navigating uncertainty, Ivy created a space
                where science, compassion, and hope converge.
              </p>
              <p className="italic font-medium">
                “I believe every child deserves to be seen, celebrated, and
                supported on their unique journey toward strength and
                independence.”
              </p>
              {/* Add real bio, credentials, photo credit, etc. when ready */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL SECTION: CLOSING MESSAGE */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-700">
              Thank you for being part of this story.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you’re here to learn, move, teach, or heal — you belong.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
