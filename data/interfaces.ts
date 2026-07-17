import Icon from "./enum";

export interface Menu {
  id: string;
  title: string;
  icon: Icon;
  link: string;
}

export interface Social {
  id: string;
  name: string;
  link: string;
  src: string;
}

interface Responsibility {
  /** i18next key — resolved with t() at render time, not display text. */
  taskKey: string;
}

export interface Experience {
  id: string;
  /** Company names aren't translated, so this stays as display text. */
  company: string;
  /** i18next keys — resolved with t() at render time, not display text. */
  roleKey: string;
  typeKey: string;
  locationKey: string;
  startDate: string;
  /** "MM/YYYY", or "Present" for an ongoing role. */
  endDate: string;
  responsibilities: Responsibility[];
}

export interface TopHeaderMenu {
  id: number;
  title: string;
  icon: Icon;
  link: string;
}