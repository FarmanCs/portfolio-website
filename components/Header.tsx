"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About me", href: "#about" },
  ];

  useEffect(() => {
    const idsToTrack = [
      "#skills",
      "#services",
      "#projects",
      "#about",
      "#contact",
    ]; // exclude home from active state
    const onScroll = () => {
      const scrollPosition = window.scrollY + 140; // header offset
      let current = "";
      idsToTrack.forEach((id) => {
        const el = document.querySelector(id) as HTMLElement | null;
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      });
      setActiveHash(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveHash(href === "#home" ? "" : href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg dark:bg-dark-900/98 shadow-lg"
          : "bg-white/95 backdrop-blur-md dark:bg-dark-900/95"
      } border-b border-gray-200 dark:border-dark-700`}
    >
      <div className="container-custom">
        <div className="flex items-center h-12 sm:h-14 md:h-16 lg:h-16 justify-between">
          {/* Logo - Responsive sizing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-4 mr-2 sm:mr-4 md:mr-8 lg:mr-16"
          >
            {/* Profile Picture - Responsive sizing */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-dark-600 shadow-md flex-shrink-0"
            >
              <img
                src="/profile.png"
                alt="Farman Ullah"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Name - Responsive text sizing */}
            <span className="hidden sm:inline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap header-name">
              Farman Ullah
            </span>
          </motion.div>

          {/* Desktop Navigation - Enhanced responsive spacing */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-12 flex-1 justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 ${
                  activeHash === item.href && item.href !== "#home"
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                    : ""
                }`}
              >
                {item.name}
                {activeHash === item.href && item.href !== "#home" && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary-600 dark:bg-primary-400 rounded-full" />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Right side buttons - Enhanced responsive design */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 ml-2 lg:ml-8">
            {/* Dark mode toggle - Responsive sizing */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 touch-friendly focus-visible"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-600" />
                )}
              </motion.button>
            )}

            {/* Contact button - Responsive text */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="hidden md:flex items-center space-x-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 border border-gray-300 dark:border-dark-600 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 transition-colors duration-200 touch-friendly focus-visible"
            >
              <span className="text-sm sm:text-base lg:text-base">Contact</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.button>

            {/* Mobile menu button - Enhanced touch target */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 md:p-3 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 touch-friendly focus-visible"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 sm:py-6 border-t border-gray-200 dark:border-dark-700"
          >
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-all duration-200 whitespace-nowrap px-4 py-3 sm:py-4 rounded-lg touch-friendly focus-visible ${
                    activeHash === item.href && item.href !== "#home"
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800"
                  }`}
                >
                  <span className="text-base sm:text-lg font-medium">
                    {item.name}
                  </span>
                </motion.button>
              ))}

              {/* Mobile Contact Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("#contact")}
                className="mt-4 px-4 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-medium text-base sm:text-lg touch-friendly focus-visible hover:bg-primary-700 transition-colors duration-200"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
