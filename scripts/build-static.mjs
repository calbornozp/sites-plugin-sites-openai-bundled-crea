import { mkdir, readFile, writeFile, copyFile, rm } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");

const CONTACT_EMAIL = "contacto@htc.lat";
const WHATSAPP_NUMBER = "56999386594";
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY ?? "";

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

const roles = [
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
  [
    "Debo cambiar mi software?",
    "No necesariamente. Trabajamos sobre la realidad existente y ordenamos la operacion sin forzar reemplazos innecesarios.",
  ],
  [
    "Cuanto demora?",
    "La primera puesta en marcha puede avanzar en menos de un mes, segun el alcance y la madurez del area.",
  ],
  [
    "Sirve para empresas pequenas?",
    "Si. El enfoque se adapta al tamano de la organizacion y a su nivel de digitalizacion.",
  ],
  [
    "Es compatible con mi sistema actual?",
    "En la mayoria de los casos, si. La propuesta se diseña para convivir con el ecosistema actual.",
  ],
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const listHtml = (items) =>
  items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

const cardsHtml = (items, renderCard) => items.map(renderCard).join("");

const page = `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Cumplimiento laboral inteligente | Carlos Albornoz</title>
    <meta name="description" content="Consultora chilena en legislación laboral, DS44, Ley Karin y automatización de RRHH con Inteligencia Artificial." />
    <link rel="icon" href="/favicon.svg" />
    <style>
      :root {
        --bg: #f7f5f0;
        --surface: #ffffff;
        --surface-soft: #f4f6f8;
        --text: #0f172a;
        --muted: #5b6575;
        --line: #d9dee6;
        --accent: #0f766e;
        --accent-soft: #dff7f6;
        --shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        background: linear-gradient(180deg, #eef1f4 0%, #f7f5f0 28%, #f7f5f0 100%);
        color: var(--text);
        font-family: Inter, "Segoe UI", Arial, Helvetica, sans-serif;
        line-height: 1.5;
      }

      a { color: inherit; text-decoration: none; }
      main { overflow: hidden; }
      .shell {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px 24px 80px;
      }
      .shell::before {
        content: "";
        position: absolute;
        inset: 0 auto auto 0;
        width: 100%;
        height: 34rem;
        pointer-events: none;
        background:
          radial-gradient(circle at top left, rgba(14, 165, 233, 0.12), transparent 30%),
          radial-gradient(circle at top right, rgba(15, 23, 42, 0.1), transparent 28%);
      }
      .header {
        position: relative;
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: end;
        border-bottom: 1px solid var(--line);
        padding-bottom: 20px;
      }
      .eyebrow {
        margin: 0;
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.28em;
        text-transform: uppercase;
      }
      .subtle {
        color: var(--muted);
        font-size: 15px;
        margin: 8px 0 0;
      }
      .nav {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .nav a, .button, .button-outline {
        border-radius: 999px;
        padding: 12px 18px;
        font-size: 14px;
        font-weight: 600;
        border: 1px solid var(--line);
        background: rgba(255,255,255,0.85);
        transition: transform .2s ease, border-color .2s ease, background .2s ease;
      }
      .nav a:hover, .button:hover, .button-outline:hover { transform: translateY(-1px); }
      .nav a:hover, .button-outline:hover { border-color: #b8c0cb; background: #fff; }
      .button {
        background: #0f172a;
        color: #fff;
        border-color: #0f172a;
      }
      .hero {
        position: relative;
        display: grid;
        grid-template-columns: 1.08fr 0.92fr;
        gap: 56px;
        align-items: center;
        padding: 64px 0;
      }
      .pill {
        display: inline-flex;
        border-radius: 999px;
        border: 1px solid #bde9e6;
        background: #eefcfb;
        color: #16635f;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 600;
      }
      h1 {
        margin: 18px 0 0;
        font-size: clamp(46px, 7vw, 80px);
        line-height: 0.95;
        letter-spacing: -0.04em;
      }
      .lede {
        max-width: 680px;
        margin: 18px 0 0;
        font-size: 18px;
        line-height: 1.8;
        color: var(--muted);
      }
      .actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }
      .button-outline { color: #0f172a; }
      .stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 28px;
      }
      .stat, .card, .quote, .faq, .step, .panel, .info {
        border: 1px solid var(--line);
        border-radius: 28px;
        background: rgba(255,255,255,0.88);
        box-shadow: var(--shadow);
      }
      .stat { padding: 18px; }
      .stat strong { display: block; font-size: 24px; line-height: 1.1; }
      .stat span { display: block; color: var(--muted); font-size: 14px; margin-top: 8px; }
      .visual {
        position: relative;
        padding: 24px;
      }
      .visual::before, .visual::after {
        content: "";
        position: absolute;
        border-radius: 999px;
        filter: blur(44px);
        pointer-events: none;
      }
      .visual::before { inset: 18px auto auto -14px; width: 120px; height: 120px; background: rgba(125, 211, 252, 0.32); }
      .visual::after { right: 14px; top: 44px; width: 100px; height: 100px; background: rgba(148, 163, 184, 0.35); }
      .visual-card {
        position: relative;
        background: rgba(255,255,255,0.92);
        border: 1px solid var(--line);
        border-radius: 32px;
        box-shadow: 0 24px 90px rgba(15,23,42,0.12);
        padding: 24px;
        backdrop-filter: blur(8px);
      }
      .visual-head {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: start;
        border-bottom: 1px solid var(--line);
        padding-bottom: 18px;
      }
      .mini {
        display: inline-flex;
        padding: 6px 12px;
        border-radius: 999px;
        border: 1px solid #bde9e6;
        background: #eefcfb;
        color: #16635f;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }
      .visual-title { margin: 10px 0 0; font-size: 24px; }
      .role-list { display: grid; gap: 12px; margin-top: 18px; }
      .role {
        border-radius: 22px;
        border: 1px solid var(--line);
        background: #f8fafc;
        padding: 16px;
      }
      .role-top { display: flex; gap: 14px; align-items: start; }
      .badge {
        display: inline-grid;
        place-items: center;
        width: 44px; height: 44px;
        border-radius: 16px;
        background: #0f172a;
        color: #fff;
        font-weight: 700;
        flex: 0 0 auto;
      }
      .role h3 { margin: 0; font-size: 16px; }
      .role p { margin: 4px 0 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
      .section { padding-top: 64px; }
      .section-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 24px;
        align-items: start;
      }
      .section-title {
        margin: 10px 0 0;
        font-size: clamp(30px, 4vw, 44px);
        line-height: 1.05;
        letter-spacing: -0.03em;
      }
      .section-copy { color: var(--muted); font-size: 16px; line-height: 1.85; margin-top: 14px; max-width: 780px; }
      .compare {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }
      .compare .col {
        border-radius: 28px;
        padding: 20px;
      }
      .compare .before { border: 1px solid #fecaca; background: #fff1f2; }
      .compare .after { border: 1px solid #a7f3d0; background: #ecfdf5; }
      .compare h3 { margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: .2em; }
      .compare ul { margin: 16px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
      .compare li, .benefit { border-radius: 18px; background: rgba(255,255,255,0.85); padding: 10px 12px; border: 1px solid rgba(15,23,42,0.06); font-size: 14px; }
      .cards {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 14px;
      }
      .card { padding: 18px; }
      .card .index { display: flex; align-items: center; gap: 10px; }
      .card .index span { width: 44px; height: 44px; border-radius: 16px; display: grid; place-items: center; background: #0f172a; color: #fff; font-weight: 700; }
      .card .line { height: 1px; flex: 1; background: var(--line); }
      .card h3 { margin: 16px 0 0; font-size: 18px; }
      .card p { margin: 10px 0 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
      .dark-panel { background: #0f172a; color: #fff; border: 1px solid rgba(255,255,255,0.08); padding: 26px; border-radius: 32px; box-shadow: 0 24px 90px rgba(15,23,42,0.18); }
      .dark-panel .section-copy { color: rgba(226,232,240,0.8); }
      .benefits {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin-top: 18px;
      }
      .benefit { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.08); color: #e5eefb; }
      .steps { display: grid; gap: 12px; }
      .step { display: flex; gap: 14px; padding: 16px; }
      .step .num { width: 40px; height: 40px; border-radius: 14px; background: #0f172a; color: #fff; display: grid; place-items: center; font-weight: 700; flex: 0 0 auto; }
      .step p { margin: 2px 0 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
      .team-grid { display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 24px; align-items: start; }
      .info { padding: 24px; }
      .info p { margin: 0; color: var(--muted); line-height: 1.9; }
      .quotes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
      .quote { padding: 20px; background: rgba(255,255,255,0.92); }
      .quote .mark { font-size: 34px; line-height: 1; color: var(--accent); }
      .faq-list { display: grid; gap: 12px; }
      .faq { padding: 18px 20px; }
      .faq summary { cursor: pointer; list-style: none; font-size: 16px; font-weight: 700; }
      .faq summary::-webkit-details-marker { display: none; }
      .faq p { color: var(--muted); font-size: 14px; line-height: 1.8; margin: 12px 0 0; }
      .cta {
        margin-top: 64px;
        border: 1px solid #bde9e6;
        background: linear-gradient(135deg, #ffffff 0%, #f0fbff 55%, #e2f6ff 100%);
        border-radius: 36px;
        padding: 28px;
        box-shadow: 0 24px 90px rgba(14, 165, 233, 0.12);
      }
      .cta-grid {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
      }
      .cta h2 {
        margin: 10px 0 0;
        font-size: clamp(30px, 4vw, 42px);
        line-height: 1.1;
        letter-spacing: -0.03em;
      }
      .cta p { color: var(--muted); font-size: 16px; line-height: 1.9; max-width: 780px; }
      .cta .actions { margin-top: 22px; }
      .button-whatsapp { background: #059669; color: #fff; border-color: #059669; }
      .contact-note { color: var(--muted); font-size: 14px; margin-top: 16px; }
      .contact-panel { padding: 26px; }
      .contact-form { display: grid; gap: 12px; }
      .contact-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .contact-form input, .contact-form textarea {
        width: 100%;
        border-radius: 16px;
        border: 1px solid var(--line);
        background: #fff;
        padding: 12px 16px;
        font-size: 14px;
        font-family: inherit;
        color: var(--text);
        box-sizing: border-box;
      }
      .contact-form textarea { resize: vertical; }
      .contact-form button {
        border-radius: 999px;
        border: none;
        background: #0f172a;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        padding: 14px 18px;
        cursor: pointer;
      }
      .contact-form button:disabled { opacity: 0.6; cursor: not-allowed; }
      .contact-status { font-size: 14px; margin: 0; }
      .contact-status.error { color: #e11d48; }
      .contact-status.success { color: #047857; font-weight: 600; }
      .footer-spacer { height: 12px; }

      @media (max-width: 640px) {
        .contact-row { grid-template-columns: 1fr; }
      }

      @media (max-width: 1024px) {
        .hero, .section-grid, .team-grid, .cta-grid { grid-template-columns: 1fr; display: grid; }
        .cards { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .quotes { grid-template-columns: 1fr; }
      }
      @media (max-width: 720px) {
        .shell { padding-inline: 16px; }
        .header { align-items: start; }
        .nav { justify-content: start; }
        .stats, .compare, .benefits, .cards { grid-template-columns: 1fr; }
        .hero { padding-top: 42px; gap: 28px; }
      }
    </style>
  </head>
  <body>
    <main>
      <div class="shell">
        <header class="header">
          <div>
            <p class="eyebrow">CUMPLIMIENTO LABORAL INTELIGENTE</p>
            <p class="subtle">Consultoria laboral, RRHH e Inteligencia Artificial</p>
          </div>
          <nav class="nav">
            <a href="#servicios">Servicios</a>
            <a href="#metodo">Metodo</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <section class="hero">
          <div>
            <div class="pill">Reducimos hasta 70% de costos administrativos de RRHH</div>
            <p class="eyebrow" style="margin-top:18px;">Consultora chilena</p>
            <h1>Cumplimiento laboral inteligente para empresas que necesitan orden, velocidad y control.</h1>
            <p class="lede">Ayudamos a implementar DS44, fortalecer Ley Karin y transformar RRHH con procesos documentados, automatizacion e Inteligencia Artificial.</p>
            <div class="actions">
              <a class="button" href="#contacto">Agenda una reunion</a>
              <a class="button-outline" href="#metodo">Solicita un diagnostico gratuito</a>
            </div>
            <div class="stats">
              <div class="stat"><strong>20+ anos</strong><span>asesorando organizaciones</span></div>
              <div class="stat"><strong>5 roles</strong><span>virtuales especializados</span></div>
              <div class="stat"><strong>24/7</strong><span>automatizacion y alertas</span></div>
            </div>
          </div>
          <div class="visual">
            <div class="visual-card">
              <div class="visual-head">
                <div>
                  <p class="eyebrow">Cinco empleados virtuales</p>
                  <p class="visual-title">En menos de un mes</p>
                </div>
                <div class="mini">IA aplicada a RRHH</div>
              </div>
              <div class="role-list">
                ${cardsHtml(roles, (role, idx) => `
                  <div class="role">
                    <div class="role-top">
                      <div class="badge">${String(idx + 1).padStart(2, "0")}</div>
                      <div>
                        <h3>${escapeHtml(role.title)}</h3>
                        <p>${escapeHtml(role.description)}</p>
                      </div>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </div>
        </section>

        <section class="section section-grid">
          <div>
            <p class="eyebrow">Antes y despues</p>
            <h2 class="section-title">De la operacion manual a un sistema de cumplimiento vivo.</h2>
            <p class="section-copy">Muchos equipos siguen trabajando con planillas, correos y documentos dispersos. Eso aumenta los errores, eleva el costo administrativo y deja huecos de trazabilidad.</p>
          </div>
          <div class="compare">
            <div class="col before">
              <h3>Antes</h3>
              <ul>${listHtml(["Planillas Excel","Documentos dispersos","Correos","Errores","Multas","Retrabajo"])}</ul>
            </div>
            <div class="col after">
              <h3>Despues</h3>
              <ul>${listHtml(["Procesos automatizados","IA trabajando 24/7","Documentos centralizados","Cumplimiento permanente","Reportes automáticos","Indicadores en tiempo real"])}</ul>
            </div>
          </div>
        </section>

        <section class="section" id="servicios">
          <p class="eyebrow">Servicios</p>
          <h2 class="section-title">Una consultora, múltiples frentes de soporte.</h2>
          <p class="section-copy">Cubrimos cumplimiento, prevencion, automatizacion, formacion y estrategia con una sola hoja de ruta.</p>
          <div class="cards" style="margin-top:18px;">
            ${cardsHtml(services, (service, idx) => `
              <article class="card">
                <div class="index"><span>${String(idx + 1).padStart(2, "0")}</span><div class="line"></div></div>
                <h3>${escapeHtml(service)}</h3>
                <p>Diseñado para mejorar cumplimiento, ordenar evidencia y acelerar la ejecucion sin friccion operativa.</p>
              </article>
            `)}
          </div>
        </section>

        <section class="section section-grid" id="metodo">
          <div class="dark-panel">
            <p class="eyebrow" style="color:#93c5fd;">Beneficios</p>
            <h2 class="section-title" style="color:#fff;">Menos riesgo y mas control.</h2>
            <p class="section-copy">El resultado es una operacion con menos carga administrativa, mejor trazabilidad y un equipo que puede enfocarse en decisiones de valor.</p>
            <div class="benefits">
              ${benefits.map((benefit) => `<div class="benefit">${escapeHtml(benefit)}</div>`).join("")}
            </div>
          </div>
          <div class="panel" style="padding:26px;">
            <p class="eyebrow">Como trabajamos</p>
            <h2 class="section-title">Un proceso corto, claro y medible.</h2>
            <p class="section-copy">Cada fase se diseña para avanzar con orden, asegurar adopcion y mostrar resultados medibles desde el inicio.</p>
            <div class="steps">
              ${steps.map((step, idx) => `
                <div class="step">
                  <div class="num">${idx + 1}</div>
                  <div>
                    <div style="font-weight:700;font-size:16px;">${escapeHtml(step)}</div>
                    <p>Cada etapa ordena la implementacion y deja una siguiente decision clara.</p>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="section team-grid" id="equipo">
          <div>
            <p class="eyebrow">Fundador</p>
            <h2 class="section-title">Carlos Albornoz.</h2>
            <p class="section-copy">Empresario, psicologo organizacional, academico y consultor de empresas. Mas de 20 anos asesorando organizaciones en gestion de personas, legislacion laboral, liderazgo y desarrollo organizacional.</p>
            <div class="info">
              <p>Su experiencia combina psicologia organizacional, direccion de empresas, legislacion laboral aplicada al negocio y formacion de lideres, con foco en integrar Inteligencia Artificial para transformar areas administrativas en unidades estrategicas.</p>
            </div>
          </div>
          <div class="panel" style="padding:24px;">
            <p class="eyebrow">Prueba social</p>
            <div class="quotes" style="margin-top:18px;">
              ${["Espacio para testimonios de clientes.","Casos de reduccion de carga administrativa.","Resultados en cumplimiento y control."].map((item) => `
                <article class="quote">
                  <div class="mark">“</div>
                  <p style="color:var(--muted);font-size:14px;line-height:1.8;margin:10px 0 0;">${escapeHtml(item)}</p>
                </article>
              `).join("")}
            </div>
          </div>
        </section>

        <section class="section" aria-labelledby="faq-title">
          <p class="eyebrow" id="faq-title">Preguntas frecuentes</p>
          <h2 class="section-title">Resolvemos las dudas mas comunes antes de partir.</h2>
          <p class="section-copy">Nos interesa que el equipo entienda la propuesta antes de tomar una decision.</p>
          <div class="faq-list" style="margin-top:18px;">
            ${faqs.map(([question, answer]) => `
              <details class="faq">
                <summary>${escapeHtml(question)}</summary>
                <p>${escapeHtml(answer)}</p>
              </details>
            `).join("")}
          </div>
        </section>

        <section class="cta" id="contacto">
          <div class="cta-grid" style="align-items:flex-start;">
            <div>
              <p class="eyebrow">Contacto</p>
              <h2>Descubra cuanto podria ahorrar automatizando su area de Recursos Humanos.</h2>
              <p>Agende una reunion y conozca como su empresa puede contar con cinco asistentes virtuales especializados en cumplimiento laboral en menos de un mes.</p>
              <div class="actions">
                <a class="button button-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero saber mas sobre sus servicios de cumplimiento laboral.")}">Escribir por WhatsApp</a>
                <a class="button" href="mailto:${CONTACT_EMAIL}">Escribir por correo</a>
              </div>
              <p class="contact-note">${CONTACT_EMAIL} &middot; +${WHATSAPP_NUMBER}</p>
            </div>
            <div class="panel contact-panel">
              <form class="contact-form" id="contact-form">
                <div class="contact-row">
                  <input type="text" name="name" placeholder="Nombre" required />
                  <input type="email" name="email" placeholder="Correo electronico" required />
                </div>
                <input type="tel" name="phone" placeholder="Telefono (opcional)" />
                <textarea name="message" rows="4" placeholder="Cuentanos que necesitas" required></textarea>
                <button type="submit">Enviar mensaje</button>
                <p class="contact-status" id="contact-status"></p>
              </form>
            </div>
          </div>
        </section>
        <script>
          window.WEB3FORMS_ACCESS_KEY = ${JSON.stringify(WEB3FORMS_ACCESS_KEY)};
        </script>
        <script src="/contact-form.js"></script>
        <div class="footer-spacer"></div>
      </div>
    </main>
  </body>
  </html>`;

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, "index.html"), page, "utf8");

try {
  await copyFile(path.join(root, "public", "favicon.svg"), path.join(outDir, "favicon.svg"));
} catch {}

try {
  await copyFile(path.join(root, "public", "contact-form.js"), path.join(outDir, "contact-form.js"));
} catch {}

console.log("Static site written to out/");
