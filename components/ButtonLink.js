import Link from "next/link";
import HeroIcons from "./Icons";

const ButtonLink = ({ textTitle, icon, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className='btn d-flex justify-center align-center'>
        {textTitle} <HeroIcons icon={icon} />
      </a>
    </Link>
  );
};

export default ButtonLink;
