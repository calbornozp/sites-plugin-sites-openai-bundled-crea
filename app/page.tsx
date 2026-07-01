import type { ReactNode } from "react";

const services = [
  "Cumplimiento Legal",
  "Implementación DS44",
  "Ley Karin",
  "Automatización RRHH",
  "Auditorías Laborales",
  "Capacitación",
  "Consultoría Estratégica",
  "Inteligencia Artificial para RRHH",
];

const benefits = [
  "Reducir costos administrativos.",
  "Mayor cumplimiento legal.",
  "Prepararse para fiscalizaciones.",
  "Procesos más rápidos.",
  "Información en tiempo real.",
  "Menor riesgo de multas.",
  "Documentación siempre disponible.",
];

const virtualEmployees = [
  {
    name: "Ley Karin",
    summary:
      "Un asistente para gestionar documentación, protocolos, seguimiento y evidencia.",
    bullets: [
      "Gestión documental",
      "Protocolos",
      "Seguimiento",
      "Evidencia",
    ],
  },
  {
    name: "Prevención de Riesgos",
    summary:
      "Control permanente del DS44, matrices, documentación y cumplimiento.",
    bullets: ["Seguimiento DS44", "Matrices", "Documentación", "Cumplimiento"],
  },
  {
    name: "Remuneraciones",
    summary:
      "Automatización de cálculos, revisión, respaldo documental y alertas.",
    bullets: ["Automatización de cálculos", "Revisión", "Documentación", "Respaldo"],
  },
  {
    name: "Control de Turnos",
    summary:
      "Visibilidad sobre asistencia, jornadas, horas extra y desvíos críticos.",
    bullets: ["Asistencia", "Jornadas", "Horas extra", "Alertas"],
  },
  {
    name: "Inspector Laboral Interno",
    summary:
      "Auditorías permanentes, revisión documental y preparación para fiscalizaciones.",
    bullets: ["Auditorías permanentes", "Revisión documental", "Alertas legales", "Fiscalizaciones"],
  },
];

const steps = [
  "Diagnóstico gratuito.",
  "Identificación de oportunidades.",
  "Diseño del plan de automatización.",
  "Implementación.",
  "Acompañamiento.",
];

