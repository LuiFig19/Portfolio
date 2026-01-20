# Deployment Guide for luifigueroa.com

## Quick Setup - GitHub Pages with Custom Domain

Follow these steps to get your site live at **luifigueroa.com**

---

## Step 1: Install Git (If Not Already Installed)

### Windows:
1. Download Git from: https://git-scm.com/download/win
2. Run the installer (use default settings)
3. Restart your terminal/command prompt after installation

### Verify Installation:
Open a new terminal and run:
```bash
git --version
```

---

## Step 2: Create GitHub Account (If Needed)

1. Go to https://github.com
2. Sign up for a free account
3. Verify your email address

---

## Step 3: Create GitHub Repository

### Option A: Using GitHub Web Interface (Easier)

1. Go to https://github.com/new
2. **Repository name**: `portfolio` or `luifigueroa.com`
3. **Description**: "Hardware & IoT Engineer Portfolio"
4. **Visibility**: Public
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Option B: Using GitHub CLI (If Installed)

```bash
gh repo create luifigueroa.com --public --source=. --remote=origin
```

---

## Step 4: Push Your Code to GitHub

Open terminal in your project folder (`C:\Users\luifi\Desktop\LuisFigueroaSite`) and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Hardware portfolio website"

# Add GitHub repository as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/luifigueroa.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be asked to sign in to GitHub the first time you push.

---

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR-USERNAME.github.io/luifigueroa.com/`

---

## Step 6: Configure Custom Domain (luifigueroa.com)

### A. Update DNS Settings with Your Domain Registrar

Log in to where you bought **luifigueroa.com** (GoDaddy, Namecheap, Google Domains, etc.)

**Add these DNS records:**

#### For Root Domain (luifigueroa.com):
Add **4 A records** pointing to GitHub's servers:
```
Type: A     Name: @     Value: 185.199.108.153
Type: A     Name: @     Value: 185.199.109.153
Type: A     Name: @     Value: 185.199.110.153
Type: A     Name: @     Value: 185.199.111.153
```

#### For WWW Subdomain (www.luifigueroa.com):
Add **1 CNAME record**:
```
Type: CNAME     Name: www     Value: YOUR-USERNAME.github.io
```

**Replace YOUR-USERNAME** with your actual GitHub username.

### B. Configure GitHub Pages Custom Domain

1. Back in GitHub repository **Settings → Pages**
2. Under "Custom domain", enter: `luifigueroa.com`
3. Click **Save**
4. Wait a few minutes, then check "Enforce HTTPS" (appears after DNS propagates)

### C. Wait for DNS Propagation

- DNS changes can take 1-48 hours (usually 15-30 minutes)
- Check status at: https://dnschecker.org/#A/luifigueroa.com

---

## Step 7: Verify Deployment

Once DNS propagates:

1. Visit https://luifigueroa.com
2. Your site should load with HTTPS
3. Test on mobile and desktop
4. Verify all links work

---

## Making Live Updates

After initial setup, to update your live site:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push

# Site updates automatically in 1-2 minutes!
```

---

## Alternative: Deploy to Netlify (Easier DNS)

If GitHub Pages DNS setup seems complicated, use Netlify instead:

### Deploy to Netlify:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click **Add new site → Import an existing project**
4. Select your GitHub repository
5. Click **Deploy site**
6. Site live in 30 seconds!

### Add Custom Domain (Netlify):

1. Go to **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter: `luifigueroa.com`
4. Follow Netlify's DNS instructions (simpler than GitHub Pages)
5. Netlify provides automatic HTTPS

**Netlify Advantages:**
- Easier custom domain setup
- Automatic HTTPS (instant)
- Faster deployments
- Better error messages
- Form handling (if you add contact form later)

---

## Alternative: Deploy to Vercel (Also Easy)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click **New Project**
4. Import your GitHub repository
5. Click **Deploy**
6. Add custom domain in settings

---

## Troubleshooting

### Git not found
- Install Git from https://git-scm.com
- Restart terminal after installation

### Permission denied (GitHub)
- Set up authentication: https://docs.github.com/en/authentication

### DNS not working
- Double-check A records and CNAME
- Wait longer (can take 24-48 hours)
- Use https://dnschecker.org to verify

### HTTPS not working
- Wait for DNS to fully propagate
- Uncheck and recheck "Enforce HTTPS" in GitHub Pages settings
- Try in incognito mode (clear cache)

### Images not loading
- Check file names match exactly (case-sensitive)
- Ensure images are in `/images/` folder
- Verify images are committed to Git

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub (updates live site)
git push

# Pull latest changes
git pull

# View remote URL
git remote -v
```

---

## Need Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **Custom Domain Setup**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Netlify Docs**: https://docs.netlify.com
- **DNS Checker**: https://dnschecker.org

---

## Current Status

✅ CNAME file created (tells GitHub your domain)  
✅ Domain added to HTML meta tags  
⏳ Need to install Git  
⏳ Need to create GitHub repository  
⏳ Need to push code  
⏳ Need to configure DNS  

**Once you complete the steps above, your site will be live at https://luifigueroa.com!**
