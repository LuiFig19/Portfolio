# Luis Figueroa - Hardware & IoT Engineer Portfolio

A professional, single-page portfolio website showcasing hardware engineering skills, IoT projects, and embedded systems expertise. Built with vanilla HTML, CSS, and JavaScript for maximum compatibility and fast loading.

## 🚀 Quick Deploy

Deploy this site in under 5 minutes using one of these platforms:

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

1. Click the button above
2. Connect your GitHub account
3. Deploy! (Your site will be live at `yourname.netlify.app`)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the button above
2. Import this repository
3. Deploy! (Your site will be live at `yourname.vercel.app`)

### Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Select **main branch** as source
4. Your site will be live at `yourusername.github.io/repo-name`

### Deploy to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Pages** → **Create a project**
3. Connect your Git repository
4. Build settings: None needed (static site)
5. Deploy!

## 📁 Project Structure

```
LuisFigueroaSite/
├── index.html          # Main website structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features
├── CONTENT.md          # Content strategy and recommendations
├── README.md           # This file
├── images/             # Project images and assets
│   ├── project-astrarmm.jpg
│   ├── project-airquality.jpg
│   ├── project-motion.jpg
│   └── project-network.jpg
└── resume.pdf          # Optional: Your resume PDF
```

## ✏️ Customization Guide

### 1. Update Personal Information

**In `index.html`, replace these placeholders:**

- **Email:** Line 407 - `your.email@example.com`
- **LinkedIn:** Line 411 - `https://linkedin.com/in/yourprofile`
- **GitHub:** Line 415 - `https://github.com/yourprofile`
- **Location:** Line 419 - `Your Location / Remote`
- **Resume link:** Line 424 - `resume.pdf`

**Quick find & replace:**
```bash
# Find and replace your email
your.email@example.com → your-real-email@domain.com

# Find and replace your LinkedIn
linkedin.com/in/yourprofile → linkedin.com/in/your-actual-profile

# Find and replace your GitHub
github.com/yourprofile → github.com/your-actual-username
```

### 2. Add Project Images

