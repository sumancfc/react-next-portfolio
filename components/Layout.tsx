"use client";
import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import menus from "../data/menus";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import TopHeader from "./TopHeader";


interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const mainContentRef = React.useRef<HTMLElement>(null);

    return (
        <div className='page-wrapper' data-testid='page-wrapper'>
            <Link href="#main-content" className="absolute skip-link">Skip to content</Link>
            <MobileMenu />
            <Header menus={menus} />
            <main id="main-content" ref={mainContentRef} tabIndex={-1}>
                    <TopHeader />
                    {children}
            </main>
            <Footer />
        </div>
  );
};

export default Layout;
