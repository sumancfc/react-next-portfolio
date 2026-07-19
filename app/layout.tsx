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
          {children}
        </I18nProvider>
        <Script
         src="https://cloud.umami.is/script.js"
         data-website-id="3a3c24e7-9e88-439d-b810-f85f94f717f0"
         strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
