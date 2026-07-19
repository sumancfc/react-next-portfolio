import React, { ReactNode } from "react";
import NavDock from "./NavDock";
import menus from "../data/menus";
import Link from "next/link";
import FloatingContact from "./FloatingContact";
import PageBackground from "./PageBackground";
import i18n from "../lib/i18n";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const skipLinkLabel = i18n.t("skip_to_content", { defaultValue: "Zum Inhalt springen" });

  return (
    <div className='page-wrapper' data-testid='page-wrapper'>
      <PageBackground />
      <Link href="#main-content" className="absolute skip-link">{skipLinkLabel}</Link>
      <NavDock menus={menus} />
      <main id="main-content" tabIndex={-1}>
        <FloatingContact />
        {children}
      </main>
    </div>
  );
};

export default Layout;
