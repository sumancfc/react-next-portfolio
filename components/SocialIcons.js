import Link from "next/link";
import Image from "next/image";
import { socials } from "../data/socials";

const SocialIcons = () => {
  return (
    <ul className='d-flex align-center justify-between'>
      {socials.map((social) => (
        <li key={social.id}>
          <Link href={social.link}>
            <a className='social-link' target='_blank'>
              <Image
                src={social.src}
                width={30}
                height={30}
                quality={100}
                alt={social.name}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
