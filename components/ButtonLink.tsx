import Link from "next/link";
import HeroIcons from "./Icons";
import Icon from "../data/enum";

interface ButtonLinkProps {
  textTitle: string;
  icon: Icon;
  link: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ textTitle, icon, link }) => {
  return (
    <Link href={link} className='btn d-flex justify-center align-center'>
      {textTitle} <HeroIcons icon={icon} />
    </Link>
  );
};

export default ButtonLink;
