@echo off
echo ========================================
echo Push to GitHub - DegenLui/Portfolio
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo.
    echo Please install Git from: https://git-scm.com/download/win
    echo After installation, close and reopen this terminal, then run this script again.
    echo.
    pause
    exit /b 1
)

echo Git is installed!
git --version
echo.

echo Your repository: https://github.com/DegenLui/Portfolio.git
echo.

REM Check if already initialized
if exist ".git" (
    echo Git repository already initialized.
) else (
    echo Initializing Git repository...
    git init
    echo Done!
)
echo.

echo Configuring Git...
echo Enter your name for commits:
set /p GIT_NAME=Name: 

echo Enter your email (GitHub account email):
set /p GIT_EMAIL=Email: 

git config user.name "%GIT_NAME%"
git config user.email "%GIT_EMAIL%"
echo Git configured!
echo.

echo Adding all files...
git add .
echo Files added!
echo.

echo Creating initial commit...
git commit -m "Initial commit - Hardware & IoT portfolio website"
echo Commit created!
echo.

echo Setting branch to 'main'...
git branch -M main
echo Done!
echo.

echo Connecting to GitHub repository...
git remote remove origin 2>nul
git remote add origin https://github.com/DegenLui/Portfolio.git
echo Connected to: https://github.com/DegenLui/Portfolio.git
echo.

echo ========================================
echo READY TO PUSH
echo ========================================
echo.
echo When you push, GitHub will ask you to sign in:
echo   Username: DegenLui
echo   Password: Use your GitHub password OR Personal Access Token
echo.
echo To create a token (more secure):
echo   1. Go to: https://github.com/settings/tokens
echo   2. Generate new token (classic)
echo   3. Select 'repo' permission
echo   4. Copy token and use as password
echo.
pause

echo.
echo Pushing to GitHub...
echo (You'll be prompted to sign in)
echo.
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Code pushed to GitHub!
    echo ========================================
    echo.
    echo Your repository: https://github.com/DegenLui/Portfolio
    echo.
    echo Next step: Deploy to Vercel
    echo.
    echo 1. Go to: https://vercel.com
    echo 2. Sign up with GitHub (one click)
    echo 3. Click "Add New..." -^> "Project"
    echo 4. Find and import: DegenLui/Portfolio
    echo 5. Click "Deploy"
    echo.
    echo Your site will be live in 30 seconds!
    echo.
) else (
    echo.
    echo ========================================
    echo Push failed
    echo ========================================
    echo.
    echo Common issues:
    echo   - Wrong password/token
    echo   - Need to create Personal Access Token
    echo   - Internet connection issue
    echo.
    echo Try again or check your GitHub credentials.
    echo.
)

pause
