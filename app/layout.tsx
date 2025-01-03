import { Metadata } from "next";
import "../styles/style.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import menus from "../data/menus";

export const metadata: Metadata = {
  title: "Suman Shrestha | Software Engineer",
  description: "Personal Portfolio of Suman Shrestha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en-US'>
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
