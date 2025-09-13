'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Tooltip } from 'react-tooltip';
import  {useTranslation} from "react-i18next";
import HeroIcons from './Icons';
import Logo from './Logo';
import { Menu } from '../data/interfaces';

interface HeaderProps {
  menus: Menu[];
}

const Header: React.FC<HeaderProps> = ({ menus } ) => {
  const pathname : string = usePathname();
  const { t } = useTranslation();

  return (
    <header className='header-left'>
      <Logo title='S' />
      <ul className='nav'>
        {menus.map((menu: Menu) => (
          <li key={menu.id} className='nav-item'>
            <Link
              href={menu.link}
              className={
                pathname === menu.link ? 'active nav-link' : 'nav-link'
              }
              data-tooltip-id='menu-tooltip'
              data-tooltip-content={t(menu.title)}
              data-tooltip-place='right'
            >
              <HeroIcons icon={menu.icon} />
            </Link>

          </li>
        ))}
      </ul>
        <Tooltip id='menu-tooltip' />
    </header>
  );
};

export default Header;
