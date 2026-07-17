"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import experiences from "../data/experience";
import ExperienceTab from "./ExperienceTab";
import TechBackground from "./TechBackground";
import { EXPERIENCE_ICONS } from "../data/backgroundIcons";

const ExperienceContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='experience-section section' id='experience'>
      <TechBackground icons={EXPERIENCE_ICONS} />
      <div className='container'>
        <div className='section-title'>
          <h2 className='title'>{t("experience_page_title")}</h2>
        </div>
        <ExperienceTab experiences={experiences} />
      </div>
    </section>
  );
};

export default ExperienceContent;
