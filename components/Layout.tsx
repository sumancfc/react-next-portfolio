"use client";
import React, { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import NavDock from "./NavDock";
import menus from "../data/menus";
import Link from "next/link";
import FloatingContact from "./FloatingContact";
import PageBackground from "./PageBackground";


interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const { t } = useTranslation();
    const mainContentRef = React.useRef<HTMLElement>(null);

    return (
        <div className='page-wrapper' data-testid='page-wrapper'>
            <PageBackground />
            <Link href="#main-content" className="absolute skip-link">{t("skip_to_content")}</Link>
            <NavDock menus={menus} />
            <main id="main-content" ref={mainContentRef} tabIndex={-1}>
                    <FloatingContact />
                    {children}
            </main>
        </div>
  );
};

export default Layout;
