import Icon from "./enum";

export interface Menu {
  id: string;
  title: string;
  icon: Icon;
  link: string;
}

export interface Contact {
  id: string;
  information: string;
  icon: Icon;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: Icon;
}

export interface Social {
  id: string;
  name: string;
  link: string;
  src: string;
}

interface Responsibility {
  task: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: Responsibility[];
}
