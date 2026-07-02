import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cumplimiento laboral inteligente | Carlos Albornoz",
  description:
    "Consultora chilena en legislación laboral, DS44, Ley Karin y automatización de RRHH con Inteligencia Artificial.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
