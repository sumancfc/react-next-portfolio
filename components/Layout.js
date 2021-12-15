import Header from "./Header";
import Footer from "./Footer";
import { menus } from "../data/menu";

const Layout = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <Header menus={menus} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
