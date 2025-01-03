import React from "react";
import Link from "next/link";
import HeroIcons from "./Icons";

interface ButtonLinkProps {
  textTitle: string;
  icon: string;
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
