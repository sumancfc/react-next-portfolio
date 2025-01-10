import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Index from "./Footer";
import menus from "../data/menus";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <MobileMenu />

      

      {children}

      <Index />
    </div>
  );
};

export default Layout;
