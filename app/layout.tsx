import React from "react";
import { Metadata } from "next";
import { Nunito, JetBrains_Mono } from "next/font/google";
import I18nProvider from "../components/I18nProvider";
import "../public/styles/style.scss";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* Static (not per-request) so every page keeps statically generating —
   reading the language cookie here would force Next.js to render every
   route dynamically just to translate a <title> tag, which isn't worth
   losing static generation for. German, matching the site's default
   language (lib/i18n.ts); the actual page content still translates
   correctly client-side regardless of this tag's language. */
export const metadata: Metadata = {
  title: {
    default: "Suman Shrestha | Software-Entwickler",
    template: "%s - Suman Shrestha | Software-Entwickler",
    absolute: "",
  },
  description: "Persönliches Portfolio von Suman Shrestha",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='de' className={`${nunito.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <I18nProvider>
          {children} {/* This renders HomePage, which then renders Layout */}
        </I18nProvider>
      </body>
    </html>
  );
}
