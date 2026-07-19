import React, { ReactNode } from "react";
import NavDock from "./NavDock";
import menus from "../data/menus";
import Link from "next/link";
import FloatingContact from "./FloatingContact";
import PageBackground from "./PageBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='page-wrapper' data-testid='page-wrapper'>
      <PageBackground />
      <Link href="#main-content" className="absolute skip-link">Zum Inhalt springen</Link>
      <NavDock menus={menus} />
      <main id="main-content" tabIndex={-1}>
        <FloatingContact />
        {children}
      </main>
    </div>
  );
};

export default Layout;
