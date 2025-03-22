import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-5 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-blue-400">{"<"}</span>
              Saumya
              <span className="text-blue-400">{"/>"}</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-2 w-fit rounded-md bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
