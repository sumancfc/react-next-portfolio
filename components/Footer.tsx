import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className='section footer' data-testid='footer'>
      <div className='container'>
        <div className='row d-flex justify-center align-center'>
            <p className='copyright' data-testid='copyright'>
              &copy; {new Date().getFullYear()} {" "}
              <Link
                href='/'
                className='copyright__text'
                data-testid='copyright-link'
              >
                Suman Shrestha
              </Link>
              . All right reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
