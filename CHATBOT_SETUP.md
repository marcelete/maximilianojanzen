# 🤖 Setup del Chatbot Inteligente con IA

Este curriculum incluye un **chatbot inteligente basado en IA** que puede responder preguntas sobre la experiencia, habilidades y trayectoria profesional de Maximiliano Janzen.

## 🚀 Requisitos

- Python 3.8 o superior
- Una API key de Anthropic (Claude API)

## 📦 Instalación

### 1. Instalar dependencias

```bash
pip install anthropic
```

### 2. Configurar API Key de Anthropic

Obtén tu API key gratis en: https://console.anthropic.com/

Luego, establece la variable de entorno:

**Linux/Mac:**
```bash
export ANTHROPIC_API_KEY='tu-clave-aqui'
```

**Windows (CMD):**
```cmd
set ANTHROPIC_API_KEY=tu-clave-aqui
```

**Windows (PowerShell):**
```powershell
$env:ANTHROPIC_API_KEY='tu-clave-aqui'
```

O crea un archivo `.env` en el directorio raíz:
```
ANTHROPIC_API_KEY=tu-clave-aqui
```

### 3. Iniciar el servidor

```bash
python3 chatbot_server.py
```

Deberías ver:
```
🚀 Servidor de chatbot iniciado en puerto 8000
📝 Endpoint: http://localhost:8000/api/chat
💬 Listos para responder preguntas sobre Maximiliano...
```

### 4. Abrir el curriculum

En otra terminal, abre el archivo `index.html`:

```bash
# Linux/Mac
open index.html

# Windows
start index.html

# O simplemente abre el archivo en tu navegador
```

## 💬 Cómo Usar el Chatbot

1. **Escribe una pregunta** sobre Maximiliano en el textarea del chat
2. **Presiona Enter o haz clic en "Enviar Pregunta"**
3. **El chatbot responderá** basándose en su curriculum

### Ejemplos de preguntas:

- "¿Cuál es tu experiencia más relevante?"
- "¿Qué sabes sobre AWS y DevOps?"
- "¿Tienes experiencia con Kubernetes?"
- "¿Cuál es tu experiencia en ciberseguridad?"
- "¿Qué certificaciones tienes?"
- "¿Trabajaste con ISO 27001?"
- "¿Cuál es tu experiencia en administración de bases de datos?"

## 🔧 Personalización

### Cambiar el puerto

En `chatbot_server.py`, modifica la línea final:

```python
if __name__ == '__main__':
    run_server(9000)  # Cambiar 8000 por el puerto que desees
```

Y en `index.html`, actualiza la URL del servidor en la función `sendQuestion()`:

```javascript
const response = await fetch('http://localhost:9000/api/chat', {
```

### Actualizar el contexto del curriculum

Si el curriculum de Maximiliano cambia, actualiza la constante `CV_CONTEXT` en `chatbot_server.py` con la nueva información.

## 🐛 Solución de Problemas

### Error: "Error al conectar con el servidor de IA"

- Verifica que el servidor está corriendo: `python3 chatbot_server.py`
- Asegúrate de que el puerto 8000 está disponible
- Verifica que ANTHROPIC_API_KEY está configurado correctamente

### Error: "ANTHROPIC_API_KEY not found"

- Verifica que la variable de entorno está configurada
- Reinicia el terminal o la IDE después de configurar la variable

### El chatbot responde lentamente

- Es normal en la primera consulta (tarda ~2-3 segundos)
- Las siguientes consultas son más rápidas gracias al historial de conversación
- La API de Anthropic es gratuita para el desarrollo

## 📝 Características del Chatbot

✅ **Conversación con historial** - Recuerda el contexto de preguntas anteriores
✅ **Respuestas personalizadas** - Basadas en el curriculum real de Maximiliano
✅ **Múltiples idiomas** - Responde en español y entiende otras lenguas
✅ **Interfaz amigable** - Integrada en el curriculum HTML
✅ **Sin costo** - Usa el API gratuito de Anthropic

## 🌐 Desplegar Online

Para desplegar este curriculum con chatbot en producción:

### Opción 1: Railway.app (Recomendado)

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Desplegar
railway up
```

### Opción 2: Heroku

```bash
# Instalar Heroku CLI
npm install -g heroku

# Login
heroku login

# Crear app
heroku create nombre-de-tu-app

# Desplegar
git push heroku main
```

### Opción 3: Replit

1. Copia el repositorio a Replit
2. Configura ANTHROPIC_API_KEY en los secrets
3. Ejecuta `python3 chatbot_server.py`
4. El servidor estará disponible en la URL de Replit

## 📞 Soporte

Si tienes problemas:

1. Verifica los logs de la consola (F12 en el navegador)
2. Revisa la salida de `python3 chatbot_server.py`
3. Asegúrate de que ANTHROPIC_API_KEY está configurado

---

¡Disfruta del chatbot inteligente! 🎉
