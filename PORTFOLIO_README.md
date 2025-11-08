# Professional Portfolio - React + Tailwind CSS

A fully responsive, modern portfolio website built with React, Tailwind CSS, Framer Motion, and React Router.

## 🚀 Features

### Core Features
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Dark Mode Toggle** - Persistent dark mode with localStorage
- ✅ **Smooth Animations** - Framer Motion animations on all components
- ✅ **React Router** - Multi-page routing (Home, Blog, Contact)
- ✅ **Tailwind CSS** - Modern utility-first styling
- ✅ **Accessible** - ARIA labels, semantic HTML, keyboard navigation

### Pages
1. **Home** - Hero section, recent posts, featured works
2. **Blog** - Blog listing with all posts
3. **Contact** - Contact form with validation and social links

### Components
- **Navbar** - Sticky navigation with mobile hamburger menu
- **HeroSection** - Intro with profile image and CTA button
- **RecentPosts** - Two-column grid of blog posts
- **FeaturedWorks** - Showcase of featured projects
- **Footer** - Social media icons and copyright

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build for production:**
```bash
npm run build
```

4. **Preview production build:**
```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with dark mode toggle
│   ├── HeroSection.jsx     # Hero section with profile
│   ├── RecentPosts.jsx     # Recent blog posts grid
│   ├── FeaturedWorks.jsx   # Featured projects showcase
│   └── Footer.jsx          # Footer with social links
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Blog.jsx            # Blog listing page
│   └── Contact.jsx         # Contact form page
├── data/
│   └── portfolio.js        # Dummy data for posts and works
├── App.jsx                 # Main app with routing
├── main.jsx                # React entry point
└── index.css               # Tailwind directives
```

## 🎨 Customization

### Update Portfolio Data
Edit `src/data/portfolio.js` to update:
- Recent posts
- Featured works
- Social media links

### Modify Colors
Update color palette in `tailwind.config.js`:
```js
colors: {
  primary: '#0066cc',
  accent: '#ff6464',
  // ... more colors
}
```

### Change Profile Image
Replace the image path in components:
```jsx
<img src="/image/your-image.jpg" alt="Profile" />
```

## 🌙 Dark Mode

Dark mode is automatically saved to localStorage. Users can toggle it via the moon/sun icon in the navbar.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ✨ Animation Features

- **Page transitions** - Fade-in animations on page load
- **Hover effects** - Cards lift on hover with shadow
- **Staggered animations** - Child elements animate sequentially
- **Scroll animations** - Elements animate when scrolled into view

## 📧 Contact Form

The contact form in `/contact` includes:
- Form validation
- Success message feedback
- Accessible form fields
- Dark mode support

To integrate with a backend, modify the `handleSubmit` function in `Contact.jsx`.

## 🔍 SEO Considerations

- Semantic HTML structure
- Alt text for all images
- ARIA labels for interactive elements
- Meta tags in index.html

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Connect your GitHub repo to Vercel
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ by John**
