# Quick Start Guide - Professional Portfolio

## 🎯 Get Started in 5 Minutes

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

---

## 1️⃣ Installation

```bash
cd c:\Users\kunal\OneDrive\Desktop\Portfolio
npm install --legacy-peer-deps
```

---

## 2️⃣ Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 3️⃣ Customize Your Portfolio

### Update Your Information

**File**: `src/data/portfolio.js`

```javascript
// Update blog posts
export const recentPosts = [
  {
    id: 1,
    title: 'Your Blog Title',
    date: 'Your Date',
    category: 'Your Category',
    description: 'Your description',
    slug: 'your-slug',
  },
  // ... more posts
];

// Update featured works
export const featuredWorks = [
  {
    id: 1,
    title: 'Your Project Title',
    year: '2024',
    category: 'Your Category',
    description: 'Your project description',
    image: '/image/your-image.jpg',
    link: 'https://your-project-link.com',
  },
  // ... more projects
];
```

### Update Profile Image

1. Replace image in: `public/image/FaceApp_1688199475730_1.jpg`
2. Or update image path in components

### Update Contact Information

**File**: `src/pages/Contact.jsx`

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com',
    href: 'mailto:your-email@example.com',
  },
  // ... update other contact info
];
```

---

## 4️⃣ Build for Production

```bash
npm run build
```

Output: `dist/` folder (ready to deploy)

---

## 5️⃣ Deploy

### Option 1: Netlify (Easiest)
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: Manual Upload
Upload the `dist/` folder to any web hosting service.

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── RecentPosts.jsx
│   │   ├── FeaturedWorks.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolio.js    # Your content
│   ├── App.jsx             # Main app
│   ├── main.jsx            # Entry point
│   └── index.css           # Styles
├── public/
│   └── image/              # Your images
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind config
├── vite.config.js          # Vite config
└── package.json            # Dependencies
```

---

## 🎨 Customization Guide

### Change Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0066cc',    // Change primary color
      accent: '#ff6464',     // Change accent color
      // ... add more colors
    },
  },
}
```

### Update Skills

**File**: `src/components/SkillsSection.jsx`

```javascript
const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  // ... add more skills
];
```

### Change Fonts

**File**: `src/index.css`

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 🌙 Dark Mode

Dark mode is automatically enabled/disabled via the toggle button in the navbar. 
User preference is saved to localStorage.

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Test responsiveness:
```bash
npm run dev
# Open DevTools (F12) → Toggle device toolbar
```

---

## 🔗 Navigation

- **Home**: `/`
- **Blog**: `/blog`
- **Contact**: `/contact`

---

## 📝 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🐛 Common Issues & Solutions

### Issue: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Issue: Dependencies not installing
```bash
npm install --legacy-peer-deps --force
```

### Issue: Styles not loading
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Issue: Images not showing
- Check image path is correct
- Ensure image file exists in `public/image/`
- Use relative paths: `/image/filename.jpg`

---

## 🚀 Next Steps

1. ✅ Customize content in `src/data/portfolio.js`
2. ✅ Update profile image
3. ✅ Change colors in `tailwind.config.js`
4. ✅ Update contact information
5. ✅ Test locally with `npm run dev`
6. ✅ Build with `npm run build`
7. ✅ Deploy to your hosting service

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Router Docs](https://reactrouter.com)

---

## 💡 Tips

- Use the browser DevTools to inspect and debug
- Test on multiple devices and browsers
- Optimize images before uploading
- Keep content updated regularly
- Monitor analytics after deployment
- Backup your code regularly

---

## ✅ You're All Set!

Your professional portfolio is ready to showcase your work to the world! 🎉

For more detailed information, check:
- `PROFESSIONAL_ENHANCEMENTS.md` - Detailed changes
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `PORTFOLIO_README.md` - Full documentation

---

**Happy coding! 🚀**
