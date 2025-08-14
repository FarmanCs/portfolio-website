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

    window.addEventListener("scroll", handleScroll);
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
        <div className="flex items-center h-10 sm:h-12 md:h-13 lg:h-13 justify-between">
          {/* Logo - moved closer to left */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-3 mr-1 sm:mr-2 md:mr-8 lg:mr-16"
          >
            {/* Profile Picture */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-gray-200 dark:border-dark-600 shadow-md"
            >
              <img
                src="/profile.png"
                alt="Farman Ullah"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Hide name on small screens, show on medium and larger with proper text handling */}
            <span className="hidden sm:inline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap header-name">
              Farman Ullah
            </span>
          </motion.div>

          {/* Desktop Navigation - with more spacing */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 flex-1 justify-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors duration-200 whitespace-nowrap ${
                  activeHash === item.href && item.href !== "#home"
                    ? "text-primary-600 dark:text-primary-400"
                    : ""
                }`}
              >
                {item.name}
                {activeHash === item.href && item.href !== "#home" && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-primary-600 dark:bg-primary-400 rounded-full" />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Right side buttons - moved closer to left */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 ml-1 md:ml-6 lg:ml-8">
            {/* Dark mode toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="p-1 sm:p-1.5 md:p-1.5 lg:p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                {isDark ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-600" />
                )}
              </motion.button>
            )}

            {/* Contact button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="hidden md:flex items-center space-x-2 px-2.5 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 border border-gray-300 dark:border-dark-600 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 transition-colors duration-200"
            >
              <span>Contact</span>
              <svg
                className="w-4 h-4"
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

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 sm:p-1.5 md:p-1.5 lg:p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              ) : (
                <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-dark-700"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-colors duration-200 whitespace-nowrap ${
                    activeHash === item.href && item.href !== "#home"
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
