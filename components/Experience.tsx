"use client";

import { motion } from "framer-motion";
import { Experience as ExperienceType } from "@/lib/db";
import { Calendar, MapPin, Building } from "lucide-react";

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience = ({ experience }: ExperienceProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const getDuration = (startDate: Date, endDate?: Date, current?: boolean) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    let duration = "";
    if (years > 0) {
      duration += `${years} year${years > 1 ? "s" : ""}`;
    }
    if (months > 0 || years === 0) {
      if (duration) duration += " ";
      duration += `${months} month${months > 1 ? "s" : ""}`;
    }

    return current ? `${duration} (Current)` : duration;
  };

  return (
    <section id="experience" className="section-padding">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              My professional journey and the companies I've had the privilege
              to work with
            </p>
          </motion.div>

          {/* Experience Timeline - Enhanced responsive design */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line - Enhanced responsive design */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700 hidden md:block"></div>

              {experience.map((job, index) => (
                <motion.div
                  key={job._id}
                  variants={itemVariants}
                  className="relative mb-8 sm:mb-12 last:mb-0"
                >
                  {/* Timeline Dot - Enhanced responsive design */}
                  <div className="absolute left-4 sm:left-6 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg hidden md:block"></div>

                  {/* Job Card - Enhanced responsive design */}
                  <div className="md:ml-12 sm:ml-16 ml-0">
                    <div className="bg-white dark:bg-dark-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-dark-700 card-hover">
                      {/* Job Header - Enhanced responsive design */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                            {job.position}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="font-medium text-sm sm:text-base">
                                {job.company}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span className="text-sm sm:text-base">
                                {job.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Current Badge - Enhanced responsive design */}
                        {job.current && (
                          <div className="mt-2 md:mt-0">
                            <span className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Current
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Job Duration - Enhanced responsive design */}
                      <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>
                          {formatDate(job.startDate)} -{" "}
                          {job.current ? "Present" : formatDate(job.endDate!)}
                        </span>
                        <span className="mx-1 sm:mx-2">•</span>
                        <span>
                          {getDuration(job.startDate, job.endDate, job.current)}
                        </span>
                      </div>

                      {/* Job Description - Enhanced responsive design */}
                      <div className="mb-4 sm:mb-6">
                        <ul className="space-y-2 sm:space-y-3">
                          {job.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start space-x-2 sm:space-x-3"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1 sm:mt-1.5">
                                •
                              </span>
                              <span className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used - Enhanced responsive design */}
                      {job.technologies.length > 0 && (
                        <div>
                          <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 sm:px-3 py-1 sm:py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs sm:text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Summary - Enhanced responsive design */}
          <motion.div
            variants={itemVariants}
            className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Experience Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                    {experience.length}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Total Positions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                    {experience.filter((job) => job.current).length}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Current Position
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                    {new Set(experience.map((job) => job.company)).size}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Companies
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
