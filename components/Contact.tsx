"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { About } from "@/lib/db";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

interface ContactProps {
  about: About | null;
}

const Contact = ({ about }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Basic client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setError("All fields are required");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

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

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-dark-800 contact-section"
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
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              Ready to start a project or just want to chat? Feel free to reach
              out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form - Enhanced responsive design */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="bg-white dark:bg-dark-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Send Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8 md:py-12"
                  >
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-green-500 mx-auto mb-4 sm:mb-6" />
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Message Sent!
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : error ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8 md:py-12"
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Error Sending Message
                    </h4>
                    <p className="text-red-600 dark:text-red-400 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
                      {error}
                    </p>
                    <button
                      onClick={() => setError(null)}
                      className="btn-primary touch-friendly focus-visible"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6 md:space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base md:text-lg transition-colors duration-200 touch-friendly focus-visible"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base md:text-lg transition-colors duration-200 touch-friendly focus-visible"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base md:text-lg transition-colors duration-200 touch-friendly focus-visible"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none text-sm sm:text-base md:text-lg transition-colors duration-200 touch-friendly focus-visible"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg py-3 sm:py-4 touch-friendly focus-visible"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information - Enhanced responsive design */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8"
            >
              <div className="bg-white dark:bg-dark-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 dark:border-dark-700">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a friendly chat about technology and
                  development.
                </p>
              </div>

              {/* Contact Details - Enhanced responsive design */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">
                      Email
                    </h4>
                    <a
                      href={`mailto:${
                        about?.email || "farmancs2024@gmail.com"
                      }`}
                      className="text-primary-600 dark:text-primary-400 hover:underline text-sm sm:text-base md:text-lg break-all touch-friendly"
                    >
                      {about?.email || "farmancs2024@gmail.com"}
                    </a>
                  </div>
                </div>

                {about?.phone && (
                  <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">
                        Phone
                      </h4>
                      <a
                        href={`tel:${about.phone}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline text-sm sm:text-base md:text-lg touch-friendly"
                      >
                        {about.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base md:text-lg">
                      Location
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                      {about?.location || "Lahore, Pakistan"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability - Enhanced responsive design */}
              <div className="bg-white dark:bg-dark-900 rounded-xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-dark-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                  Availability
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base md:text-lg">
                    <span className="text-gray-600 dark:text-gray-400">
                      Freelance
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base md:text-lg">
                    <span className="text-gray-600 dark:text-gray-400">
                      Full-time
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Available
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base md:text-lg">
                    <span className="text-gray-600 dark:text-gray-400">
                      Part-time
                    </span>
                    <span className="text-green-600 dark:text-green-400 font-medium">
                      Available
                    </span>
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

export default Contact;
