import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className='footer section'>
      <div className='container'>
        <div className='row d-flex justify-between align-center'>
          <div className=''>
            <SocialIcons />
          </div>
          <div className=''>
            <p className='m-0'>
              &copy; {new Date().getFullYear()} copyright{" "}
              <Link href='/'>
                <a className='text-blue' target='_blank'>
                  Suman Shrestha.
                </a>
              </Link>{" "}
              All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
