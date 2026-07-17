import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiGithub,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiGit,
  SiKubernetes,
  SiPostgresql,
  SiTailwindcss,
  SiOpenjdk,
  SiSpringboot,
  SiLinux,
  SiAngular,
  SiMongodb,
  SiPrometheus,
  SiGrafana,
  SiExpress,
  SiMysql,
  SiGitlab,
  SiGmail,
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiMessenger,
  SiSass,
} from "react-icons/si";
import { TbBrain, TbMoodConfuzed, TbGhost } from "react-icons/tb";
import { BackgroundIconConfig } from "../components/TechBackground";

export const HOME_ICONS: BackgroundIconConfig[] = [
  { Icon: SiReact, top: "12%", left: "8%", size: 46, delay: "0s", duration: "9s" },
  { Icon: SiDocker, top: "68%", left: "6%", size: 40, delay: "1.2s", duration: "11s" },
  { Icon: SiGithub, top: "20%", left: "88%", size: 44, delay: "0.6s", duration: "10s" },
  { Icon: SiTypescript, top: "78%", left: "82%", size: 38, delay: "2s", duration: "8s" },
  { Icon: SiJavascript, top: "8%", left: "45%", size: 34, delay: "1.6s", duration: "12s" },
  { Icon: SiNodedotjs, top: "50%", left: "92%", size: 36, delay: "0.3s", duration: "9.5s" },
  { Icon: SiNextdotjs, top: "88%", left: "40%", size: 34, delay: "2.4s", duration: "10.5s" },
  { Icon: SiPython, top: "42%", left: "4%", size: 36, delay: "0.9s", duration: "11.5s" },
  { Icon: SiGit, top: "30%", left: "70%", size: 30, delay: "1.8s", duration: "8.5s" },
  { Icon: SiKubernetes, top: "62%", left: "50%", size: 32, delay: "2.8s", duration: "13s" },
  { Icon: SiPostgresql, top: "10%", left: "65%", size: 30, delay: "1s", duration: "9s" },
  { Icon: SiTailwindcss, top: "85%", left: "12%", size: 32, delay: "0.4s", duration: "10s" },
  { Icon: SiOpenjdk, top: "55%", left: "25%", size: 34, delay: "1.4s", duration: "10.5s" },
  { Icon: SiSpringboot, top: "25%", left: "55%", size: 32, delay: "2.2s", duration: "9.8s" },
  { Icon: SiLinux, top: "75%", left: "60%", size: 46, delay: "0.7s", duration: "11.2s" },
  { Icon: TbBrain, top: "15%", left: "30%", size: 36, delay: "1.1s", duration: "10.8s" },
];

/* Matches the stack shown in the About page's JSON card, rather than a
   generic dev/AI mix. */
export const ABOUT_ICONS: BackgroundIconConfig[] = [
  { Icon: SiReact, top: "14%", left: "10%", size: 44, delay: "0s", duration: "10s" },
  { Icon: SiTypescript, top: "72%", left: "85%", size: 40, delay: "1.5s", duration: "11s" },
  { Icon: SiNodedotjs, top: "60%", left: "8%", size: 34, delay: "0.8s", duration: "9.5s" },
  { Icon: SiAngular, top: "20%", left: "88%", size: 32, delay: "2s", duration: "8.8s" },
  { Icon: SiMongodb, top: "85%", left: "30%", size: 30, delay: "1.2s", duration: "10.2s" },
  { Icon: SiDocker, top: "40%", left: "92%", size: 30, delay: "0.5s", duration: "9s" },
];

export const EXPERIENCE_ICONS: BackgroundIconConfig[] = [
  { Icon: SiAngular, top: "12%", left: "10%", size: 40, delay: "0s", duration: "9.5s" },
  { Icon: SiMongodb, top: "70%", left: "6%", size: 38, delay: "1.3s", duration: "10.5s" },
  { Icon: SiDocker, top: "18%", left: "88%", size: 40, delay: "0.6s", duration: "9s" },
  { Icon: SiPrometheus, top: "80%", left: "82%", size: 34, delay: "2.1s", duration: "11s" },
  { Icon: SiGrafana, top: "45%", left: "92%", size: 32, delay: "1.7s", duration: "10s" },
  { Icon: SiExpress, top: "55%", left: "4%", size: 30, delay: "0.9s", duration: "8.7s" },
  { Icon: SiMysql, top: "88%", left: "45%", size: 32, delay: "1.4s", duration: "10.8s" },
  { Icon: SiGitlab, top: "10%", left: "50%", size: 30, delay: "0.4s", duration: "9.3s" },
];

export const CONTACT_ICONS: BackgroundIconConfig[] = [
  { Icon: SiGmail, top: "16%", left: "12%", size: 42, delay: "0s", duration: "10s" },
  { Icon: SiWhatsapp, top: "70%", left: "8%", size: 38, delay: "1.2s", duration: "9.5s" },
  { Icon: SiTelegram, top: "22%", left: "88%", size: 36, delay: "0.7s", duration: "10.5s" },
  { Icon: SiDiscord, top: "78%", left: "85%", size: 36, delay: "1.8s", duration: "9.8s" },
  { Icon: SiMessenger, top: "50%", left: "94%", size: 30, delay: "2.2s", duration: "11s" },
];

/* Matches the portfolio project's own stack, shown on the Work page. */
export const WORK_ICONS: BackgroundIconConfig[] = [
  { Icon: SiNextdotjs, top: "14%", left: "10%", size: 42, delay: "0s", duration: "10s" },
  { Icon: SiTypescript, top: "70%", left: "88%", size: 38, delay: "1.4s", duration: "9.5s" },
  { Icon: SiReact, top: "60%", left: "6%", size: 34, delay: "0.7s", duration: "10.5s" },
  { Icon: SiSass, top: "20%", left: "90%", size: 32, delay: "2s", duration: "9s" },
  { Icon: SiGithub, top: "85%", left: "35%", size: 30, delay: "1.1s", duration: "10.8s" },
];

/* A slightly bewildered/lost mix — matches the "even an AI got confused"
   tone of the 404 page. */
export const NOT_FOUND_ICONS: BackgroundIconConfig[] = [
  { Icon: TbBrain, top: "14%", left: "10%", size: 42, delay: "0s", duration: "10s" },
  { Icon: TbMoodConfuzed, top: "70%", left: "88%", size: 38, delay: "1.4s", duration: "9.5s" },
  { Icon: TbGhost, top: "60%", left: "6%", size: 34, delay: "0.7s", duration: "10.5s" },
  { Icon: TbMoodConfuzed, top: "20%", left: "90%", size: 30, delay: "2s", duration: "9s" },
  { Icon: TbBrain, top: "85%", left: "35%", size: 30, delay: "1.1s", duration: "10.8s" },
];
