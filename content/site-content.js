// Single source of truth for site copy. Imported by both the React
// preview (app/page.tsx, used by `vinext dev`) and the static build
// (scripts/build-static.mjs, used by `npm run build`) so content only
// needs to be edited in one place.

export const SITE_URL = "https://htc.lat";

export const COMPANY_NAME = "Human Talent Consulting";

export const SITE_META = {
  siteName: COMPANY_NAME,
  title: "Human Talent Consulting | Cumplimiento laboral inteligente",
  description:
    "Consultora chilena en legislación laboral, DS44, Ley Karin y automatización de RRHH con Inteligencia Artificial.",
  locale: "es_CL",
  themeColor: "#0f766e",
};

export const CONTACT_EMAIL = "contacto@htc.lat";
export const WHATSAPP_NUMBER = "56999386594";
export const WHATSAPP_MESSAGE =
  "Hola, quiero saber más sobre sus servicios de cumplimiento laboral.";

export const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export const HEADER = {
  mark: "HT",
  companyName: COMPANY_NAME,
  subtitle: "Consultoría laboral, RRHH e Inteligencia Artificial",
};

export const HERO = {
  pill: "Reducimos hasta 70% de costos administrativos de RRHH",
  eyebrow: COMPANY_NAME,
  title:
    "Cumplimiento laboral inteligente para empresas que necesitan orden, velocidad y control.",
  lede: "Ayudamos a implementar DS44, fortalecer Ley Karin y transformar RRHH con procesos documentados, automatización e Inteligencia Artificial.",
  primaryCta: { label: "Agenda una reunión", href: "#contacto" },
  secondaryCta: { label: "Solicita un diagnóstico gratuito", href: "#metodo" },
  stats: [
    { value: "20+ años", label: "asesorando organizaciones" },
    { value: "5 roles", label: "virtuales especializados" },
    { value: "24/7", label: "automatización y alertas" },
  ],
  panel: {
    eyebrow: "Cinco empleados virtuales",
    title: "En menos de un mes",
    badge: "IA aplicada a RRHH",
  },
};

export const VIRTUAL_ROLES = [
  {
    title: "Ley Karin",
    description:
      "Gestión documental, protocolos, seguimiento de casos y evidencia trazable.",
  },
  {
    title: "Prevención de Riesgos",
    description:
      "Seguimiento DS44, matrices, controles y orden documental permanente.",
  },
  {
    title: "Remuneraciones",
    description:
      "Automatización de cálculos, revisión, respaldo y control de alertas.",
  },
  {
    title: "Control de Turnos",
    description:
      "Asistencia, jornadas, horas extra y alertas sobre desajustes operativos.",
  },
  {
    title: "Inspector Interno",
    description:
      "Auditorías permanentes, revisión documental y preparación para fiscalizaciones.",
  },
];

export const COMPARE = {
  eyebrow: "Antes y después",
  title: "De la operación manual a un sistema de cumplimiento vivo.",
  description:
    "Muchos equipos siguen trabajando con planillas, correos y documentos dispersos. Eso aumenta los errores, eleva el costo administrativo y deja huecos de trazabilidad.",
  before: {
    label: "Antes",
    items: ["Planillas Excel", "Documentos dispersos", "Correos", "Errores", "Multas", "Retrabajo"],
  },
  after: {
    label: "Después",
    items: [
      "Procesos automatizados",
      "IA trabajando 24/7",
      "Documentos centralizados",
      "Cumplimiento permanente",
      "Reportes automáticos",
      "Indicadores en tiempo real",
    ],
  },
};

export const SERVICES_SECTION = {
  eyebrow: "Servicios",
  title: "Una consultora, múltiples frentes de soporte.",
  description:
    "Cubrimos cumplimiento, prevención, automatización, formación y estrategia con una sola hoja de ruta.",
  items: [
    {
      title: "Cumplimiento Legal",
      description:
        "Diagnóstico y seguimiento normativo laboral para mantener a la empresa al día con la legislación vigente.",
    },
    {
      title: "Implementación DS44",
      description:
        "Matrices de riesgo, protocolos y documentación alineados a las exigencias del DS44.",
    },
    {
      title: "Ley Karin",
      description:
        "Protocolos de prevención, canales de denuncia y gestión de casos conforme a la Ley Karin.",
    },
    {
      title: "Automatización RRHH",
      description:
        "Procesos de Recursos Humanos automatizados para reducir tareas manuales y errores.",
    },
    {
      title: "Auditorías Laborales",
      description:
        "Revisiones periódicas que anticipan brechas antes de una fiscalización.",
    },
    {
      title: "Capacitación",
      description:
        "Formación práctica para equipos y líderes en normativa laboral y gestión de personas.",
    },
    {
      title: "Consultoría Estratégica",
      description:
        "Acompañamiento directivo para alinear la gestión de personas con los objetivos del negocio.",
    },
    {
      title: "IA para RRHH",
      description:
        "Herramientas de Inteligencia Artificial aplicadas a procesos clave de Recursos Humanos.",
    },
  ],
};

