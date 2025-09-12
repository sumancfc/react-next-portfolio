import Link from "next/link";
import HeroIcons from './Icons';
import Icon from '../data/enum';

const TopHeader: React.FC = () => {
  return (
      <section className="section d-flex relative py-20">
        <div className='container d-flex align-center justify-between'>
          <div className='information d-flex align-center justify-between'>
            <Link href='tel:+4917685985727' className="d-flex">
              <HeroIcons icon={Icon.PhoneOutgoingIcon} />
            </Link>
            <Link href='mailto:sumanstha999@gmail.com' className="d-flex">
              <HeroIcons icon={Icon.MailIcon} />
            </Link>
          </div>
          <div className='language'>
            <ul className='nav d-flex'>
              <li className='active'>
                <Link href='#'>EN</Link>
              </li>
              <li>
                <Link href='#'>DE</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
};

export default TopHeader;
