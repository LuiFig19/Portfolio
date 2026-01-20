# Deploy to GitHub + Vercel - Step by Step

## Goal
Get your site live at **https://luifigueroa.com** using GitHub + Vercel

---

## Part 1: Push Your Code to GitHub

### Step 1: Install Git (if not installed)

1. Download: https://git-scm.com/download/win
2. Run installer (use all defaults)
3. **Restart your terminal/command prompt** after installation

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** `portfolio` (or `luifigueroa.com`)
3. **Visibility:** Public
4. **DO NOT** check "Add README" or any other options
5. Click **Create repository**

### Step 3: Push Your Code to GitHub

Open PowerShell or Command Prompt in your project folder (`C:\Users\luifi\Desktop\LuisFigueroaSite`):

```powershell
# Initialize Git
git init

# Configure Git (replace with your info)
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Portfolio website"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Set branch to main
git branch -M main

# Push to GitHub (you'll be asked to sign in)
git push -u origin main
```

**Note:** When you push, GitHub will ask you to authenticate. You can:
- Use your GitHub username/password
- Or use a Personal Access Token (more secure) - create one at: https://github.com/settings/tokens

---

## Part 2: Deploy to Vercel

### Step 1: Sign Up for Vercel

1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository

1. In Vercel dashboard, click **Add New...** → **Project**
2. You'll see your GitHub repositories
3. Find and click **Import** next to your `portfolio` repository
4. Click **Deploy**

**Your site is live in 30 seconds!** It will be at something like: `portfolio-xyz.vercel.app`

---

## Part 3: Add Custom Domain (luifigueroa.com)

### Step 1: Add Domain in Vercel

1. Go to your project in Vercel
2. Click **Settings** → **Domains**
3. Enter: `luifigueroa.com`
4. Also add: `www.luifigueroa.com`
5. Click **Add**

### Step 2: Update DNS Records

Vercel will show you exactly what DNS records to add. Log in to where you registered **luifigueroa.com** and add:

#### Option A: If you want both www and root domain:

**Root domain (luifigueroa.com):**
- Type: **A Record**
- Name: `@` (or leave blank)
- Value: Vercel's IP (they'll show you, usually: `76.76.21.21`)

**WWW subdomain:**
- Type: **CNAME**
- Name: `www`
- Value: `cname.vercel-dns.com` (or what Vercel shows you)

#### Option B: Easier - Just use CNAME for root:

Some registrars support CNAME at root:
- Type: **CNAME**
- Name: `@` (or leave blank)
- Value: `cname.vercel-dns.com`

**Vercel will show you the exact values** when you add the domain!

### Step 3: Wait for DNS Propagation

- Usually takes 5-30 minutes
- Can take up to 24 hours
- Vercel will show "Valid Configuration" when ready
- Once ready, SSL certificate is automatic!

---

## Part 4: Making Updates to Live Site

Every time you want to update your live site:

### Option 1: Using Command Line

```powershell
# Make your changes to files
# Then:

git add .
git commit -m "Description of your changes"
git push

# Vercel automatically deploys in ~30 seconds!
```

### Option 2: Using GitHub Desktop (Easier)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with GitHub
3. File → Add Local Repository → Select your folder
4. Make changes
5. Click "Commit to main" (bottom left)
6. Click "Push origin" (top bar)
7. Vercel auto-deploys!

---

## Quick Setup Script (Windows)

I'll create a script to automate Part 1 for you:

---

## Troubleshooting

### Git not found
- Install Git: https://git-scm.com/download/win
- Restart terminal after installation

### Authentication failed
- Create Personal Access Token: https://github.com/settings/tokens
- Generate new token (classic) with `repo` permission
- Use token as password when pushing

### Vercel can't find repository
- Make sure repository is **Public** (or give Vercel access to private repos)
- Refresh Vercel's repository list

### Domain not working
- Check DNS records match what Vercel shows
- Wait for DNS propagation (use https://dnschecker.org)
- Vercel shows status in Domain settings

### Changes not showing
- Check Vercel dashboard for deployment status
- Hard refresh browser (Ctrl+F5)
- Clear browser cache

---

## Why GitHub + Vercel?

✅ **Automatic deployments** - Push to GitHub, Vercel auto-deploys  
✅ **Fast CDN** - Your site is fast worldwide  
✅ **Easy domain setup** - Vercel guides you through DNS  
✅ **Free SSL** - Automatic HTTPS certificates  
✅ **Preview deployments** - See changes before going live  
✅ **Great for portfolios** - Perfect for static sites  

---

## Next Steps After Deployment

1. ✅ Verify site works at https://luifigueroa.com
2. ✅ Test on mobile and desktop
3. ✅ Update your contact links (email, LinkedIn, GitHub)
4. ✅ Add your project images
5. ✅ Share on LinkedIn!

---

## Quick Reference Commands

```powershell
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub (triggers Vercel deploy)
git push

# Check remote URL
git remote -v
```

---

**Once you push to GitHub and connect to Vercel, your site will be live at https://luifigueroa.com!** 🚀
