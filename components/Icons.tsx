import {
  MdHome,
  MdPerson,
  MdApps,
  MdWork,
  MdPhoneForwarded,
  MdEmail,
  MdGavel,
  MdDownload,
} from "react-icons/md";

// Named imports only — importing * from react-icons/md pulls the entire
// Material Design icon set (thousands of icons) into the client bundle.
const iconMap = {
  MdHome,
  MdPerson,
  MdApps,
  MdWork,
  MdPhoneForwarded,
  MdEmail,
  MdGavel,
  MdDownload,
};

interface HeroIconsProps {
  icon: string;
}

const HeroIcons: React.FC<HeroIconsProps> = ({ icon }) => {
  const IconComponent = iconMap[icon as keyof typeof iconMap] as React.ElementType;

  if (!IconComponent) return null;

  return <IconComponent className='icons' aria-hidden='true' />;
};

export default HeroIcons;
