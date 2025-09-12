import Link from "next/link";

interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <div className='logo'>
      <Link href='/'>{title}</Link>
    </div>
  );
};

export default Logo;
