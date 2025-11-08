import { motion } from 'framer-motion';
import { allBlogPosts } from '../data/portfolio';

export default function Blog() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Insights, tutorials, and thoughts on modern web development, design patterns, 
            and best practices in building scalable applications.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <motion.div variants={containerVariants} className="space-y-8">
          {allBlogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="p-6 border-l-4 border-blue-600 dark:border-blue-400 bg-gray-50 dark:bg-gray-800 rounded-r-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex-1">
                  {post.title}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                  {post.date}
                </span>
              </div>

              <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {post.category}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {post.description}
              </p>

              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200">
                Read more →
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
