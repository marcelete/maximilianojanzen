# 📦 CÓMO CARGAR EL ZIP EN MAIN

## 🎯 Pasos Simples

### 1️⃣ Descomprime el ZIP
```bash
unzip curriculum-completo-maxi.zip
```

### 2️⃣ Navega a tu repositorio
```bash
cd tu-carpeta-del-repo
```

### 3️⃣ Copia los archivos del ZIP
```bash
# Copiar todos los archivos descomprimidos a tu repositorio
cp -r /ruta/del/zip/* .
```

### 4️⃣ Verifica que estés en main
```bash
git branch
```

Si no estás en main:
```bash
git checkout main
```

### 5️⃣ Agrega todos los cambios
```bash
git add .
```

### 6️⃣ Haz commit
```bash
git commit -m "feat: Add complete interactive resume with AI chatbot

- Integrate Maximiliano's CV photo in header
- Add intelligent AI chatbot with Claude API
- Create Python backend server (chatbot_server.py)
- Add conversation history support
- Beautiful UI with suggested questions
- Complete documentation and setup guides
- Responsive design with Tailwind CSS
- React components with animations"
```

### 7️⃣ Push a main
```bash
git push -u origin main
```

---

## ✅ Archivos que se Cargarán

```
✅ index.html                 - CV interactivo con foto y chatbot
✅ chatbot_server.py          - Backend IA
✅ foto-cv.jpg                - Foto de Maximiliano
✅ README.md                  - Documentación
✅ CHATBOT_SETUP.md          - Guía del chatbot
✅ PUSH_INSTRUCTIONS.md      - Instrucciones previas
✅ FINAL_PUSH.md             - Guía de push
✅ package.json              - Dependencias
✅ tailwind.config.js        - Config Tailwind
✅ vite.config.js            - Config Vite
✅ src/                      - Componentes React
✅ push-to-github.sh         - Script Linux/Mac
✅ push-to-github.bat        - Script Windows
```

---

## 🔥 Versión Rápida (si tienes git configurado)

```bash
# Descomprime
unzip curriculum-completo-maxi.zip

# Entra a tu repo
cd tu-repo

# Copia los archivos
cp -r /path/to/unzip/* .

# Commit y push en main
git add . && \
git commit -m "feat: Add complete interactive resume with AI chatbot" && \
git push origin main
```

---

## 🎉 ¡Eso es todo!

Tu repositorio ahora tendrá:
- 📸 Foto profesional del CV
- 🤖 Chatbot inteligente con IA
- ✨ Diseño moderno y animado
- 📱 Totalmente responsivo
- 🎨 Componentes hermosos

---

## 💡 Para Usar el Chatbot Localmente

```bash
# Instalar dependencias
pip install anthropic

# Configurar API key
export ANTHROPIC_API_KEY='tu-clave-aqui'

# Iniciar servidor
python3 chatbot_server.py

# Abrir en navegador
open index.html
```

---

**¡Listo! Tu curriculum está en main.** 🚀
