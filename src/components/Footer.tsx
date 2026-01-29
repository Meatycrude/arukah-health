import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ARUKAH <span className="text-blue-400">HEALTH</span>
              </h1>
              <p className="text-blue-200 text-lg font-medium italic mb-4">
                Healing hearts, touching lives & restoring health through
                movement!
              </p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Professional Exercise Therapy grounded in clinical expertise and
              compassion—supporting recovery, resilience, and lifelong wellness.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+254712436230"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +254 712 436 230
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a
                  href="tel:+254732461867"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +254 732 461 867
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:info@arukahhealth.co.ke"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@arukahhealth.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Team", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Lets Connect
            </h3>
            <div className="space-y-4">
              {[
                {
                  platform: "Facebook",
                  icon: FaFacebook,
                  color: "text-blue-500",
                },
                {
                  platform: "Instagram",
                  icon: FaInstagram,
                  color: "text-pink-500",
                },
                {
                  platform: "WhatsApp",
                  icon: FaWhatsapp,
                  color: "text-green-500",
                },
                {
                  platform: "Email Us",
                  icon: FaEnvelope,
                  color: "text-red-500",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href="#"
                    className="flex items-center gap-3 text-gray-300 hover:text-white group transition-all duration-300"
                  >
                    <div
                      className={`${social.color} bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors`}
                    >
                      <Icon size={18} />
                    </div>
                    <span>{social.platform}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 4: Hours & Location */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Hours & Location
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <FaClock className="text-blue-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div className="font-medium">Monday - Friday</div>
                    <div>8:00 AM - 6:00 PM</div>
                    <div className="font-medium mt-2">Saturday</div>
                    <div>9:00 AM - 1:00 PM</div>
                    <div className="font-medium mt-2">Public Holidays</div>
                    <div>By Appointment</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-300">
                      Ngong Road, Nairobi
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      Emergency consultations available by phone
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright & Additional Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Arukah Health. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 text-center border border-blue-800/50">
          <p className="text-blue-300 font-medium">
            ⚕️ Emergency consultations available by phone • 24/7 support for
            urgent cases
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
