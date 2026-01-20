@echo off
echo ========================================
echo Push Updates to Live Site
echo ========================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if git repository exists
if not exist ".git" (
    echo ERROR: Not a Git repository!
    echo Run setup-github.bat first.
    pause
    exit /b 1
)

echo Current changes:
echo.
git status
echo.

echo Enter a description of your changes:
set /p COMMIT_MSG=Message: 

echo.
echo Adding all changes...
git add .

echo Creating commit...
git commit -m "%COMMIT_MSG%"

echo Pushing to GitHub...
git push

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Updates pushed to GitHub
    echo ========================================
    echo.
    echo Your site will update in 1-2 minutes at:
    echo https://luifigueroa.com
    echo.
) else (
    echo.
    echo ERROR: Push failed
    echo Check your internet connection and GitHub access.
    echo.
)

pause