**Image Requirements:**
- Format: JPG or PNG
- Recommended size: 800x600px or 1200x900px
- Max file size: 500KB each (optimize with [TinyPNG](https://tinypng.com/))

**Required images:**
1. `images/project-astrarmm.jpg` - AstraRMM Platform
2. `images/project-airquality.jpg` - Air Quality Monitor
3. `images/project-motion.jpg` - Motion Sensor Network
4. `images/project-network.jpg` - Network Monitoring Hardware

**What to photograph/render:**
- PCB designs (top and bottom views from KiCad)
- Assembled devices
- 3D-printed enclosures
- Devices deployed in real environments
- Close-ups of interesting components

**Placeholder images:** If you don't have photos yet, use these free resources:
- [Unsplash](https://unsplash.com/s/photos/electronics) - High-quality electronics photos
- [Pexels](https://pexels.com/search/circuit-board/) - Free circuit board images

### 3. Update Content

**Edit specific sections in `index.html`:**

**To change the tagline (Line 39):**
```html
<h1>I Build Hardware That Works</h1>
<!-- Change to your preferred tagline from CONTENT.md -->
```

**To add a new project:**
1. Copy an existing `<div class="project-card">` block (Lines 94-290)
2. Paste it in the projects grid
3. Update: title, tagline, description, tech stack, and image

**To modify skills:**
- Find the Skills section (Lines 294-363)
- Edit the lists in each `<div class="skill-category">`

**To update experience:**
- Find the Experience section (Lines 367-451)
- Edit the timeline items or add new ones

### 4. Change Colors & Branding

**In `styles.css`, modify the color variables (Lines 9-20):**

```css
:root {
    --primary-color: #1a5490;     /* Main brand color */
    --accent-color: #00d9ff;      /* Accent highlights */
    --text-color: #2c3e50;        /* Body text */
    /* ... */
}
```

**Recommended color palettes:**
- **Tech Blue:** Primary: `#1a5490`, Accent: `#00d9ff`
- **Modern Purple:** Primary: `#6366f1`, Accent: `#a855f7`
- **Industrial Orange:** Primary: `#ea580c`, Accent: `#f59e0b`
- **Cyber Green:** Primary: `#059669`, Accent: `#10b981`

### 5. Add Your Resume PDF

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the root directory
4. The download button will automatically work

**Resume tips:**
- Keep under 2MB file size
- Ensure text is selectable (not a scanned image)
- Match the content style from the website
- Include website URL in the header

## 🔧 Advanced Customization

### Add Google Analytics

**In `index.html`, add before closing `</head>` tag:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add a Contact Form

Replace the contact links section with a form using:
- [Formspree](https://formspree.io/) (Free tier: 50 submissions/month)
- [Netlify Forms](https://www.netlify.com/products/forms/) (If hosted on Netlify)
- [Google Forms](https://forms.google.com/) (Embed or link)

**Example Formspree integration:**

```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
  <input type="email" name="email" placeholder="Your email" required>
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

### Add Project Links

**In each project card, add:**

```html
<div class="project-links">
  <a href="https://github.com/yourname/project-repo" class="btn btn-secondary">
    View on GitHub
  </a>
  <a href="project-demo-url" class="btn btn-secondary">
    Live Demo
  </a>
</div>
```

## 🎨 Design Features

### Included Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode support (automatic based on system preference)
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly hamburger menu
- ✅ Intersection Observer animations
- ✅ Optimized performance (< 2s load time)
- ✅ SEO-friendly meta tags
- ✅ Accessibility (WCAG AA compliant)
- ✅ Print-friendly styles

### Browser Support
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🔍 SEO Optimization

### Pre-Launch Checklist

- [ ] Update `<title>` tag with your name (Line 18 in index.html)
- [ ] Update meta description (Line 6)
- [ ] Add proper alt text to all images
- [ ] Test on [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Run [Lighthouse audit](https://developers.google.com/web/tools/lighthouse) (aim for 90+ scores)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)

### After Launch

1. **Create a sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-19</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

2. **Submit to Google Search Console:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property
   - Submit your sitemap

3. **Get indexed faster:**
   - Share on LinkedIn with project highlights
   - Add to your GitHub profile
   - Link from your resume

## 🚀 Performance Optimization

### Already Optimized
- Minimal CSS and JavaScript (no frameworks)
- No external dependencies
- Inline critical CSS (optional enhancement)
- Lazy loading for images
- Optimized fonts (Google Fonts with preconnect)

### Further Optimization

**Compress images:**
```bash
# Use TinyPNG, ImageOptim, or similar tools
# Target: < 200KB per image
```

**Minify code for production:**
```bash
# CSS minification
npx cssnano styles.css styles.min.css

# JavaScript minification
npx terser script.js -o script.min.js

# HTML minification
npx html-minifier index.html -o index.min.html
```

**Add caching headers (on your hosting platform):**
```
# Netlify: Create _headers file
/*
  Cache-Control: public, max-age=31536000
  
/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

## 📱 Testing Checklist

### Before Deployment

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on tablet (iPad or Android)
- [ ] Check all internal links work
- [ ] Check all external links open in new tabs
- [ ] Verify smooth scrolling works
- [ ] Test mobile menu open/close
- [ ] Test dark mode (change system settings)
- [ ] Run Lighthouse audit
- [ ] Check console for errors (F12)
- [ ] Test with slow 3G network
- [ ] Proofread all content

### Lighthouse Targets
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

## 🌐 Custom Domain Setup

### Recommended Registrars
- [Namecheap](https://www.namecheap.com/) - Affordable, good UI
- [Google Domains](https://domains.google/) - Simple, clean
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) - At-cost pricing

### Domain Suggestions
- `luisfigueroa.dev` (Recommended)
- `luisfigueroa.io`
- `figueroa.tech`
- `luisfigueroahardware.com`

### Connecting Custom Domain

**For Netlify:**
1. Go to **Domain Settings**
2. Click **Add custom domain**
3. Follow DNS instructions
4. Enable HTTPS (automatic)

**For Vercel:**
1. Go to **Project Settings** → **Domains**
2. Add your domain
3. Update DNS records as shown
4. HTTPS enabled automatically

**For GitHub Pages:**
1. Add `CNAME` file with your domain
2. Update DNS records with your registrar
3. Enable HTTPS in settings

## 📊 Analytics & Monitoring

### Simple Analytics (Privacy-Friendly)
- [Plausible](https://plausible.io/) - $9/month, privacy-focused
- [Simple Analytics](https://simpleanalytics.com/) - $9/month, no cookies
- [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) - Free, basic

### Traditional Analytics
- Google Analytics - Free, comprehensive
- Fathom Analytics - $14/month, privacy-focused

## 🔐 Security Best Practices

### Already Implemented
- ✅ No inline JavaScript (CSP-friendly)
- ✅ External links have `rel="noopener noreferrer"`
- ✅ No third-party scripts (except optional analytics)
- ✅ HTTPS enforced (via hosting platform)

### Additional Security (Advanced)
Add these headers via hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 🤝 Integration with Job Search

### LinkedIn Strategy
1. **Update headline:** "Hardware & IoT Engineer | Custom PCBs | ESP32 Systems"
2. **Add website to contact info:** Featured prominently
3. **Featured section:** Link to your website
4. **About section:** Use content from website's About section
5. **Experience:** Mirror website's Experience section
6. **Post when launching:** Share 2-3 project highlights

### GitHub Strategy
1. **Pin 4 best repos** that match website projects
2. **Add website URL** to GitHub profile
3. **Create repos** for each project if not already done
4. **READMEs** should mirror project descriptions from website
5. **Add topics/tags:** ESP32, IoT, PCB-design, hardware, embedded

### Resume Strategy
1. **Add website URL** in header (prominent)
2. **Mirror Experience section** from website
3. **Keep resume to 1 page** (website is for details)
4. **Use same project names** for consistency
5. **Include "View full portfolio: yourdomain.com"**

### Cold Email Template

```
Subject: Hardware Engineer - [Company Name] [Role]

Hi [Hiring Manager],

I'm a hardware and IoT engineer who designs custom PCBs and builds 
production-ready monitoring devices. I saw your [role] posting and 
wanted to reach out.

I've built:
• ESP32-based RMM hardware for MSPs (AstraRMM startup)
• Industrial air quality monitors with PoE (deployed in 3 locations)
• Network monitoring hardware with real-time packet analysis

I don't have a formal degree, but I have working hardware and real 
deployments. My full portfolio is at yourdomain.com

Would you be open to a brief call?

Thanks,
Luis Figueroa
yourdomain.com
your.email@example.com
```

## 🐛 Troubleshooting

### Images Not Loading
- Check file names match exactly (case-sensitive)
- Ensure images are in `/images/` folder
- Check file formats (JPG, PNG, WebP supported)

### Mobile Menu Not Working
- Open browser console (F12)
- Check for JavaScript errors
- Ensure `script.js` is loading

### Slow Loading
- Compress images (< 200KB each)
- Use WebP format for better compression
- Test with Lighthouse

### Dark Mode Issues
- Check browser/system dark mode settings
- Test in Chrome DevTools (toggle dark mode)
- Verify CSS variables in `:root` and dark mode media query

### Layout Broken on Mobile
- Test with Chrome DevTools Device Toolbar
- Check viewport meta tag is present
- Verify responsive CSS media queries

## 📝 Maintenance

### Monthly
- [ ] Check for broken links
- [ ] Update projects section with new builds
- [ ] Review analytics (if enabled)
- [ ] Update skills as you learn new tools

### Quarterly
- [ ] Add new projects
- [ ] Update experience section
- [ ] Refresh project images
- [ ] Review and update content

### Annually
- [ ] Redesign if needed (keep it fresh)
- [ ] Update color scheme if desired
- [ ] Review all content for accuracy

## 📚 Resources

### Design Inspiration
- [Awwwards](https://www.awwwards.com/) - Web design inspiration
- [Behance](https://www.behance.net/) - Portfolio examples
- [Dribbble](https://dribbble.com/) - Design ideas

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [web.dev](https://web.dev/) - Google's web best practices
- [CSS-Tricks](https://css-tricks.com/) - CSS guides and tips

### Tools
- [TinyPNG](https://tinypng.com/) - Image compression
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance testing
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [Coolors](https://coolors.co/) - Color palette generator

## 💡 Tips for Success

1. **Keep it updated:** Add new projects as you build them
2. **Show, don't tell:** Images and results > buzzwords
3. **Make it personal:** Your voice should come through
4. **Test everywhere:** Don't assume it works on all devices
5. **Get feedback:** Ask 2-3 people to review before launching
6. **Share actively:** Post on LinkedIn when you add projects
7. **Link everywhere:** Resume, email signature, LinkedIn, GitHub
8. **Monitor analytics:** See what projects get attention
9. **Be authentic:** Don't exaggerate, let work speak for itself
10. **Keep learning:** Update as you grow

## 🎯 Next Steps

1. [ ] Replace placeholder contact information
2. [ ] Add your project images
3. [ ] Customize colors (optional)
4. [ ] Add resume PDF
5. [ ] Deploy to hosting platform
6. [ ] Test on multiple devices
7. [ ] Set up custom domain
8. [ ] Add to LinkedIn profile
9. [ ] Update GitHub profile
10. [ ] Start applying to jobs!

## 📄 License

This portfolio template is free to use and modify for your personal portfolio. Attribution appreciated but not required.

## 🤝 Support

Questions or issues? Common solutions:
- Check this README first
- Review the CONTENT.md strategy guide
- Search for errors in browser console (F12)
- Test in incognito/private mode
- Clear browser cache

---

**Built by Luis Figueroa** | Hardware & IoT Engineer | [yourdomain.com](https://yourdomain.com)

Good luck landing that job! 🚀
