import { Menu } from "./interfaces";
import Icon from "./enum";

const menus: Menu[] = [
  { id: "1", title: "Home", icon: Icon.HomeIcon, link: "/" },
  {
    id: "2",
    title: "About",
    icon: Icon.IdentificationIcon,
    link: "/about",
  },
  {
    id: "3",
    title: "Experience",
    icon: Icon.CollectionIcon,
    link: "/experience",
  },
  {
    id: "4",
    title: "Work",
    icon: Icon.DesktopComputerIcon,
    link: "/work",
  },
  {
    id: "5",
    title: "Contact",
    icon: Icon.PhoneOutgoingIcon,
    link: "/contact",
  },
];

export default menus;