export const BENEFITS_SECTION = {
  eyebrow: "Beneficios",
  title: "Menos riesgo y más control.",
  description:
    "El resultado es una operación con menos carga administrativa, mejor trazabilidad y un equipo que puede enfocarse en decisiones de valor.",
  items: [
    "Menos carga administrativa",
    "Mayor cumplimiento legal",
    "Preparación para fiscalizaciones",
    "Documentación centralizada",
    "Menor riesgo de multas",
    "Información en tiempo real",
  ],
};

export const METHOD_SECTION = {
  eyebrow: "Cómo trabajamos",
  title: "Un proceso corto, claro y medible.",
  description:
    "Cada fase se diseña para avanzar con orden, asegurar adopción y mostrar resultados medibles desde el inicio.",
  steps: [
    {
      title: "Diagnóstico gratuito",
      description:
        "Revisamos el estado actual de cumplimiento y procesos de RRHH sin costo.",
    },
    {
      title: "Oportunidades de automatización",
      description:
        "Identificamos qué tareas manuales se pueden automatizar primero.",
    },
    {
      title: "Diseño del plan",
      description:
        "Definimos alcance, prioridades y responsables de la implementación.",
    },
    {
      title: "Implementación",
      description:
        "Ponemos en marcha los protocolos, herramientas y automatizaciones acordadas.",
    },
    {
      title: "Acompañamiento",
      description:
        "Seguimiento continuo para ajustar y sostener los resultados en el tiempo.",
    },
  ],
};

export const TEAM_SECTION = {
  eyebrow: "Fundador",
  name: "Carlos Albornoz.",
  description:
    "Empresario, psicólogo organizacional, académico y consultor de empresas. Más de 20 años asesorando organizaciones en gestión de personas, legislación laboral, liderazgo y desarrollo organizacional.",
  bio: "Su experiencia combina psicología organizacional, dirección de empresas, legislación laboral aplicada al negocio y formación de líderes, con foco en integrar Inteligencia Artificial para transformar áreas administrativas en unidades estratégicas. Cuenta con un MBA y un Doctorado en Desarrollo de Recursos Humanos de Florida International University (EE. UU.).",
};

export const TESTIMONIALS_SECTION = {
  eyebrow: "Prueba social",
  items: [
    "Espacio para testimonios de clientes.",
    "Casos de reducción de carga administrativa.",
    "Resultados en cumplimiento y control.",
  ],
};

export const FAQ_SECTION = {
  eyebrow: "Preguntas frecuentes",
  title: "Resolvemos las dudas más comunes antes de partir.",
  description:
    "Nos interesa que el equipo entienda la propuesta antes de tomar una decisión.",
  items: [
    {
      question: "¿Cuánto cuesta?",
      answer:
        "Por el valor de un sueldo mínimo al mes, cuenta con 5 empleados virtuales especializados que entregan resultados revisados y firmados por profesionales con años de experiencia. En un mes obtiene lo que normalmente tomaría 6 meses en generar. El método está probado: se va a sorprender con lo que puede lograr adoptando Inteligencia Artificial.",
    },
    {
      question: "¿Debo cambiar mi software?",
      answer:
        "No necesariamente. Trabajamos sobre la realidad existente y ordenamos la operación sin forzar reemplazos innecesarios.",
    },
    {
      question: "¿Cuánto demora?",
      answer:
        "La primera puesta en marcha puede avanzar en menos de un mes, según el alcance y la madurez del área.",
    },
    {
      question: "¿Sirve para empresas pequeñas?",
      answer:
        "Sí. El enfoque se adapta al tamaño de la organización y a su nivel de digitalización.",
    },
    {
      question: "¿Es compatible con mi sistema actual?",
      answer:
        "En la mayoría de los casos, sí. La propuesta se diseña para convivir con el ecosistema actual.",
    },
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Contacto",
  title:
    "Descubra cuánto podría ahorrar automatizando su área de Recursos Humanos.",
  description:
    "Agende una reunión y conozca cómo su empresa puede contar con cinco asistentes virtuales especializados en cumplimiento laboral en menos de un mes.",
  whatsappCtaLabel: "Escribir por WhatsApp",
  emailCtaLabel: "Escribir por correo",
};

export const CONTACT_FORM_MESSAGES = {
  subject: "Nuevo contacto desde el sitio web",
  notConfigured:
    "El formulario no está configurado todavía. Escríbenos directo por WhatsApp o correo.",
  success: "Gracias por escribirnos. Te contactaremos a la brevedad.",
  errorPrefix: "No pudimos enviar tu mensaje. Escríbenos directo a",
};

// schema.org structured data (JSON-LD). Only fields that are already
// public on the site itself (no invented address, socials, etc.).
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY_NAME,
  alternateName: "HTC",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  description: SITE_META.description,
  areaServed: "CL",
  founder: {
    "@type": "Person",
    name: TEAM_SECTION.name.replace(/\.$/, ""),
  },
};
