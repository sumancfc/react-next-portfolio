'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import HeroIcons from './Icons';
import { Menu } from '../data/interfaces';

interface NavDockProps {
  menus: Menu[];
}

const NavDock: React.FC<NavDockProps> = ({ menus }) => {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <header className='dock'>
      <nav className='dock-nav'>
        {menus.map((menu: Menu) => {
          const isActive = pathname === menu.link;
          return (
            <Link
              key={menu.id}
              href={menu.link}
              className={`dock-item${isActive ? ' active' : ''}`}
              aria-label={t(menu.title)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className='dock-icon'>
                <HeroIcons icon={menu.icon} />
              </span>
              <span className='dock-label'>{t(menu.title)}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default NavDock;
