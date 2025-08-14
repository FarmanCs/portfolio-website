"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "@/lib/db";
import { ExternalLink, Github, Calendar } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

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

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-dark-800"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header - Enhanced responsive design */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
              A showcase of my recent work and projects that demonstrate my
              skills and creativity
            </p>

            {/* Filter Buttons - Enhanced responsive design */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter("all")}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base touch-friendly focus-visible ${
                  filter === "all"
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                    : "bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                }`}
              >
                All Projects ({projects.length})
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter("featured")}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base touch-friendly focus-visible ${
                  filter === "featured"
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                    : "bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                }`}
              >
                Featured ({projects.filter((p) => p.featured).length})
              </motion.button>
            </div>
          </motion.div>

          {/* Projects Grid - Enhanced responsive design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-700 card-hover touch-friendly"
              >
                {/* Project Image - Enhanced responsive design */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <div className="flex space-x-2 sm:space-x-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 touch-friendly"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 touch-friendly"
                            aria-label="View live project"
                          >
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content - Enhanced responsive design */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies - Enhanced responsive design */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 sm:py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs sm:text-sm font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Date - Enhanced responsive design */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {formatDate(project.createdAt)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State - Enhanced responsive design */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 sm:py-16"
            >
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">📁</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                No projects found
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
                {filter === "featured"
                  ? "No featured projects available at the moment."
                  : "No projects available at the moment."}
              </p>
            </motion.div>
          )}

          {/* View All Projects CTA - Enhanced responsive design */}
          {filter === "featured" &&
            projects.length > projects.filter((p) => p.featured).length && (
              <motion.div
                variants={itemVariants}
                className="text-center mt-8 sm:mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter("all")}
                  className="btn-primary touch-friendly focus-visible"
                >
                  View All Projects
                </motion.button>
              </motion.div>
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
