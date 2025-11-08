import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { recentPosts } from '../data/portfolio';

export default function RecentPosts() {
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
      {/* Section Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex justify-between items-start md:items-center mb-4 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Insights on web development, design patterns, and modern technologies.
            </p>
          </div>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors duration-200 whitespace-nowrap"
          >
            View all
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>

      {/* Posts Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {recentPosts.map((post) => (
          <motion.article
            key={post.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="card p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {post.date} | {post.category}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              {post.description}
            </p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-block mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
            >
              Read more →
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
