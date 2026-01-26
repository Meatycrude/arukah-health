// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Upper section: Logo & Name */}
      <div className="bg-purple-600 text-white py-3 text-center md:text-left md:px-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Arukah Health
        </h1>
      </div>

      {/* Bottom section: Tabs */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10 py-4 text-lg font-medium text-gray-800">
          <li>
            <Link href="/" className="hover:text-purple-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-600 transition">
              About
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:text-purple-600 transition">
              Services
            </span>
            {/* Dropdown sub-tabs */}
            <ul className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 py-2 min-w-[200px] border border-purple-100">
              <li>
                <Link
                  href="/services/exercises"
                  className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Exercise Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/progress"
                  className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/parent-resources"
                  className="block px-4 py-2 hover:bg-purple-50 hover:text-purple-700 transition"
                >
                  Parent Resources
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/model-of-care"
              className="hover:text-purple-600 transition"
            >
              Our Model of Care
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-purple-600 transition">
              Team
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
