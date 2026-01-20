# 🚀 Quick Start - Get Your Site Live

## Goal
Get your portfolio live at **https://luifigueroa.com** with live update capability

---

## Step 1: Install Git (5 minutes)

1. **Download Git**: https://git-scm.com/download/win
2. **Run the installer** (use all default options)
3. **Restart your terminal** after installation

---

## Step 2: Create GitHub Account (3 minutes)

If you don't have one:
1. Go to https://github.com
2. Sign up (it's free)
3. Verify your email

---

## Step 3: Run Setup Script (5 minutes)

1. **Double-click** `setup-github.bat` in this folder
2. Follow the prompts:
   - Enter your GitHub username
   - Enter your name and email
   - Create the repository on GitHub when prompted
   - Wait for the push to complete

**The script does everything automatically!**

---

## Step 4: Enable GitHub Pages (2 minutes)

1. Go to: https://github.com/YOUR-USERNAME/luifigueroa.com
2. Click **Settings** → **Pages**
3. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

Your site is now live at: `https://YOUR-USERNAME.github.io/luifigueroa.com/`

---

## Step 5: Connect Your Domain (10-30 minutes)

### A. Update DNS at Your Domain Registrar

Log in where you registered **luifigueroa.com** and add these DNS records:

**A Records (for root domain):**
```
Type: A     Host: @     Value: 185.199.108.153
Type: A     Host: @     Value: 185.199.109.153
Type: A     Host: @     Value: 185.199.110.153
Type: A     Host: @     Value: 185.199.111.153
```

**CNAME Record (for www):**
```
Type: CNAME     Host: www     Value: YOUR-USERNAME.github.io
```

### B. Add Domain to GitHub Pages

1. In **Settings → Pages**
2. Custom domain: `luifigueroa.com`
3. Click **Save**
4. Wait 5 minutes, then enable **Enforce HTTPS**

### C. Wait for DNS (15 minutes - 24 hours)

- Check at: https://dnschecker.org/#A/luifigueroa.com
- When it shows GitHub's IPs, you're ready!

---

## 🎉 Done! Your site is live at https://luifigueroa.com

---

## Making Updates to Your Live Site

### Every time you want to update:

1. **Edit your files** (HTML, CSS, images, etc.)
2. **Double-click** `update-site.bat`
3. **Enter a description** of what you changed
4. **Wait 1-2 minutes** - your site updates automatically!

That's it! Your changes are live at https://luifigueroa.com

---

## Common Issues

**"Git not found"**
→ Install Git from https://git-scm.com/download/win and restart terminal

**"Repository not found"**
→ Make sure you created the repository on GitHub first

**"Domain not working"**
→ DNS takes time (15 mins - 24 hours). Be patient!

**"HTTPS not available"**
→ Wait for DNS to propagate, then enable in GitHub Pages settings

---

## Easier Alternative: Use Netlify

If GitHub seems complicated, try Netlify instead:

1. Go to https://netlify.com
2. Sign up with GitHub
3. **Drag and drop** your entire folder
4. Site is live instantly!
5. Add custom domain in settings (easier than GitHub)

**Netlify is recommended if you're not comfortable with Git/GitHub!**

---

## Need Help?

- Open `DEPLOYMENT-GUIDE.md` for detailed instructions
- Check `README.md` for customization help
- GitHub Pages docs: https://docs.github.com/pages

---

## Files You Created

- ✅ `CNAME` - Tells GitHub about your domain
- ✅ `setup-github.bat` - Automated setup script
- ✅ `update-site.bat` - Easy update script
- ✅ `DEPLOYMENT-GUIDE.md` - Detailed instructions

**You're all set up for success! 🚀**
