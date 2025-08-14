"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/db";
import { Database } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql,
  SiGraphql,
  SiRedux,
} from "react-icons/si";
import { IconType } from "react-icons";

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  // Ensure typing skills are included if not present
  const allSkills = [...skills];
  const hasTypingSkills = allSkills.some(
    (skill) => skill.name === "Typing Skills"
  );

  if (!hasTypingSkills) {
    allSkills.push({
      _id: "typing-skills-fallback",
      name: "Typing Skills",
      category: "other",
      proficiency: 80,
      icon: "⌨️",
    });
  }

  // Ensure Tailwind CSS, Bootstrap, and Next.js skills exist
  const ensureSkill = (
    name: string,
    category: "frontend" | "backend" | "database" | "devops" | "other",
    proficiency: number,
    icon: string
  ) => {
    const exists = allSkills.some(
      (skill) => skill.name.toLowerCase() === name.toLowerCase()
    );
    if (!exists) {
      allSkills.push({
        _id: `${name.toLowerCase().replace(/\s+/g, "-")}-fallback`,
        name,
        category,
        proficiency,
        icon,
      });
    }
  };

  ensureSkill("Tailwind CSS", "frontend", 88, "🌀");
  ensureSkill("Bootstrap", "frontend", 82, "🧩");
  // Place Next.js under frontend to reflect UI-focused full-stack framework usage
  ensureSkill("Next.js", "frontend", 90, "⏭️");

  const categories = ["frontend", "backend", "database", "devops"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return "🎨";
      case "backend":
        return "⚙️";
      case "database":
        return <Database className="w-8 h-8" />;
      case "devops":
        return "🚀";
      default:
        return "🛠️";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "from-blue-500 to-cyan-500";
      case "backend":
        return "from-green-500 to-emerald-500";
      case "database":
        return "from-purple-500 to-pink-500";
      case "devops":
        return "from-orange-500 to-red-500";
      default:
        return "from-indigo-500 to-purple-500";
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "frontend":
        return "Frontend Development";
      case "backend":
        return "Backend Development";
      case "database":
        return "Database Management";
      case "devops":
        return "DevOps & Tools";
      default:
        return "Other Skills";
    }
  };

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "frontend":
        return "Modern web technologies for creating responsive and interactive user interfaces";
      case "backend":
        return "Server-side development and API creation for robust applications";
      case "database":
        return "Data management and storage solutions for scalable applications";
      case "devops":
        return "Development tools and deployment practices for efficient workflows";
      default:
        return "Additional skills and tools that enhance development capabilities";
    }
  };

  const getSkillColor = (skillName: string, category: string) => {
    return getCategoryColor(category);
  };

  const getSkillIcon = (skillName: string, skillIcon?: string) => {
    if (skillName === "Typing Skills") {
      return "⌨️";
    }
    return skillIcon;
  };

  const normalized = (name: string) => name.trim().toLowerCase();
  const skillIconMap: Record<string, IconType> = {
    javascript: SiJavascript,
    typescript: SiTypescript,
    react: SiReact,
    "react.js": SiReact,
    reactjs: SiReact,
    "next.js": SiNextdotjs,
    nextjs: SiNextdotjs,
    node: SiNodedotjs,
    "node.js": SiNodedotjs,
    nodejs: SiNodedotjs,
    express: SiExpress,
    "express.js": SiExpress,
    expressjs: SiExpress,
    mongodb: SiMongodb,
    mysql: SiMysql,
    graphql: SiGraphql,
    redux: SiRedux,
    html: SiHtml5,
    "html/css": SiHtml5,
    "html/css3": SiHtml5,
    html5: SiHtml5,
    css: SiCss3,
    css3: SiCss3,
    tailwind: SiTailwindcss,
    "tailwind css": SiTailwindcss,
    tailwindcss: SiTailwindcss,
    bootstrap: SiBootstrap,
    git: SiGit,
    github: SiGithub,
    postman: SiPostman,
  };

  const getSkillIconComponent = (name: string): IconType | null => {
    const key = normalized(name);
    if (skillIconMap[key]) return skillIconMap[key];
    // Handle some composite names
    if (key.includes("react")) return SiReact;
    if (key.includes("next")) return SiNextdotjs;
    if (key.includes("node")) return SiNodedotjs;
    if (key.includes("html")) return SiHtml5;
    if (key.includes("css")) return SiCss3;
    return null;
  };

  const iconColorClassMap: Record<string, string> = {
    javascript: "text-yellow-500",
    typescript: "text-blue-600",
    react: "text-cyan-500",
    "react.js": "text-cyan-500",
    reactjs: "text-cyan-500",
    "next.js": "text-gray-900 dark:text-gray-200",
    nextjs: "text-gray-900 dark:text-gray-200",
    node: "text-green-600",
    "node.js": "text-green-600",
    nodejs: "text-green-600",
    express: "text-gray-500",
    "express.js": "text-gray-500",
    expressjs: "text-gray-500",
    mongodb: "text-green-600",
    mysql: "text-sky-600",
    graphql: "text-pink-500",
    redux: "text-purple-600",
    html: "text-orange-500",
    css: "text-blue-500",
    tailwind: "text-cyan-500",
    "tailwind css": "text-cyan-500",
    tailwindcss: "text-cyan-500",
    bootstrap: "text-purple-600",
    git: "text-orange-600",
    github: "text-gray-800 dark:text-gray-200",
    postman: "text-orange-500",
  };

  const getIconColorClass = (name: string): string => {
    const key = normalized(name);
    if (iconColorClassMap[key]) return iconColorClassMap[key];
    if (key.includes("react")) return iconColorClassMap.react;
    if (key.includes("next")) return iconColorClassMap["next.js"];
    if (key.includes("node")) return iconColorClassMap.node;
    if (key.includes("html")) return iconColorClassMap.html;
    if (key.includes("css")) return iconColorClassMap.css;
    return "text-primary-600 dark:text-primary-400";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCardVariants = {
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
    hover: {
      y: -8,
      scale: 1.02,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white text-3xl shadow-lg">
                🚀
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive expertise across the full development stack, from
              frontend interfaces to backend systems and deployment
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categorySkills = allSkills.filter(
                (skill) => skill.category === category
              );

              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category}
                  variants={categoryVariants}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getCategoryColor(
                          category
                        )} flex items-center justify-center text-white text-2xl shadow-lg`}
                      >
                        {getCategoryIcon(category)}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {getCategoryTitle(category)}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      {getCategoryDescription(category)}
                    </p>
                  </motion.div>

                  {/* Skills Grid */}
                  <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                  >
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill._id}
                        variants={skillCardVariants}
                        whileHover="hover"
                        className={`group relative bg-white dark:bg-dark-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                          skill.name === "Typing Skills"
                            ? "ring-2 ring-teal-200 dark:ring-teal-800 hover:ring-teal-300 dark:hover:ring-teal-700"
                            : ""
                        }`}
                      >
                        {/* Background gradient on hover */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 0.05 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute inset-0 bg-gradient-to-r ${getSkillColor(
                            skill.name,
                            category
                          )}`}
                        />

                        <div className="relative z-10">
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {skill.name}
                            </h4>
                            {(() => {
                              const Icon = getSkillIconComponent(skill.name);
                              if (Icon) {
                                return (
                                  <motion.span
                                    className="text-xl"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    <Icon
                                      className={`w-5 h-5 ${getIconColorClass(
                                        skill.name
                                      )}`}
                                    />
                                  </motion.span>
                                );
                              }
                              if (skill.icon) {
                                return (
                                  <motion.span
                                    className={`text-xl ${
                                      skill.name === "Typing Skills"
                                        ? "text-teal-500"
                                        : ""
                                    }`}
                                    animate={{
                                      scale: [1, 1.1, 1],
                                      rotate: [0, 5, -5, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                  >
                                    {getSkillIcon(skill.name, skill.icon)}
                                  </motion.span>
                                );
                              }
                              return null;
                            })()}
                          </div>

                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                              <span>Proficiency</span>
                              <span className="font-semibold">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                              <motion.div
                                custom={skill.proficiency}
                                variants={progressBarVariants}
                                className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(
                                  skill.name,
                                  category
                                )} shadow-sm`}
                              />
                            </div>
                          </div>

                          {/* Skill Level Indicator */}
                          <div className="mt-4 flex justify-center">
                            <div className="flex space-x-1">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <motion.div
                                  key={level}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 * level }}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    level <= Math.ceil(skill.proficiency / 20)
                                      ? `bg-gradient-to-r ${getSkillColor(
                                          skill.name,
                                          category
                                        )} shadow-sm`
                                      : "bg-gray-300 dark:bg-dark-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Skill Description */}
                          <div className="mt-3 pt-2 border-t border-gray-200 dark:border-dark-700">
                            <p
                              className={`text-xs ${
                                skill.name === "Typing Skills"
                                  ? "text-teal-600 dark:text-teal-400 font-semibold"
                                  : "text-gray-600 dark:text-gray-400"
                              }`}
                            >
                              {skill.name === "Typing Skills"
                                ? "⚡ 80 WPM typing speed"
                                : skill.proficiency >= 90 &&
                                  "Expert level proficiency"}
                              {skill.name !== "Typing Skills" &&
                                skill.proficiency >= 80 &&
                                skill.proficiency < 90 &&
                                "Advanced level proficiency"}
                              {skill.name !== "Typing Skills" &&
                                skill.proficiency >= 70 &&
                                skill.proficiency < 80 &&
                                "Intermediate level proficiency"}
                              {skill.name !== "Typing Skills" &&
                                skill.proficiency >= 60 &&
                                skill.proficiency < 70 &&
                                "Basic level proficiency"}
                              {skill.name !== "Typing Skills" &&
                                skill.proficiency < 60 &&
                                "Learning level proficiency"}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
