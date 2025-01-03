import React from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  return (
    <footer className='footer section' data-testid='footer'>
      <div className='container'>
        <div className='row d-flex justify-between align-center'>
          <div>
            <SocialIcons />
          </div>
          <div>
            <p className='copyright' data-testid='copyright'>
              &copy; {new Date().getFullYear()} copyright{" "}
              <Link
                href='/'
                className='copyright__text'
                target='_blank'
                data-testid='copyright-link'
              >
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
