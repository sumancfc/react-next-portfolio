import { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import menus from "../data/menus";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <MobileMenu />

      <Header menus={menus} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
