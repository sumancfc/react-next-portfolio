import "../styles/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomHead from "../components/CustomHead";
import MobileMenu from "../components/MobileMenu";
import { menus } from "../data/menu";

export default function RootLayout({ children }) {
  return (
    <html lang='en-US'>
      <CustomHead />
      <body>
        <div className='page-wrapper'>
          <MobileMenu />

          <Header menus={menus} />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