const faqs = [
  {
    question: "¿Debo cambiar mi software?",
    answer:
      "No necesariamente. Partimos desde lo que ya usa la empresa y buscamos automatizar sin romper procesos vigentes.",
  },
  {
    question: "¿Cuánto demora?",
    answer:
      "La primera implementación puede avanzar en menos de un mes, según el alcance y el estado actual de la documentación.",
  },
  {
    question: "¿Funciona con empresas pequeñas?",
    answer:
      "Sí. El modelo se adapta a organizaciones de distintos tamaños y niveles de madurez digital.",
  },
  {
    question: "¿Es compatible con mi sistema actual?",
    answer:
      "En la mayoría de los casos sí. La propuesta se diseña para convivir con el ecosistema de RRHH existente.",
  },
  {
    question: "¿Necesito conocimientos de IA?",
    answer:
      "No. Nosotros diseñamos, implementamos y acompañamos la adopción para que el equipo opere con seguridad.",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.8),transparent_30%),linear-gradient(180deg,#08111f_0%,#0f172a_42%,#f4f7fb_42%,#f4f7fb_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 py-8 lg:px-8">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-cyan-200">
              CUMPLIMIENTO LABORAL INTELIGENTE
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Consultoría laboral, RRHH e Inteligencia Artificial
            </p>
          </div>
          <a
            href="#contacto"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
          >
            Agendar reunión
          </a>
        </header>

        <section className="grid gap-12 pb-8 pt-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Reducimos hasta 70% de costos administrativos de RRHH
            </div>
            <div className="space-y-5">
              <SectionLabel>Consultora chilena</SectionLabel>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Reducimos costos, automatizamos procesos y disminuimos riesgos
                legales mediante Inteligencia Artificial.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Ayudamos a empresas a ordenar su gestión laboral, implementar
                DS44, fortalecer Ley Karin y transformar RRHH en una unidad
                estratégica con trazabilidad, control y datos en tiempo real.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Agenda una reunión
              </a>
              <a
                href="#diagnostico"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Solicita un diagnóstico gratuito
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["20+ años", "asesorando organizaciones"],
                ["5 asistentes", "virtuales especializados"],
                ["24/7", "automatización y alertas"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-slate-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-medium text-cyan-200">
                    Cinco empleados virtuales
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                    En menos de un mes
                  </p>
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  IA aplicada a RRHH
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {virtualEmployees.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-sm font-semibold text-slate-950">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-base font-semibold text-white">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {item.summary}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.bullets.map((bullet) => (
                            <span
                              key={bullet}
                              className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200"
                            >
                              {bullet}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-slate-200/80 bg-white p-8 text-slate-950 shadow-[0_20px_80px_rgba(15,23,42,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionLabel>Antes y después</SectionLabel>
            <h2 className="max-w-md text-3xl font-semibold tracking-tight">
              ¿Por qué seguir haciendo manualmente lo que la IA puede hacer por
              usted?
            </h2>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Muchas empresas siguen operando con planillas, correos y
              documentos dispersos. Eso multiplica errores, retrabajos y
              exposición a multas. Nosotros ordenamos esa complejidad y la
              convertimos en un sistema vivo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-600">
                Antes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-900">
                {["Planillas Excel", "Documentos dispersos", "Correos", "Errores", "Multas", "Retrabajo"].map((item) => (
                  <li key={item} className="rounded-2xl bg-white/80 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
                Después
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-900">
                {[
                  "Procesos automatizados",
                  "IA trabajando 24/7",
                  "Documentos centralizados",
                  "Cumplimiento permanente",
                  "Reportes automáticos",
                  "Indicadores en tiempo real",
                ].map((item) => (
                  <li key={item} className="rounded-2xl bg-white/80 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <SectionLabel>Fundador</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Carlos Albornoz
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Empresario, psicólogo organizacional, académico y consultor de
              empresas. Más de 20 años asesorando organizaciones en gestión de
              personas, legislación laboral, liderazgo y desarrollo
              organizacional.
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-300">
              Su experiencia combina psicología organizacional, dirección de
              empresas, legislación laboral aplicada al negocio y formación de
              líderes, con foco en integrar Inteligencia Artificial para
              transformar áreas administrativas en unidades estratégicas.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Propuesta de valor
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-white">
              Mayor cumplimiento, menos carga administrativa y trazabilidad real
              para la toma de decisiones.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Mayor cumplimiento legal",
                "Menor carga administrativa",
                "Menos errores",
                "Menor exposición a multas",
                "Procesos documentados",
                "Información en tiempo real",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-slate-100 p-8 text-slate-950">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <SectionLabel>Servicios</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight">
                Una consultora, múltiples frentes de soporte
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Cubrimos cumplimiento legal, prevención, automatización, formación
              y estrategia para que la empresa avance con una sola hoja de ruta.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                  IA
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {service}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Diseñado para mejorar cumplimiento, ordenar evidencia y
                  acelerar la ejecución sin fricción operativa.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30">
            <SectionLabel>Beneficios</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              El resultado es menos riesgo y más control.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div id="diagnostico" className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Un proceso claro y sin complicaciones
            </h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold">{step}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Cada fase se diseña para avanzar con orden y mostrar
                      resultados medibles desde el inicio.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <SectionLabel>Testimonios</SectionLabel>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              "Espacio para testimonios de clientes.",
              "Casos reales de reducción de carga administrativa.",
              "Resultados en cumplimiento, orden documental y control.",
            ].map((item) => (
              <article
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-slate-200"
              >
                <div className="text-3xl leading-none text-cyan-200">“</div>
                <p className="mt-3 text-base leading-7">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-950 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Preguntas frecuentes</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Resolvemos las dudas más comunes antes de partir
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 open:bg-white"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-950">
                  {faq.question}
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="rounded-[2.25rem] border border-cyan-300/20 bg-gradient-to-r from-cyan-300 to-sky-100 p-8 text-slate-950 shadow-[0_20px_80px_rgba(34,211,238,0.18)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <SectionLabel>Contacto</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight">
                Descubra cuánto podría ahorrar automatizando su área de
                Recursos Humanos.
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-700">
                Agende una reunión y conozca cómo su empresa puede contar con
                cinco asistentes virtuales especializados en cumplimiento
                laboral en menos de un mes.
              </p>
            </div>
            <a
              href="mailto:contacto@carlosalbornoz.cl"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Agendar reunión
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
import type { ReactNode } from "react";
