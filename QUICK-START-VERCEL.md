# 🚀 Quick Start - GitHub + Vercel

## Get your site live at https://luifigueroa.com in 15 minutes

---

## Step 1: Push Code to GitHub (5 min)

### A. Install Git
- Download: https://git-scm.com/download/win
- Install (use defaults)
- Restart terminal

### B. Create Repository on GitHub
1. Go to https://github.com/new
2. Name: `portfolio`
3. Make it **Public**
4. **Don't** add README
5. Click **Create repository**

### C. Push Your Code
Open PowerShell in your project folder and run:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

*(Replace YOUR-USERNAME with your actual GitHub username)*

**When prompted, sign in to GitHub** (use your username/password or a Personal Access Token)

---

## Step 2: Deploy to Vercel (2 min)

1. Go to https://vercel.com
2. **Sign up with GitHub** (one click)
3. Click **Add New...** → **Project**
4. Find your `portfolio` repo
5. Click **Import** → **Deploy**

**Done! Your site is live in 30 seconds!**

---

## Step 3: Add Your Domain (5 min)

1. In Vercel, go to your project
2. Click **Settings** → **Domains**
3. Enter: `luifigueroa.com` and `www.luifigueroa.com`
4. Click **Add**

### Update DNS
Vercel will show you exactly what DNS records to add. Go to your domain registrar and add:

- **A Record**: `@` → `76.76.21.21` (or what Vercel shows)
- **CNAME**: `www` → `cname.vercel-dns.com` (or what Vercel shows)

**Wait 5-30 minutes** for DNS to propagate. Vercel auto-enables HTTPS!

---

## 🎉 Done! Your site is at https://luifigueroa.com

---

## Updating Your Site

Make changes to your files, then:

```powershell
git add .
git commit -m "What you changed"
git push
```

**Vercel auto-deploys in 30 seconds!** No manual steps needed.

---

**Need detailed help?** See `DEPLOY-VERCEL.md` for full instructions with troubleshooting.
