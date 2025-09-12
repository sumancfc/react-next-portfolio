import React from "react";
import { Metadata } from "next";
import "../public/styles/style.scss";

export const metadata: Metadata = {
  title: {
    default: "Suman Shrestha | Software Engineer",
    template: "%s - Suman Shrestha | Software Engineer",
    absolute: "",
  },
  description: "Personal Portfolio of Suman Shrestha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-US'>
      <body>
      {children}
      </body>
    </html>
  );
}
