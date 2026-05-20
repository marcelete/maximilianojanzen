#!/usr/bin/env python3
"""
Servidor de chatbot inteligente para curriculum de Maximiliano Janzen
Usa Claude API para responder preguntas sobre el CV basándose en el contexto
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs
import json
import os
from anthropic import Anthropic

# Contexto del curriculum de Maximiliano
CV_CONTEXT = """
INFORMACIÓN PROFESIONAL DE MAXIMILIANO JANZEN

DATOS PERSONALES:
- Email: Maximilianojanzen@gmail.com
- Teléfono: +54 11 6470 3211
- LinkedIn: https://www.linkedin.com/in/maximiliano-janzen-556a5b21b/

PERFIL PROFESIONAL:
Profesional en Ingeniería en Sistemas con más de 15 años de experiencia liderando la administración de infraestructura,
entornos Cloud (AWS) y DevOps. Especialista en Ciberseguridad y Gestión de la Seguridad de la Información bajo la norma
ISO 27001, con amplia trayectoria en la auditoría de bases de datos críticas y mitigación de riesgos.
Apasionado por la automatización de procesos, la resiliencia de sistemas y la implementación de buenas prácticas tecnológicas.

EXPERIENCIA LABORAL:
1. Ministerio de Seguridad De la Nación Argentina (2012-Actual)
   - Subsecretaria de Investigación Criminal (2023-Actual)
     * Sistema Federal de Comunicaciones Policiales (SIFCOP)
     * Tareas de DevOps y administrador de Sistemas en Nube (AWS)
     * Análisis de estándar para la seguridad de la información
     * Implementación de Norma ISO 27001
     * Auditoría y análisis de Bases de datos críticas de la Seguridad Nacional

   - Dir. Nac. De Investigaciones Federales (2018-2023)
     * Bases de datos: Oracle, Datawarehouse, Server, Microsoft Access
     * Administrador de infraestructura de los sistemas

   - Dirección Nacional de Policía científica (2012-2018)
     * Tareas de administrador de infraestructura

2. Hewlett Packard (2006-2011)
   - Administrador junior Middleware Software
   - Apache, Tomcat, JBOSS, WebSphere, Oracle y MQ Series
   - Scripting, automatización de tareas y aplicación de parches
   - Estándares y buenas prácticas de IPaaS

EDUCACIÓN:
- Ingeniería en Sistemas - Universidad Católica de Salta (UCA) 2002-2006 (Universitario incompleto)
- Secundario Completo - Instituto Álvarez Condarco 1996-2001

CERTIFICACIONES (2024):
- Certificación IRAM-ISO/IEC 27001/02 (Convenio Min. de Seg. Nacional)
- Cisco Networking Connect
- Certiprof - Cybersecurity Awareness
- Certificado Profesional de Google Ciberseguridad
- SQL Administration (2009)
- First Certificate in English (FCE) - Cambridge (2002)

HABILIDADES TÉCNICAS:
DevOps & Cloud: Git, CI/CD, Terraform, Kubernetes, Docker, AWS (EC2, VPC, Elastic Beanstalk, IAM, Route53, CloudFront,
ECS, CodeCommit, CodeBuild, CodePipeline, CloudFormation, Lambda, Direct Connect), Linux, Bash, Infrastructure as Code

Ciberseguridad: Gestión de Seguridad de la Información, ISO 27001, Análisis de Vulnerabilidades, Pentesting,
Ethical Hacking, Gestión de Incidentes de Seguridad, Cifrado de Datos, Análisis de Amenazas, Gestión de Parches,
Protocolos y Seguridad de Redes

Bases de Datos: Oracle, SQL, Datawarehouse, Microsoft Access, Server

Sistemas Operativos: Windows, Linux, UNIX

HABILIDADES BLANDAS:
- Gestión de Crisis y Resiliencia
- Comunicación Interfuncional
- Pensamiento Analítico
- Adaptabilidad Tecnológica

IDIOMAS:
- Inglés: Nivel Intermedio-Avanzado (B2)
"""

# Cliente de Anthropic
client = Anthropic()
conversation_history = []

def get_ai_response(user_message: str) -> str:
    """Obtiene respuesta de Claude sobre preguntas del curriculum"""

    # Agregar el mensaje del usuario al historial
    conversation_history.append({
        "role": "user",
        "content": user_message
    })

    # Crear el mensaje del sistema
    system_prompt = f"""Eres un asistente inteligente que responde preguntas sobre el curriculum de Maximiliano Janzen,
un profesional con más de 15 años de experiencia en DevOps, Cloud Computing y Ciberseguridad.

Aquí está la información completa de su curriculum:

{CV_CONTEXT}

Tu objetivo es:
1. Responder preguntas sobre la experiencia, habilidades y educación de Maximiliano de forma clara y profesional
2. Destacar logros relevantes y conexiones entre diferentes áreas de experiencia
3. Si la pregunta no está relacionada con el curriculum, puedes responder brevemente pero redirige la conversación
4. Ser amable, profesional y conciso
5. Responder siempre en español

Responde de forma natural y útil."""

    # Llamar a Claude
    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1024,
        system=system_prompt,
        messages=conversation_history
    )

    # Extraer la respuesta
    assistant_message = response.content[0].text

    # Agregar la respuesta del asistente al historial
    conversation_history.append({
        "role": "assistant",
        "content": assistant_message
    })

    return assistant_message


class ChatHandler(BaseHTTPRequestHandler):
    """Manejador HTTP para el servidor de chatbot"""

    def do_POST(self):
        """Maneja POST requests"""
        if self.path == '/api/chat':
            # Leer el cuerpo de la solicitud
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')

            try:
                data = json.loads(body)
                user_message = data.get('message', '').strip()

                if not user_message:
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Mensaje vacío"}).encode())
                    return

                # Obtener respuesta de IA
                ai_response = get_ai_response(user_message)

                # Enviar respuesta
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()

                response_data = {"response": ai_response}
                self.wfile.write(json.dumps(response_data).encode())

            except json.JSONDecodeError:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "JSON inválido"}).encode())
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        """Maneja CORS preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        """Suprime los logs de acceso por defecto"""
        pass


def run_server(port=8000):
    """Inicia el servidor de chatbot"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, ChatHandler)
    print(f"🚀 Servidor de chatbot iniciado en puerto {port}")
    print(f"📝 Endpoint: http://localhost:{port}/api/chat")
    print(f"💬 Listos para responder preguntas sobre Maximiliano...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✋ Servidor detenido")
        httpd.server_close()


if __name__ == '__main__':
    run_server(8000)
