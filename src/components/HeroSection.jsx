import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function HeroSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Full-Stack Developer
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">& Creative Technologist</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
          >
            I craft beautiful, scalable web applications with modern technologies. Specialized in React, 
            Node.js, and cloud solutions. Let's build something amazing together.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Download resume"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative circle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-full blur-2xl opacity-50"></div>

            {/* Profile image circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/image/FaceApp_1688199475730_1.jpg"
                alt="John - Creative Technologist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
