import type { ReactNode } from "react";

const services = [
  "Cumplimiento Legal",
  "Implementacion DS44",
  "Ley Karin",
  "Automatizacion RRHH",
  "Auditorias Laborales",
  "Capacitacion",
  "Consultoria Estrategica",
  "IA para RRHH",
];

const benefits = [
  "Menos carga administrativa",
  "Mayor cumplimiento legal",
  "Preparacion para fiscalizaciones",
  "Documentacion centralizada",
  "Menor riesgo de multas",
  "Informacion en tiempo real",
];

const virtualRoles = [
  {
    title: "Ley Karin",
    description:
      "Gestion documental, protocolos, seguimiento de casos y evidencia trazable.",
  },
  {
    title: "Prevencion de Riesgos",
    description:
      "Seguimiento DS44, matrices, controles y orden documental permanente.",
  },
  {
    title: "Remuneraciones",
    description:
      "Automatizacion de calculos, revision, respaldo y control de alertas.",
  },
  {
    title: "Control de Turnos",
    description:
      "Asistencia, jornadas, horas extra y alertas sobre desajustes operativos.",
  },
  {
    title: "Inspector Interno",
    description:
      "Auditorias permanentes, revision documental y preparacion para fiscalizaciones.",
  },
];

const steps = [
  "Diagnostico gratuito",
  "Oportunidades de automatizacion",
  "Diseno del plan",
  "Implementacion",
  "Acompanamiento",
];

const faqs = [
  {
    question: "Debo cambiar mi software?",
    answer:
      "No necesariamente. Trabajamos sobre la realidad existente y ordenamos la operacion sin forzar reemplazos innecesarios.",
  },
  {
    question: "Cuanto demora?",
    answer:
      "La primera puesta en marcha puede avanzar en menos de un mes, segun el alcance y la madurez del area.",
  },
  {
    question: "Sirve para empresas pequenas?",
    answer:
      "Si. El enfoque se adapta al tamano de la organizacion y a su nivel de digitalizacion.",
  },
  {
    question: "Es compatible con mi sistema actual?",
    answer:
      "En la mayoria de los casos, si. La propuesta se diseña para convivir con el ecosistema actual.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef1f4_0%,#f7f5f0_28%,#f7f5f0_100%)] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-cyan-700">
              CUMPLIMIENTO LABORAL INTELIGENTE
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Consultoria laboral, RRHH e Inteligencia Artificial
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {["Servicios", "Metodo", "Equipo", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 transition hover:border-slate-300 hover:bg-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800">
              Reducimos hasta 70% de costos administrativos de RRHH
            </div>

            <div className="space-y-5">
              <Eyebrow>Consultora chilena</Eyebrow>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.2rem] lg:leading-[0.95]">
                Cumplimiento laboral inteligente para empresas que necesitan
                orden, velocidad y control.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Ayudamos a implementar DS44, fortalecer Ley Karin y transformar
                RRHH con procesos documentados, automatizacion e Inteligencia
                Artificial.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contacto"
                className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Agenda una reunion
              </a>
              <a
                href="#metodo"
                className="rounded-full border border-slate-300 bg-white/90 px-6 py-4 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                Solicita un diagnostico gratuito
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["20+ anos", "asesorando organizaciones"],
                ["5 roles", "virtuales especializados"],
                ["24/7", "automatizacion y alertas"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-2xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="absolute right-6 top-16 h-24 w-24 rounded-full bg-slate-300/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <Eyebrow>Cinco empleados virtuales</Eyebrow>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">
                    En menos de un mes
                  </p>
                </div>
                <div className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
                  IA aplicada a RRHH
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {virtualRoles.map((role, index) => (
                  <article
                    key={role.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h2 className="text-base font-semibold text-slate-950">
                          {role.title}
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {role.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Antes y despues"
            title="De la operacion manual a un sistema de cumplimiento vivo."
            description="Muchos equipos siguen trabajando con planillas, correos y documentos dispersos. Eso aumenta los errores, eleva el costo administrativo y deja huecos de trazabilidad."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                Antes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-950">
                {["Planillas Excel", "Documentos dispersos", "Correos", "Errores", "Multas", "Retrabajo"].map((item) => (
                  <li key={item} className="rounded-2xl bg-white/80 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Despues
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
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

        <section id="servicios" className="space-y-8 pt-16">
          <SectionHeading
            eyebrow="Servicios"
            title="Una consultora, múltiples frentes de soporte."
            description="Cubrimos cumplimiento, prevencion, automatizacion, formacion y estrategia con una sola hoja de ruta."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {service}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Diseñado para mejorar cumplimiento, ordenar evidencia y
                  acelerar la ejecucion sin friccion operativa.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pt-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div
            id="metodo"
            className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_90px_rgba(15,23,42,0.24)]"
          >
            <div className="max-w-3xl space-y-4">
              <Eyebrow>Beneficios</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Menos riesgo y mas control.
              </h2>
              <p className="text-base leading-8 text-slate-300">
                El resultado es una operacion con menos carga administrativa,
                mejor trazabilidad y un equipo que puede enfocarse en decisiones
                de valor.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
            <SectionHeading
              eyebrow="Como trabajamos"
              title="Un proceso corto, claro y medible."
              description="Cada fase se diseña para avanzar con orden, asegurar adopcion y mostrar resultados medibles desde el inicio."
            />

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
                    <p className="text-base font-semibold text-slate-950">
                      {step}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Cada etapa ordena la implementacion y deja una siguiente
                      decision clara.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="grid gap-8 pt-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Fundador"
              title="Carlos Albornoz."
              description="Empresario, psicologo organizacional, academico y consultor de empresas. Mas de 20 anos asesorando organizaciones en gestion de personas, legislacion laboral, liderazgo y desarrollo organizacional."
            />
            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)]">
              <p className="text-base leading-8 text-slate-700">
                Su experiencia combina psicologia organizacional, direccion de
                empresas, legislacion laboral aplicada al negocio y formacion
                de lideres, con foco en integrar Inteligencia Artificial para
                transformar areas administrativas en unidades estrategicas.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8">
            <Eyebrow>Prueba social</Eyebrow>
            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {[
                "Espacio para testimonios de clientes.",
                "Casos de reduccion de carga administrativa.",
                "Resultados en cumplimiento y control.",
              ].map((item) => (
                <article
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="text-3xl leading-none text-cyan-700">“</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 pt-16 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos las dudas mas comunes antes de partir."
            description="Nos interesa que el equipo entienda la propuesta antes de tomar una decision."
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.03)]"
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
          className="mt-16 rounded-[2.25rem] border border-cyan-200 bg-[linear-gradient(135deg,#ffffff_0%,#f0fbff_55%,#e2f6ff_100%)] p-8 shadow-[0_24px_90px_rgba(14,165,233,0.12)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <Eyebrow>Contacto</Eyebrow>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Descubra cuanto podria ahorrar automatizando su area de Recursos
                Humanos.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-slate-600">
                Agende una reunion y conozca como su empresa puede contar con
                cinco asistentes virtuales especializados en cumplimiento
                laboral en menos de un mes.
              </p>
            </div>

            <a
              href="mailto:contacto@carlosalbornoz.cl"
              className="inline-flex rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Agendar reunion
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
