import Link from "next/link";
import Image from "next/image";

const SocialIcons = () => {
  const socials = [
    {
      id: "1",
      name: "Github",
      link: "https://github.com/sumancfc",
      src: "/img/github.png",
    },
    {
      id: "2",
      name: "linkedin",
      link: "https://www.linkedin.com/in/suman-shrestha-111410144/",
      src: "/img/linkedin.png",
    },
    {
      id: "3",
      name: "Twitter",
      link: "https://twitter.com/sumancfc",
      src: "/img/twitter.png",
    },
    {
      id: "4",
      name: "Instagram",
      link: "https://instagram.com/",
      src: "/img/instagram.png",
    },
  ];

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
