@echo off
title Push AvenBot docs to GitHub
setlocal EnableDelayedExpansion

cd /d "%~dp0"

echo.
echo ============================================================
echo  Push AvenBot docs to https://github.com/grkovshov/avenbot
echo ============================================================
echo.

REM --- 1. Check git ---
echo [1/6] Checking git installation...
where git >nul 2>nul
if errorlevel 1 (
    echo.
    echo [ERROR] Git is not installed on this computer.
    echo Download installer: https://git-scm.com/download/win
    echo Install with default options and run this file again.
    echo.
    goto :end
)
for /f "delims=" %%v in ('git --version') do echo     %%v

REM --- 2. Init repo ---
echo.
echo [2/6] Initializing repository...
git rev-parse --is-inside-work-tree >nul 2>nul
if errorlevel 1 (
    if exist ".git" (
        echo     Found broken .git folder, removing it...
        rmdir /s /q .git
    )
    git init -b main
    if errorlevel 1 goto :error
) else (
    echo     Repository already initialized.
)

REM --- 3. Add files ---
echo.
echo [3/6] Adding files to index...
git add .
if errorlevel 1 goto :error

REM --- 4. Commit ---
echo.
echo [4/6] Creating commit...
REM Set local identity if global is missing
git config user.email >nul 2>nul
if errorlevel 1 (
    echo     Setting local git identity...
    git config user.email "kovshovbox@gmail.com"
    git config user.name "grkovshov"
)
git commit -m "Initial Docusaurus setup for AvenBot docs"
if errorlevel 1 (
    REM Check if there are actually any commits now
    git rev-parse HEAD >nul 2>nul
    if errorlevel 1 (
        echo.
        echo [ERROR] Commit was not created. See message above.
        goto :end
    ) else (
        echo     No new changes to commit - using existing commit.
    )
)

REM --- 5. Remote ---
echo.
echo [5/6] Setting up remote origin...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/grkovshov/avenbot.git
if errorlevel 1 goto :error

REM --- 6. Push ---
echo.
echo [6/6] Pushing to GitHub...
echo     On first run a GitHub login window will open.
echo     Sign in via browser, or paste a Personal Access Token instead of password.
echo.
git push -u origin main --force
if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Possible reasons:
    echo  - GitHub authentication failed
    echo  - No internet connection
    echo  - Repository https://github.com/grkovshov/avenbot does not exist
    echo  - Wrong token / wrong username
    goto :end
)

echo.
echo ============================================================
echo  DONE! Opening repository in browser...
echo ============================================================
start "" https://github.com/grkovshov/avenbot
goto :end

:error
echo.
echo [ERROR] git command failed. See message above.
goto :end

:end
echo.
echo Press any key to close this window...
pause >nul
endlocal
