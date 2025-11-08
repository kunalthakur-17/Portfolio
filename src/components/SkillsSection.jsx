import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "AWS", "Vercel", "GitHub Actions"],
    },
    {
      category: "Design",
      items: [
        "Figma",
        "UI/UX",
        "Responsive Design",
        "Accessibility",
        "Animation",
      ],
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
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 rounded-2xl"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
