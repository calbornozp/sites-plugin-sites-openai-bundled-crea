import type { ReactNode } from "react";
import { ContactForm } from "./contact-form";
import {
  BENEFITS_SECTION,
  COMPARE,
  CONTACT_EMAIL,
  CONTACT_SECTION,
  FAQ_SECTION,
  HEADER,
  HERO,
  METHOD_SECTION,
  NAV_ITEMS,
  SERVICES_SECTION,
  TEAM_SECTION,
  VIRTUAL_ROLES,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../content/site-content.js";

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
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f0]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
              {HEADER.mark}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-cyan-700">
                {HEADER.eyebrow}
              </p>
              <p className="mt-1 text-sm text-slate-500">{HEADER.subtitle}</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 transition hover:border-slate-300 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.1),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
        <section className="grid gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800">
              {HERO.pill}
            </div>

            <div className="space-y-5">
              <Eyebrow>{HERO.eyebrow}</Eyebrow>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.2rem] lg:leading-[0.95]">
                {HERO.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                {HERO.lede}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={HERO.primaryCta.href}
                className="rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {HERO.primaryCta.label}
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="rounded-full border border-slate-300 bg-white/90 px-6 py-4 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
              >
                {HERO.secondaryCta.label}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {HERO.stats.map(({ value, label }) => (
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
                  <Eyebrow>{HERO.panel.eyebrow}</Eyebrow>
                  <p className="mt-2 text-2xl font-semibold tracking-tight">
                    {HERO.panel.title}
                  </p>
                </div>
                <div className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
                  {HERO.panel.badge}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {VIRTUAL_ROLES.map((role, index) => (
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
            eyebrow={COMPARE.eyebrow}
            title={COMPARE.title}
            description={COMPARE.description}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">
                {COMPARE.before.label}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-950">
                {COMPARE.before.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-white/80 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {COMPARE.after.label}
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-950">
                {COMPARE.after.items.map((item) => (
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
            eyebrow={SERVICES_SECTION.eyebrow}
            title={SERVICES_SECTION.title}
            description={SERVICES_SECTION.description}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_SECTION.items.map((service, index) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {service.description}
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
              <Eyebrow>{BENEFITS_SECTION.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {BENEFITS_SECTION.title}
              </h2>
              <p className="text-base leading-8 text-slate-300">
                {BENEFITS_SECTION.description}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {BENEFITS_SECTION.items.map((benefit) => (
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
              eyebrow={METHOD_SECTION.eyebrow}
              title={METHOD_SECTION.title}
              description={METHOD_SECTION.description}
            />

            <div className="mt-6 space-y-4">
              {METHOD_SECTION.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-950">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="pt-16">
          <SectionHeading
            eyebrow={TEAM_SECTION.eyebrow}
            title={TEAM_SECTION.name}
            description={TEAM_SECTION.description}
          />
          <div className="mt-6 max-w-3xl rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.05)]">
            <p className="text-base leading-8 text-slate-700">
              {TEAM_SECTION.bio}
            </p>
          </div>
        </section>

        <section className="grid gap-8 pt-16 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow={FAQ_SECTION.eyebrow}
            title={FAQ_SECTION.title}
            description={FAQ_SECTION.description}
          />

          <div className="space-y-4">
            {FAQ_SECTION.items.map((faq) => (
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
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <Eyebrow>{CONTACT_SECTION.eyebrow}</Eyebrow>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  {CONTACT_SECTION.title}
                </h2>
                <p className="max-w-3xl text-base leading-8 text-slate-600">
                  {CONTACT_SECTION.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    WHATSAPP_MESSAGE,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  {CONTACT_SECTION.whatsappCtaLabel}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {CONTACT_SECTION.emailCtaLabel}
                </a>
              </div>

              <p className="text-sm text-slate-500">
                {CONTACT_EMAIL} · +{WHATSAPP_NUMBER}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_14px_50px_rgba(15,23,42,0.06)]">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
