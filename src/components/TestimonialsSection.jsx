import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      content: 'John delivered an exceptional website that exceeded our expectations. His attention to detail and professional approach made the entire process smooth.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, E-Commerce',
      content: 'Outstanding work on our e-commerce platform. The performance improvements and user experience enhancements were remarkable.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, SaaS',
      content: 'Professional, responsive, and incredibly talented. John is a true expert in modern web development. Highly recommended!',
      rating: 5,
      image: '👩‍🔬',
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
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 rounded-2xl"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          What my clients say about working with me
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonial.image}</div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
