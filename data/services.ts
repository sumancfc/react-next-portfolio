import Icon from "./enum";
import { Service } from "./interfaces";

const services: Service[] = [
  {
    id: "1",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
    icon: Icon.DesktopComputerIcon,
  },
  {
    id: "2",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
    icon: Icon.CodeIcon,
  },
  {
    id: "3",
    title: "Seo Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vitae doloribus error ex sapiente inventore quo ipsum praesentiusequi tempore veritatis, obcaecati in sunt fugiat exercitationem accusantium assumenda.",
    icon: Icon.SpeakerphoneIcon,
  },
];

export default services;
