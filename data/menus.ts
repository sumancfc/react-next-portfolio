import { Menu } from "./interfaces";
import Icon from "./enum";

const menus: Menu[] = [
  { id: "1", title: "home", icon: Icon.HomeIcon, link: "/" },
  {
    id: "2",
    title: "about_me",
    icon: Icon.IdentificationIcon,
    link: "/about",
  },
  {
    id: "3",
    title: "experience",
    icon: Icon.CollectionIcon,
    link: "/experience",
  },
  {
    id: "4",
    title: "portfolio",
    icon: Icon.DesktopComputerIcon,
    link: "/work",
  },
  {
    id: "5",
    title: "contact",
    icon: Icon.PhoneOutgoingIcon,
    link: "/contact",
  },
];

export default menus;
