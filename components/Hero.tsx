"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { About } from "@/lib/db";

interface HeroProps {
  about: About | null;
}

const Hero = ({ about }: HeroProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Character animation component
  const AnimatedText = ({
    text,
    delay = 0,
    className = "",
  }: {
    text: string;
    delay?: number;
    className?: string;
  }) => {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.1 }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.25,
              delay: delay + index * 0.03,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: about?.socialLinks?.github || "https://github.com/FarmanCs",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
      bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url:
        about?.socialLinks?.linkedin ||
        "https://www.linkedin.com/in/farman-ullah99/",
      icon: Linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    },
    {
      name: "WhatsApp",
      url: about?.socialLinks?.whatsapp
        ? `https://wa.me/${about.socialLinks.whatsapp.replace(/\D/g, "")}`
        : "https://wa.me/923499279661",
      icon: MessageCircle,
      color: "hover:text-green-600 dark:hover:text-green-400",
      bgColor: "hover:bg-green-50 dark:hover:bg-green-900/20",
    },
    {
      name: "Gmail",
      url: `mailto:${about?.email || "farmancs2024@gmail.com"}`,
      icon: Mail,
      color: "hover:text-red-600 dark:hover:text-red-400",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Profile Picture - Enhanced responsive design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center lg:items-start mt-4 sm:mt-8 lg:mt-0 order-2 lg:order-1"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-2xl">
              <img
                src={about?.avatar || "/profile.png"}
                alt={about?.name || "Farman Ullah"}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Media Links - Enhanced responsive design */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 w-full"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex flex-col items-center space-y-1 sm:space-y-2 touch-friendly`}
                    title={social.name}
                  >
                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 shadow-lg flex items-center justify-center transition-all duration-300 ${social.color} ${social.bgColor} hover:shadow-xl touch-friendly`}
                      initial={{ y: 0 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Content - Enhanced responsive design */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left order-1 lg:order-2"
          >
            {/* Greeting - Enhanced responsive text */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "backOut" }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="text-xl sm:text-2xl cursor-pointer"
              >
                🤝
              </motion.div>
              <AnimatedText
                text={`Hi! I'm ${about?.name || "Farman Ullah"}`}
                delay={0.3}
              />
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "backOut" }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="text-xl sm:text-2xl cursor-pointer"
              >
                💻
              </motion.div>
            </motion.h2>

            {/* Main Title - Enhanced responsive text sizing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mb-3 sm:mb-4 md:mb-6"
            >
              <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                <AnimatedText
                  text="MERN Stack Developer"
                  delay={0.6}
                  className="gradient-text inline-block whitespace-normal sm:whitespace-nowrap"
                />
                <br />
                <AnimatedText
                  text={`based in ${about?.location || "Lahore, Pakistan"}.`}
                  delay={1.2}
                  className="text-gray-700 dark:text-gray-300 inline-block whitespace-normal sm:whitespace-nowrap"
                />
              </motion.h1>
            </motion.div>

            {/* Description - Enhanced responsive text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl lg:max-w-none leading-relaxed mx-auto lg:mx-0"
            >
              {about?.bio ||
                "Passionate MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js, along with Next.js and MySQL. Specializing in building scalable RESTful APIs and secure authentication systems."}
            </motion.p>

            {/* Call to Action Buttons - Enhanced responsive design */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center touch-friendly focus-visible"
              >
                <span className="text-sm sm:text-base">contact me</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("/Farman Ullah.pdf", "_blank")}
                className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center touch-friendly focus-visible"
              >
                <span className="text-sm sm:text-base">my resume</span>
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
