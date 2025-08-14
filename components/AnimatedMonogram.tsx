"use client";

import { motion } from "framer-motion";

const AnimatedMonogram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="inline-block"
    >
      <motion.div
        className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg border-2 border-primary-200 dark:border-primary-800"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white font-bold text-xl tracking-wider"
        >
          FU
        </motion.span>

        {/* Animated ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-300 dark:border-primary-600"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Second ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary-400 dark:border-primary-500"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedMonogram;
