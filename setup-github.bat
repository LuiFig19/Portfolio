@echo off
echo ========================================
echo GitHub Repository Setup
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
)

echo Git is installed! Version:
git --version
echo.

REM Check if already a git repository
if exist ".git" (
    echo Git repository already initialized.
) else (
    echo Initializing Git repository...
    git init
    echo Done!
)
echo.

echo Please enter your GitHub username:
set /p GITHUB_USERNAME=Username: 

echo.
echo Configuring Git (first time setup)...
echo.
echo Enter your name (for commits):
set /p GIT_NAME=Name: 

echo Enter your email (same as GitHub account):
set /p GIT_EMAIL=Email: 

git config --global user.name "%GIT_NAME%"
git config --global user.email "%GIT_EMAIL%"
echo Git configured!
echo.

echo Adding all files to Git...
git add .
echo.

echo Creating initial commit...
git commit -m "Initial commit - Hardware & IoT portfolio website"
echo.

echo Setting default branch to 'main'...
git branch -M main
echo.

echo Adding GitHub remote...
echo Please enter your GitHub repository name (or press Enter for 'portfolio'):
set /p REPO_NAME=Repository name: 
if "%REPO_NAME%"=="" set REPO_NAME=portfolio

git remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git
echo.

echo ========================================
echo IMPORTANT: Create GitHub Repository
echo ========================================
echo.
echo Before pushing, you need to create the repository on GitHub:
echo.
echo 1. Go to: https://github.com/new
echo 2. Repository name: luifigueroa.com
echo 3. Make it PUBLIC
echo 4. DO NOT add README, .gitignore, or license
echo 5. Click "Create repository"
echo.
echo Press any key once you've created the repository...
pause
echo.

echo Pushing to GitHub...
echo (You may be asked to sign in to GitHub)
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Code pushed to GitHub
    echo ========================================
    echo.
    echo Next steps for VERCEL deployment:
    echo 1. Go to: https://vercel.com
    echo 2. Sign up with GitHub
    echo 3. Import your repository: https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
    echo 4. Add custom domain: luifigueroa.com in Vercel settings
    echo 5. Update DNS records (Vercel will show you exactly what to add)
    echo.
    echo See DEPLOY-VERCEL.md for detailed Vercel instructions
    echo.
) else (
    echo.
    echo ========================================
    echo ERROR: Push failed
    echo ========================================
    echo.
    echo Common fixes:
    echo - Make sure you created the repository on GitHub
    echo - Check your GitHub username is correct
    echo - Ensure you're signed in to GitHub
    echo.
    echo Try running this command manually:
    echo git push -u origin main
    echo.
)

pause
