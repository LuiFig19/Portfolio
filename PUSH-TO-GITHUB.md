# Push Your Code to GitHub - Quick Steps

I've prepared everything! You just need to install Git first.

---

## Step 1: Install Git (2 minutes) ⚠️ REQUIRED

1. **Download Git**: https://git-scm.com/download/win
2. **Run the installer** (use all default settings - just click Next)
3. **IMPORTANT:** After installation, close this terminal/command prompt
4. **Open a new terminal** in this folder

---

## Step 2: Run These Commands (I'll prepare them)

After Git is installed, open a **NEW** terminal/PowerShell in your project folder and run:

```powershell
# Initialize Git
git init

# Configure Git (replace with your info)
git config user.name "Luis Figueroa"
git config user.email "your-email@example.com"

# Add all files
git add .

# Create commit
git commit -m "Initial commit - Hardware portfolio website"

# Connect to your GitHub repo
git remote add origin https://github.com/DegenLui/Portfolio.git

# Set branch to main
git branch -M main

# Push to GitHub (you'll sign in here)
git push -u origin main
```

**When you run `git push`, GitHub will ask you to authenticate:**
- Use your GitHub username: `DegenLui`
- Use your GitHub password OR a Personal Access Token (more secure)

**To create a Personal Access Token:**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Portfolio Push"
4. Select scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you'll only see it once!)
7. Use this token as your password when pushing

---

## Step 3: After Push is Complete ✅

Once your code is pushed, you'll see it at:
**https://github.com/DegenLui/Portfolio**

---

## Step 4: Deploy to Vercel (1 minute)

1. Go to: https://vercel.com
2. Click **Sign Up** → **Continue with GitHub**
3. Authorize Vercel
4. Click **Add New...** → **Project**
5. Find your **Portfolio** repository
6. Click **Import** → **Deploy**

**Your site is live in 30 seconds!**

---

## Step 5: Add Custom Domain

1. In Vercel, go to your project
2. Click **Settings** → **Domains**
3. Enter: `luifigueroa.com` and `www.luifigueroa.com`
4. Click **Add**
5. Vercel will show you exactly what DNS records to add
6. Add them at your domain registrar
7. Wait 5-30 minutes

**Done! Your site will be at https://luifigueroa.com**

---

## Or Use the Automated Script

After installing Git, you can run:
```powershell
powershell -ExecutionPolicy Bypass -File do-everything.ps1
```

It will ask you for your info and do everything automatically!

---

**TL;DR: Install Git first, then run the commands above or use the script!**
