import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { featuredWorks } from '../data/portfolio';

export default function FeaturedWorks() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Section Title */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Works
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Showcase of recent projects demonstrating expertise in full-stack development and modern web technologies.
        </p>
      </motion.div>

      {/* Works Grid */}
      <motion.div variants={containerVariants} className="space-y-16">
        {featuredWorks.map((work) => (
          <motion.div
            key={work.id}
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="md:col-span-1 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-100 px-3 py-1 rounded-full text-sm font-semibold">
                  {work.year}
                </span>
                <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  {work.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {work.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {work.description}
              </p>

              <motion.a
                href={work.link}
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                aria-label={`View ${work.title} project`}
              >
                View project
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
