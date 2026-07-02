import type { Metadata } from "next";
import Script from "next/script";
import { SITE_META, SITE_URL, STRUCTURED_DATA } from "../content/site-content.js";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_META.title,
  description: SITE_META.description,
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_META.siteName,
    locale: SITE_META.locale,
    url: "/",
    title: SITE_META.title,
    description: SITE_META.description,
  },
  twitter: {
    card: "summary",
    title: SITE_META.title,
    description: SITE_META.description,
  },
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
      <body className="antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        {children}
      </body>
    </html>
  );
}
