import React from "react";
import { Metadata } from "next";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps, Container } from '@mantine/core';

import "../styles/style.scss";
import Header from "../components/Header";
import Index from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import menus from "../data/menus";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        <ColorSchemeScript/>
      </head>
      <body>
      <MantineProvider>

              <Navbar/>
              {children}
              <Footer/>

      </MantineProvider>
      </body>
      </html>
);
}
