@echo off
title Vishal Portfolio Server
echo ========================================================
echo   Starting Vishal's Portfolio Web Server...
echo ========================================================
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
