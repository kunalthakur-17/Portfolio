# Deployment Guide - Professional Portfolio

## 🚀 Deployment Options

Your portfolio is ready to be deployed to production. Choose one of the following options:

---

## 1. **Netlify** (Recommended - Easiest)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
**Option A: Using Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Option B: Using Netlify Web Interface**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "New site from Git"
4. Connect your GitHub repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Click "Deploy site"

### Step 3: Custom Domain (Optional)
1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 2. **Vercel** (Great Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Follow Prompts
- Link to GitHub account
- Select project directory
- Accept default settings
- Deployment complete!

### Step 4: Custom Domain (Optional)
1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain

---

## 3. **GitHub Pages**

### Step 1: Update vite.config.js
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

### Step 2: Build
```bash
npm run build
```

### Step 3: Deploy
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to repository settings
2. Scroll to "GitHub Pages"
3. Select "Deploy from a branch"
4. Select `main` branch and `/dist` folder

---

## 4. **AWS S3 + CloudFront**

### Step 1: Build
```bash
npm run build
```

### Step 2: Create S3 Bucket
1. Go to AWS S3 console
2. Create new bucket (name: your-domain.com)
3. Enable "Static website hosting"
4. Upload `dist` folder contents

### Step 3: Set Up CloudFront
1. Create CloudFront distribution
2. Point to S3 bucket
3. Set default root object to `index.html`
4. Wait for deployment (5-10 minutes)

### Step 4: Connect Domain
1. Update Route 53 DNS records
2. Point to CloudFront distribution

---

## 5. **Docker Deployment**

### Create Dockerfile
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

---

## 6. **Manual Hosting (Any Server)**

### Step 1: Build
```bash
npm run build
```

### Step 2: Upload
Upload the `dist` folder to your server via:
- FTP
- SFTP
- Git
- File manager

### Step 3: Configure Web Server

**For Apache (.htaccess)**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**For Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/portfolio/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📋 Pre-Deployment Checklist

- [ ] Update contact information (email, phone, location)
- [ ] Replace profile image with your photo
- [ ] Update social media links
- [ ] Verify all project links work
- [ ] Test dark mode functionality
- [ ] Check mobile responsiveness
- [ ] Test all forms and interactions
- [ ] Verify animations load smoothly
- [ ] Check SEO meta tags
- [ ] Test on multiple browsers

---

## 🔧 Environment Variables (If Needed)

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your-email@example.com
```

---

## 📊 Performance Optimization

### Before Deployment
```bash
npm run build
```

### Check Build Size
```bash
npm install -g vite
vite build --analyze
```

### Optimize Images
- Use WebP format
- Compress images
- Use responsive images

---

## 🔒 Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Validate form inputs
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Set up monitoring

---

## 📈 Post-Deployment

### 1. Set Up Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 2. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Yandex Webmaster

### 3. Monitor Performance
- Set up error tracking (Sentry)
- Monitor page speed (PageSpeed Insights)
- Track user behavior (Google Analytics)

---

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment
**Solution**: Check if `base` path is correct in `vite.config.js`

### Issue: Routes Not Working
**Solution**: Ensure server redirects all routes to `index.html`

### Issue: Styles Not Loading
**Solution**: Check if CSS files are being served correctly

### Issue: Images Not Showing
**Solution**: Verify image paths are relative to `dist` folder

---

## 📞 Support

For deployment issues:
1. Check build logs
2. Verify environment variables
3. Test locally with `npm run preview`
4. Check hosting provider documentation

---

## ✅ Deployment Complete!

Once deployed, your portfolio will be:
- ✅ Live on the internet
- ✅ Accessible 24/7
- ✅ Optimized for performance
- ✅ Mobile-friendly
- ✅ SEO-ready
- ✅ Professional-grade

---

**Happy deploying! 🎉**

For questions or issues, refer to the specific platform's documentation or contact their support team.
