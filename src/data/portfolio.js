// Portfolio data - posts, works, and contact information
export const recentPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    date: '15 Nov 2024',
    category: 'React, TypeScript',
    description: 'Learn best practices for building large-scale React applications with TypeScript. We explore component architecture, type safety, and performance optimization techniques.',
    slug: 'scalable-react-typescript',
  },
  {
    id: 2,
    title: 'Modern CSS Grid Layouts: A Comprehensive Guide',
    date: '10 Nov 2024',
    category: 'CSS, Web Design',
    description: 'Master CSS Grid with practical examples. From basic layouts to complex responsive designs, discover how to create modern web layouts efficiently.',
    slug: 'css-grid-guide',
  },
];

export const featuredWorks = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    year: '2024',
    category: 'Full-Stack',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    image: '/image/FaceApp_1688199475730_1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Management Dashboard',
    year: '2024',
    category: 'Web Application',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Built with React, Firebase, and Tailwind CSS.',
    image: '/image/FaceApp_1688199475730_1.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'AI-Powered Content Generator',
    year: '2023',
    category: 'AI/ML Integration',
    description: 'Intelligent content generation tool leveraging OpenAI APIs. Features include batch processing, customizable templates, and export to multiple formats.',
    image: '/image/FaceApp_1688199475730_1.jpg',
    link: '#',
  },
];

export const allBlogPosts = [
  ...recentPosts,
  {
    id: 3,
    title: 'Advanced React Patterns: Render Props and Custom Hooks',
    date: '5 Nov 2024',
    category: 'React',
    description: 'Explore advanced React patterns that improve code reusability and maintainability.',
    slug: 'react-advanced-patterns',
  },
  {
    id: 4,
    title: 'Web Performance Optimization Techniques',
    date: '28 Oct 2024',
    category: 'Performance',
    description: 'Comprehensive guide to optimizing web application performance for better user experience.',
    slug: 'web-performance-optimization',
  },
  {
    id: 5,
    title: 'Getting Started with Next.js 14',
    date: '20 Oct 2024',
    category: 'Next.js',
    description: 'Learn the latest features in Next.js 14 and how to build full-stack applications.',
    slug: 'nextjs-14-guide',
  },
];

export const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://linkedin.com',
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    name: 'Twitter',
    icon: 'Twitter',
    url: 'https://twitter.com',
    ariaLabel: 'Visit Twitter profile',
  },
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com',
    ariaLabel: 'Visit GitHub profile',
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://instagram.com',
    ariaLabel: 'Visit Instagram profile',
  },
];
