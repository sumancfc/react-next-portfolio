import Header from "./Header";
import Footer from "./Footer";
import Menu from "../data/Menu";

const Layout = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <Header menus={Menu} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
