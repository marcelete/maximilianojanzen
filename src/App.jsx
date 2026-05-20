import { Boxes } from './components/ui/background-boxes'
import { AIChatBot } from './components/ui/ai-chat'
import { Marquee } from './components/ui/marquee'

const testimonials = [
  {
    name: 'Equipo Técnico',
    role: 'Ministerio de Seguridad',
    comment: 'Profesional altamente capacitado con excelentes habilidades en DevOps y seguridad de la información',
    initials: 'ET'
  },
  {
    name: 'Gestor de Proyectos',
    role: 'Infraestructura Federal',
    comment: 'Excelente capacidad de liderazgo y resolución de problemas complejos bajo presión',
    initials: 'GP'
  },
  {
    name: 'Director de Seguridad',
    role: 'Operaciones Críticas',
    comment: 'Especialista en ISO 27001 con profundo conocimiento de mitigación de riesgos',
    initials: 'DS'
  },
]

export default function App() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Header con Background Animado */}
      <header className="relative min-h-96 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-0">
          <Boxes className="opacity-40" />
        </div>

        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-slate-950 z-10"></div>

        <div className="relative z-20 text-center px-4 py-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maximiliano Janzen
          </h1>
          <p className="text-xl text-gray-300 mb-2">Senior DevOps Engineer & Cybersecurity Specialist</p>
          <p className="text-lg text-gray-400 mb-6">15+ años de experiencia en infraestructura Cloud, AWS y Gestión de Seguridad</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:Maximilianojanzen@gmail.com" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">📧 Email</a>
            <a href="tel:+541164703211" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition">📱 Llamar</a>
            <a href="https://www.linkedin.com/in/maximiliano-janzen-556a5b21b/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg transition">🔗 LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="relative z-20">
        {/* Perfil */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Perfil Profesional</h2>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <p className="text-lg text-gray-200 leading-relaxed">
              Profesional en Ingeniería en Sistemas con más de 15 años de experiencia liderando la administración de infraestructura,
              entornos Cloud (AWS) y DevOps. Especialista en Ciberseguridad y Gestión de la Seguridad de la Información bajo la norma
              ISO 27001, con amplia trayectoria en la auditoría de bases de datos críticas y mitigación de riesgos.
            </p>
          </div>
        </section>

        {/* Testimonios con Marquee */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-blue-400 text-center">Recomendaciones Profesionales</h2>
          <div className="relative h-64 overflow-hidden bg-slate-800 border border-slate-700 rounded-lg">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-800 to-transparent z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-800 to-transparent z-10"></div>

            <Marquee vertical pauseOnHover repeat={2} className="h-full">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="min-w-max bg-slate-700 border border-slate-600 rounded-lg p-6 w-80 hover:border-blue-500 transition">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm">"{testimonial.comment}"</p>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Chat IA */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <AIChatBot />
        </section>

        {/* Habilidades */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillCard title="DevOps & Cloud" skills={['Git', 'CI/CD', 'Terraform', 'Kubernetes', 'Docker', 'AWS', 'Lambda', 'EC2', 'CloudFormation']} />
            <SkillCard title="Ciberseguridad" skills={['ISO 27001', 'Pentesting', 'Ethical Hacking', 'Análisis de Vulnerabilidades', 'Gestión de Incidentes', 'Cifrado']} />
            <SkillCard title="Bases de Datos" skills={['Oracle', 'SQL', 'Datawarehouse', 'Microsoft Access', 'Server']} />
            <SkillCard title="Sistemas Operativos" skills={['Linux', 'Windows', 'UNIX', 'Bash']} />
          </div>
        </section>

        {/* Experiencia */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Experiencia Laboral</h2>
          <div className="space-y-6">
            <ExperienceCard
              company="Ministerio de Seguridad De la Nación Argentina"
              period="2012 - Actual"
              role="Subsecretaria de Investigación Criminal (2023 - Actual)"
              highlights={[
                'Sistema Federal de Comunicaciones Policiales (SIFCOP)',
                'DevOps y administración de Sistemas en Nube (AWS)',
                'Implementación de Norma ISO 27001',
                'Auditoría de Bases de datos críticas'
              ]}
            />
            <ExperienceCard
              company="Hewlett Packard"
              period="2006 - 2011"
              role="Administrador junior Middleware Software"
              highlights={[
                'Apache, Tomcat, JBOSS, WebSphere, Oracle',
                'Scripting y automatización de tareas',
                'Aplicación de parches y estándares de IPaaS'
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 mt-16 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p className="mb-4">Contacto: <strong>Maximilianojanzen@gmail.com</strong> • <strong>+54 11 6470 3211</strong></p>
            <p className="text-sm">© 2024 Maximiliano Janzen. Curriculum Vitae Interactivo.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

function SkillCard({ title, skills }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <h3 className="text-xl font-bold text-purple-300 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-sm text-blue-300 hover:bg-slate-600 transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ company, period, role, highlights }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white">{company}</h3>
        <p className="text-gray-400">{period}</p>
      </div>
      <div className="space-y-3 text-gray-300">
        <p className="font-semibold text-blue-300">{role}</p>
        <ul className="list-disc list-inside ml-4 text-sm space-y-1">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
