import Link from "next/link";

const Logo = ({ title }) => {
  return (
    <div className='logo'>
      <Link href='/'>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default Logo;
