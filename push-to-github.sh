#!/bin/bash
# Script para hacer push de los cambios a GitHub

echo "🚀 Haciendo push de los cambios a GitHub..."
echo ""

# Verificar que estamos en la rama correcta
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "claude/maximiliano-resume-html-Nf7cN" ]; then
    echo "❌ Error: No estás en la rama correcta"
    echo "Rama actual: $BRANCH"
    echo "Rama esperada: claude/maximiliano-resume-html-Nf7cN"
    exit 1
fi

# Mostrar commits pendientes
echo "📋 Commits pendientes:"
git log --oneline origin/claude/maximiliano-resume-html-Nf7cN..HEAD 2>/dev/null || git log --oneline -5

echo ""
echo "🔐 Haciendo push..."

# Hacer push
if git push -u origin claude/maximiliano-resume-html-Nf7cN; then
    echo ""
    echo "✅ ¡Push exitoso!"
    echo ""
    echo "📍 URL de tu repositorio:"
    echo "https://github.com/marcelete/maximilianojanzen"
    echo ""
    echo "🌳 Rama:"
    echo "claude/maximiliano-resume-html-Nf7cN"
else
    echo ""
    echo "❌ Error al hacer push"
    echo ""
    echo "💡 Posibles soluciones:"
    echo "1. Verifica tu conexión a internet"
    echo "2. Asegúrate de tener permisos en el repositorio"
    echo "3. Si necesitas usar SSH: git remote set-url origin git@github.com:marcelete/maximilianojanzen.git"
    echo "4. O si necesitas usar un token: git remote set-url origin https://USERNAME:TOKEN@github.com/marcelete/maximilianojanzen.git"
    exit 1
fi
