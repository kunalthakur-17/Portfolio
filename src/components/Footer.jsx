import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      ariaLabel: 'Visit Twitter profile',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      ariaLabel: 'Visit Instagram profile',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-10"
        >
          {/* Social Icons */}
          <motion.div
            variants={containerVariants}
            className="flex gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-600 dark:text-gray-400 text-sm"
          >
            Copyright © {new Date().getFullYear()} John Dev. All rights reserved.
          </motion.p>

          {/* Made with love */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-500 dark:text-gray-500 text-xs"
          >
            Crafted with ❤️ using React, Tailwind CSS & Framer Motion
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
