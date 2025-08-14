"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Skill } from "@/lib/db";
import {
  Code,
  Palette,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  X,
} from "lucide-react";
import React from "react";

interface ServicesProps {
  skills: Skill[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  category: string;
  color: string;
  gradient: string;
  price?: string;
  popular?: boolean;
}

const Services = ({ skills }: ServicesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  // Create services based on skills
  const services: Service[] = [
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      description:
        "Complete web applications from frontend to backend with modern technologies",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Responsive React/Next.js applications",
        "RESTful APIs and GraphQL",
        "Database design and optimization",
        "Performance optimization",
        "SEO and accessibility",
      ],
      category: "development",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design & Development",
      description:
        "Beautiful, intuitive user interfaces with modern design principles",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "Modern UI/UX design",
        "Interactive prototypes",
        "Design systems",
        "User experience optimization",
        "Accessibility compliance",
      ],
      category: "design",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "React Native development",
        "Native app optimization",
        "App store deployment",
        "Performance monitoring",
        "Push notifications",
      ],
      category: "mobile",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: "api-development",
      title: "API Development & Integration",
      description: "Robust backend APIs and third-party integrations",
      icon: <Server className="w-8 h-8" />,
      features: [
        "RESTful API development",
        "GraphQL implementation",
        "Third-party integrations",
        "API documentation",
        "Security & authentication",
      ],
      category: "backend",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "database-solutions",
      title: "Database Solutions",
      description: "Database design, optimization, and management solutions",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration",
        "Backup & recovery",
        "Security implementation",
      ],
      category: "database",
      color: "indigo",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      description:
        "Speed up your applications with advanced optimization techniques",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Frontend optimization",
        "Backend performance tuning",
        "Database query optimization",
        "CDN implementation",
        "Caching strategies",
      ],
      category: "optimization",
      color: "yellow",
      gradient: "from-yellow-500 to-orange-500",
      popular: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Services", icon: "🌟" },
    { id: "development", name: "Development", icon: "💻" },
    { id: "design", name: "Design", icon: "🎨" },
    { id: "mobile", name: "Mobile", icon: "📱" },
    { id: "backend", name: "Backend", icon: "⚙️" },
    { id: "database", name: "Database", icon: "🗄️" },
    { id: "optimization", name: "Optimization", icon: "⚡" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: {
        duration: 0.15,
      },
    },
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    }
    if (activeService) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll while modal is open
      const { overflow } = document.body.style;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = overflow;
      };
    }
  }, [activeService]);

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl sm:text-4xl shadow-xl">
                ⚡
              </div>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Professional development services tailored to your needs,
              delivered with modern technologies and best practices
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                      : "bg-white dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-dark-700"
                  }`}
                >
                  <span className="text-base sm:text-lg">{category.icon}</span>
                  <span className="whitespace-nowrap">{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-fr items-stretch px-4">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-2 -right-2 z-20"
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  </motion.div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Service Header - Icon and Title */}
                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-6">
                  {/* Service Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-3 sm:mb-0 shadow-lg`}
                  >
                    {React.cloneElement(service.icon as React.ReactElement, {
                      className: "w-6 h-6 sm:w-8 sm:h-8",
                    })}
                  </motion.div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    type="button"
                    onClick={() => setActiveService(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg hover:shadow-${service.color}-500/25 mt-auto`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredService === service.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Modal Popup */}
          {activeService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
            >
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setActiveService(null)}
              />

              {/* Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-2xl bg-white dark:bg-dark-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-dark-700 overflow-hidden"
              >
                {/* Header */}
                <div
                  className={`px-6 py-5 bg-gradient-to-r ${activeService.gradient} text-white flex items-center justify-between`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      {activeService.icon}
                    </div>
                    <h3
                      id="service-modal-title"
                      className="text-xl font-semibold"
                    >
                      {activeService.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={() => setActiveService(null)}
                    className="p-2 rounded-lg hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {activeService.description} I provide a tailored plan
                    including discovery, design, development, testing, and
                    deployment. You’ll get clear timelines, regular updates, and
                    quality outcomes.
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      What’s included
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {activeService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                    <a
                      href="#contact"
                      onClick={() => setActiveService(null)}
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                    >
                      Contact Now
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveService(null)}
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-gray-100 dark:bg-dark-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-dark-700 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                    >
                      Back to Services
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                No services found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                No services available for the selected category. Please try a
                different filter.
              </p>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing
                together. I'm here to help bring your ideas to life with modern
                technology and best practices.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.hash = "#contact";
                  }
                }}
              >
                Let's Talk About Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
