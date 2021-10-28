import { useRouter } from "next/router";
import Link from "next/link";
import HeroIcons from "./Icons";
import Logo from "./Logo";

const Header = ({ menus }) => {
  const router = useRouter();
  return (
    <header className='header-left'>
      <Logo title='S' />

      <ul className='nav'>
        {menus.map((menu) => (
          <li key={menu.id} className='nav-item'>
            <Link href={menu.link}>
              <a
                className={
                  router.pathname == menu.link ? "active nav-link" : "nav-link"
                }
              >
                <HeroIcons icon={menu.icon} />
                {menu.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
