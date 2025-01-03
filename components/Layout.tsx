import Header from "./Header";
import Footer from "./Footer";
import { menus } from "../data/menus";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }) => {
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
