"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import TechBackground from "./TechBackground";
import { NOT_FOUND_ICONS } from "../data/backgroundIcons";
import { useRequestedPath } from "../lib/useRequestedPath";

const NotFoundContent: React.FC = () => {
  const { t } = useTranslation();
  const path = useRequestedPath(t("not_found_fallback_path"));

  return (
    <section className='not-found-section section' id='not-found'>
      <TechBackground icons={NOT_FOUND_ICONS} />
      <div className='container'>
        <div className='not-found-card'>
          <div className='not-found-robot' aria-hidden='true'>
            <svg viewBox='0 0 160 160' className='not-found-robot-svg'>
              <rect x='45' y='55' width='70' height='60' rx='16' className='not-found-robot-head' />
              <circle cx='80' cy='38' r='6' className='not-found-robot-antenna-tip' />
              <line x1='80' y1='44' x2='80' y2='55' className='not-found-robot-antenna' />
              <circle cx='64' cy='82' r='7' className='not-found-robot-eye' />
              <circle cx='96' cy='82' r='7' className='not-found-robot-eye' />
              <path d='M62 102 q18 10 36 0' className='not-found-robot-mouth' />
              <line x1='30' y1='95' x2='45' y2='85' className='not-found-robot-arm' />
              <line x1='130' y1='95' x2='115' y2='85' className='not-found-robot-arm' />
            </svg>
            <div className='not-found-speech-bubble'>{t("not_found_speech_bubble")}</div>
          </div>
          <span className='sr-only'>{t("not_found_robot_alt")}</span>

          <div className='terminal not-found-terminal'>
            <div className='terminal-header'>
              <span className='window-dot window-dot-red' aria-hidden='true' />
              <span className='window-dot window-dot-yellow' aria-hidden='true' />
              <span className='window-dot window-dot-green' aria-hidden='true' />
              <span className='terminal-title'>{t("not_found_terminal_title")}</span>
            </div>
            <div className='terminal-body'>
              <p className='terminal-line'>
                <span className='terminal-prompt'>suman@career</span>
                <span className='terminal-path'>:~$</span>{" "}
                <span className='terminal-cmd'>{t("not_found_command", { path })}</span>
              </p>
              <p className='terminal-line terminal-line-error'>
                {t("not_found_output", { path })}
              </p>
              <p className='terminal-line'>
                <span className='terminal-prompt'>suman@career</span>
                <span className='terminal-path'>:~$</span>
                <span className='code-cursor' aria-hidden='true' />
              </p>
            </div>
          </div>

          <p className='not-found-message'>{t("not_found_message")}</p>

          <Link href='/' className='btn d-flex justify-center align-center not-found-cta'>
            {t("not_found_cta_label")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;
