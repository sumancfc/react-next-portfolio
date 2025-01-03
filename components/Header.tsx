"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import HeroIcons from "./Icons";
import Logo from "./Logo";
import { Menu } from "../data/interfaces";

interface HeaderProps {
  menus: Menu[];
}

const Header: React.FC<HeaderProps> = ({ menus }) => {
  const pathname = usePathname();

  return (
    <header className='header-left'>
      <Logo title='S' />
      <ul className='nav'>
        {menus.map((menu) => (
          <li key={menu.id} className='nav-item'>
            <Link
              href={menu.link}
              className={
                pathname === menu.link ? "active nav-link" : "nav-link"
              }
            >
              <HeroIcons icon={menu.icon} />
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
