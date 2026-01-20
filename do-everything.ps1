# PowerShell script to automate GitHub setup
# Run this AFTER installing Git and creating GitHub repo

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Automated GitHub Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
$gitInstalled = Get-Command git -ErrorAction SilentlyContinue

if (-not $gitInstalled) {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "After installation, close and reopen this terminal, then run this script again." -ForegroundColor Yellow
    Write-Host ""
    pause
    exit
}

Write-Host "✓ Git is installed: " -NoNewline
git --version
Write-Host ""

# Check if already initialized
if (Test-Path ".git") {
    Write-Host "Git repository already initialized." -ForegroundColor Green
} else {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Repository initialized" -ForegroundColor Green
}

Write-Host ""

# Get user info
Write-Host "Enter your information:" -ForegroundColor Cyan
Write-Host ""

$gitName = Read-Host "Your name (for commits)"
$gitEmail = Read-Host "Your email (GitHub account email)"
$githubUsername = Read-Host "Your GitHub username"
$repoName = Read-Host "GitHub repository name (default: portfolio)" 
if ([string]::IsNullOrWhiteSpace($repoName)) { $repoName = "portfolio" }

Write-Host ""
Write-Host "Configuring Git..." -ForegroundColor Yellow
git config user.name "$gitName"
git config user.email "$gitEmail"
Write-Host "✓ Git configured" -ForegroundColor Green

Write-Host ""
Write-Host "Adding all files..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files added" -ForegroundColor Green

Write-Host ""
Write-Host "Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - Hardware & IoT portfolio website"
Write-Host "✓ Commit created" -ForegroundColor Green

Write-Host ""
Write-Host "Setting default branch to 'main'..." -ForegroundColor Yellow
git branch -M main
Write-Host "✓ Branch set to main" -ForegroundColor Green

Write-Host ""
Write-Host "Connecting to GitHub..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/$githubUsername/$repoName.git"

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "Remote 'origin' already exists. Updating..." -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
} else {
    git remote add origin $remoteUrl
}
Write-Host "✓ Connected to: $remoteUrl" -ForegroundColor Green

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "READY TO PUSH TO GITHUB" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "When you push, GitHub will ask you to sign in:" -ForegroundColor Yellow
Write-Host "  - Use your GitHub username/password" -ForegroundColor White
Write-Host "  - OR use a Personal Access Token (more secure)" -ForegroundColor White
Write-Host ""
Write-Host "To create a token: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host "  → Generate new token (classic)" -ForegroundColor White
Write-Host "  → Select 'repo' permission" -ForegroundColor White
Write-Host "  → Copy token and use as password" -ForegroundColor White
Write-Host ""
$ready = Read-Host "Ready to push? (y/n)"

if ($ready -eq 'y' -or $ready -eq 'Y') {
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    Write-Host "(You'll be prompted to sign in)" -ForegroundColor Yellow
    Write-Host ""
    
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Green
        Write-Host "SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
        Write-Host "========================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Next step: Deploy to Vercel" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Go to: https://vercel.com" -ForegroundColor White
        Write-Host "2. Sign up with GitHub (one click)" -ForegroundColor White
        Write-Host "3. Click 'Add New...' → 'Project'" -ForegroundColor White
        Write-Host "4. Find and import: $githubUsername/$repoName" -ForegroundColor White
        Write-Host "5. Click 'Deploy'" -ForegroundColor White
        Write-Host ""
        Write-Host "Your site will be live in 30 seconds!" -ForegroundColor Green
        Write-Host ""
        Write-Host "Repository URL: https://github.com/$githubUsername/$repoName" -ForegroundColor Cyan
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "========================================" -ForegroundColor Red
        Write-Host "Push failed - Check your credentials" -ForegroundColor Red
        Write-Host "========================================" -ForegroundColor Red
        Write-Host ""
        Write-Host "Common issues:" -ForegroundColor Yellow
        Write-Host "  - Repository doesn't exist on GitHub" -ForegroundColor White
        Write-Host "  - Wrong username/repo name" -ForegroundColor White
        Write-Host "  - Authentication failed" -ForegroundColor White
        Write-Host ""
        Write-Host "Try again or use GitHub Desktop for easier authentication" -ForegroundColor Yellow
        Write-Host ""
    }
} else {
    Write-Host ""
    Write-Host "Setup complete locally. Run 'git push -u origin main' when ready." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
