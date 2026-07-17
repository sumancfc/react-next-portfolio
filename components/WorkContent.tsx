"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { SiNextdotjs, SiTypescript, SiReact, SiSass } from "react-icons/si";
import TechBackground from "./TechBackground";
import { WORK_ICONS } from "../data/backgroundIcons";

const PROJECT_STACK = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "SCSS", Icon: SiSass },
];

const WorkContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='work-section section' id='work'>
      <TechBackground icons={WORK_ICONS} />
      <div className='container'>
        <div className='section-title'>
          <h2 className='title'>{t("work_page_title")}</h2>
        </div>
        <p className='work-intro'>{t("work_intro")}</p>

        <div className='project-card'>
          <div className='project-card-header'>
            <span className='window-dot window-dot-red' />
            <span className='window-dot window-dot-yellow' />
            <span className='window-dot window-dot-green' />
            <span className='project-card-filename'>portfolio.tsx</span>
          </div>
          <div className='project-card-body'>
            <h3 className='project-card-title'>{t("project_title")}</h3>
            <p className='project-card-description'>{t("project_description")}</p>
            <ul className='project-card-stack'>
              {PROJECT_STACK.map(({ name, Icon }) => (
                <li key={name} className='project-card-tech'>
                  <Icon aria-hidden='true' />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className='work-callout'>
          {t("work_callout_before")}
          <Link href='/experience'>{t("work_callout_link_label")}</Link>
          {t("work_callout_after")}
        </p>
      </div>
    </section>
  );
};

export default WorkContent;
