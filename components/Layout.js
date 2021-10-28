import Menu from "../data/Menu";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className='page-wrapper'>
      <title>{pageTitle}</title>
      <Header menus={Menu} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
