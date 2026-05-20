@echo off
REM Script para hacer push de los cambios a GitHub desde Windows

echo.
echo 🚀 Haciendo push de los cambios a GitHub...
echo.

REM Verificar que estamos en la rama correcta
for /f "tokens=*" %%i in ('git branch --show-current') do set BRANCH=%%i

if not "%BRANCH%"=="claude/maximiliano-resume-html-Nf7cN" (
    echo ❌ Error: No estás en la rama correcta
    echo Rama actual: %BRANCH%
    echo Rama esperada: claude/maximiliano-resume-html-Nf7cN
    pause
    exit /b 1
)

REM Mostrar commits pendientes
echo 📋 Commits pendientes:
git log --oneline -5

echo.
echo 🔐 Haciendo push...
echo.

REM Hacer push
git push -u origin claude/maximiliano-resume-html-Nf7cN

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ ¡Push exitoso!
    echo.
    echo 📍 URL de tu repositorio:
    echo https://github.com/marcelete/maximilianojanzen
    echo.
    echo 🌳 Rama:
    echo claude/maximiliano-resume-html-Nf7cN
    echo.
    pause
) else (
    echo.
    echo ❌ Error al hacer push
    echo.
    echo 💡 Posibles soluciones:
    echo 1. Verifica tu conexión a internet
    echo 2. Asegúrate de tener permisos en el repositorio
    echo 3. Si necesitas usar SSH: git remote set-url origin git@github.com:marcelete/maximilianojanzen.git
    echo 4. O si necesitas usar un token: git remote set-url origin https://USERNAME:TOKEN@github.com/marcelete/maximilianojanzen.git
    echo.
    pause
    exit /b 1
)
