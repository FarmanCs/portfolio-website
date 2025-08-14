"use client";

import { motion } from "framer-motion";
import { About as AboutType } from "@/lib/db";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

interface AboutProps {
  about: AboutType | null;
}

const About = ({ about }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { icon: Github, href: about?.socialLinks?.github, label: "GitHub" },
    { icon: Linkedin, href: about?.socialLinks?.linkedin, label: "LinkedIn" },
  ].filter((link) => link.href);

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Get to know me better and understand my journey in the world of
              web development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Enhanced background container with gradient and decorative elements */}
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-blue-50 to-indigo-100 dark:from-primary-900/20 dark:via-blue-900/10 dark:to-indigo-900/20 rounded-2xl"></div>

                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary-400 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-blue-400 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-300 rounded-full blur-2xl"></div>
                  </div>

                  {/* Main image container with enhanced styling */}
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 dark:border-gray-700/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3),0_10px_20px_-5px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                    <img
                      src="/profile2.png"
                      alt={about?.name || "Farman Ullah"}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        console.log("Image failed to load:", target.src);
                        // Fallback to a different image if the first one fails
                        if (target.src.includes("p1.jpg")) {
                          target.src = "/p3.jpg";
                        }
                      }}
                    />

                    {/* Subtle overlay for better image integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
                  </div>

                  {/* Enhanced floating emoji badge */}
                  <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 z-20">
                    <div className="relative">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-primary-400 rounded-full blur-lg opacity-60 animate-pulse"></div>

                      {/* Main badge */}
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.3)] dark:shadow-[0_8px_32px_rgba(59,130,246,0.2)] border-2 border-white/20 dark:border-gray-200/20 backdrop-blur-sm">
                        <span className="text-white text-sm sm:text-lg lg:text-2xl">
                          💻
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 -right-2 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-80"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 px-4 lg:px-0"
            >
              <div className="space-y-3 lg:space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {about?.name || "Farman Ullah"}
                  </h3>
                  <p className="text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium">
                    {about?.title || "Full Stack Developer"}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                  {about?.bio ||
                    "I am a passionate full-stack developer with expertise in creating modern web applications. I specialize in React, Next.js, TypeScript, Node.js, and MongoDB, and I love building scalable, user-friendly solutions that make a difference."}
                </p>

                {/* Contact Information */}
                <div className="space-y-3 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>{about?.email || "farmancs2024@gmail.com"}</span>
                  </div>

                  {about?.phone && (
                    <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span>{about.phone}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>{about?.location || "Pakistan"}</span>
                  </div>
                </div>

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="flex justify-center lg:justify-start space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gray-100 dark:bg-dark-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                )}

                {/* Skills Preview with Icons */}
                <div className="pt-4 text-center lg:text-left">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {(
                      [
                        { name: "React", Icon: SiReact },
                        { name: "Next.js", Icon: SiNextdotjs },
                        { name: "TypeScript", Icon: SiTypescript },
                        { name: "Node.js", Icon: SiNodedotjs },
                        { name: "MongoDB", Icon: SiMongodb },
                        { name: "TailwindCSS", Icon: SiTailwindcss },
                      ] as const
                    ).map(({ name, Icon }, index) => (
                      <motion.span
                        key={name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium inline-flex items-center gap-2"
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            name.includes("React")
                              ? "text-cyan-500"
                              : name.includes("Next")
                              ? "text-gray-900 dark:text-gray-200"
                              : name.includes("TypeScript")
                              ? "text-blue-600"
                              : name.includes("Node")
                              ? "text-green-600"
                              : name.includes("MongoDB")
                              ? "text-green-600"
                              : name.includes("Tailwind")
                              ? "text-cyan-500"
                              : "text-primary-600 dark:text-primary-400"
                          }`}
                        />
                        {name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
