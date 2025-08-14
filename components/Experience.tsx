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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and the companies I've had the privilege
              to work with
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700 hidden md:block"></div>

              {experience.map((job, index) => (
                <motion.div
                  key={job._id}
                  variants={itemVariants}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg hidden md:block"></div>

                  {/* Job Card */}
                  <div className="md:ml-16 ml-0">
                    <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700 card-hover">
                      {/* Job Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {job.position}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Current Badge */}
                        {job.current && (
                          <div className="mt-2 md:mt-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Current
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Job Duration */}
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(job.startDate)} -{" "}
                          {job.current ? "Present" : formatDate(job.endDate!)}
                        </span>
                        <span className="mx-2">•</span>
                        <span>
                          {getDuration(job.startDate, job.endDate, job.current)}
                        </span>
                      </div>

                      {/* Job Description */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {job.description.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start space-x-2"
                            >
                              <span className="text-primary-600 dark:text-primary-400 mt-1">
                                •
                              </span>
                              <span className="text-gray-600 dark:text-gray-300">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      {job.technologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
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

          {/* Experience Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Experience Summary
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {experience.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Total Positions
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {experience.filter((job) => job.current).length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Current Position
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {new Set(experience.map((job) => job.company)).size}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
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
