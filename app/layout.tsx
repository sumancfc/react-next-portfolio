import "@mantine/core/styles.css";
import React from "react";
import { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { AltLayout } from "../components/Layout";

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
    <html lang='en-US' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <AltLayout children={children} />
        </MantineProvider>
      </body>
    </html>
  );
}
