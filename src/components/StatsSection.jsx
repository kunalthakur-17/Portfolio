import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      number: '50+',
      label: 'Projects Completed',
      icon: '🚀',
    },
    {
      number: '100+',
      label: 'Happy Clients',
      icon: '😊',
    },
    {
      number: '5+',
      label: 'Years Experience',
      icon: '⭐',
    },
    {
      number: '99%',
      label: 'Client Satisfaction',
      icon: '👍',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
