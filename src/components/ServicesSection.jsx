import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and cloud platforms.',
    },
    {
      id: 2,
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed with accessibility and user experience in mind.',
    },
    {
      id: 3,
      icon: Zap,
      title: 'Performance',
      description: 'Optimized applications that load fast and perform smoothly across all devices.',
    },
    {
      id: 4,
      icon: Shield,
      title: 'Security',
      description: 'Secure applications with best practices for data protection and user privacy.',
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
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Services & Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Comprehensive solutions for your digital needs, from concept to deployment
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
