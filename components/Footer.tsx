import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className='footer section'>
      <div className='container'>
        <div className='row d-flex justify-between align-center'>
          <div>
            <SocialIcons />
          </div>
          <div>
            <p className='copyright'>
              &copy; {new Date().getFullYear()} copyright{" "}
              <Link href='/' className='copyright__text' target='_blank'>
                Suman Shrestha.
              </Link>
              All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
