import Link from "next/link";
import HeroIcons from './Icons';
import Icon from '../data/enum';

const TopHeader: React.FC = () => {
  return (
    <div className='home-top d-flex justify-between'>
      <div className='information d-flex justify-between align-center'>
        <Link href='tel:+4917685985727'>
          <HeroIcons icon={Icon.PhoneOutgoingIcon} />
        </Link>
        <Link href='mailto:sumanstha999@gmail.com'>
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
  );
};

export default TopHeader;
