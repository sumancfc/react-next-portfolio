import Icon from "./enum";

interface Contact {
  id: string;
  information: string;
  icon: Icon;
}

const contacts: Contact[] = [
  {
    id: "1",
    information: "Geschwister Scholl Straße-15, 73732 Esslingen",
    icon: Icon.LocationMarkerIcon,
  },
  {
    id: "2",
    information: "+4917685985727",
    icon: Icon.DeviceMobileIcon,
  },
  {
    id: "3",
    information: "sumanstha999@gmail.com",
    icon: Icon.MailIcon,
  },
];

export default contacts;
