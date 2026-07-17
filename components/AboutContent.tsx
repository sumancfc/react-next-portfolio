"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import TechBackground from "./TechBackground";
import getYearsOfExperience from "../lib/getYearsOfExperience";
import { ABOUT_ICONS } from "../data/backgroundIcons";

const STACK_CATEGORIES = [
  {
    key: "frontend",
    labelKey: "label_frontend",
    items: ["HTML", "CSS/SCSS", "Tailwind", "Bootstrap", "JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    key: "backend",
    labelKey: "label_backend",
    items: ["Node.js", "Express", "Java Spring Boot"],
  },
  {
    key: "database",
    labelKey: "label_database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    key: "devops",
    labelKey: "label_devops",
    items: ["Docker", "Grafana", "AWS", "GitHub", "GitHub Actions"],
  },
  {
    key: "aiTools",
    labelKey: "label_ai_tools",
    items: ["Claude", "Gemini", "ChatGPT"],
  },
  {
    key: "os",
    labelKey: "label_os",
    items: ["Linux", "Windows", "macOS"],
  },
];

const AboutContent: React.FC = () => {
  const { t } = useTranslation();
  const yearsOfExperience = getYearsOfExperience();

  const bio = [
    t("about_bio_1", { years: yearsOfExperience }),
    t("about_bio_2"),
    t("about_bio_3"),
    t("about_bio_4"),
  ];

  return (
    <section className='about-section section' id='about'>
      <TechBackground icons={ABOUT_ICONS} />
      <div className='container'>
        <div className='row d-flex justify-between align-center'>
          <div className='about-image w-35'>
            <div className='about-photo-ring'>
              <svg
                className='about-photo-ring-svg'
                viewBox='0 0 220 220'
                aria-hidden='true'
              >
                <defs>
                  <path
                    id='openToWorkPath'
                    d='M 110,110 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0'
                    fill='none'
                  />
                </defs>
                <text className='about-photo-ring-text'>
                  <textPath href='#openToWorkPath' startOffset='0%'>
                    • {t("open_to_work").toUpperCase()} • {t("open_to_work").toUpperCase()} • {t("open_to_work").toUpperCase()} •
                  </textPath>
                </text>
              </svg>
              <div className='about-photo-inner'>
                <Image
                  src='/img/home-banner.png'
                  alt={t("name")}
                  width={170}
                  height={170}
                  quality={100}
                  loading='lazy'
                />
              </div>
            </div>
          </div>

          <div className='about-info w-60'>
            <div className='section-title'>
              <h2 className='title'>{t("about_page_title")}</h2>
            </div>
            <div className='about-comment'>
              <p className='about-comment-line'>{"/**"}</p>
              {bio.map((line, index) => (
                <p className='about-comment-line' key={index}>
                  <span className='about-comment-marker'>{" * "}</span>
                  {line}
                </p>
              ))}
              <p className='about-comment-line'>{" */"}</p>
            </div>

            <div className='json-card'>
              <div className='json-card-header'>
                <span className='window-dot window-dot-red' />
                <span className='window-dot window-dot-yellow' />
                <span className='window-dot window-dot-green' />
                <span className='json-card-filename'>about.json</span>
              </div>

              {/* The JSON syntax below is decorative — screen readers get
                  this plain description list instead. */}
              <dl className='sr-only'>
                <dt>{t("label_name")}</dt>
                <dd>{t("name")}</dd>
                <dt>{t("label_role")}</dt>
                <dd>{t("role")}</dd>
                <dt>{t("label_location")}</dt>
                <dd>{t("location_value")}</dd>
                <dt>{t("label_email")}</dt>
                <dd>sumanstha999@gmail.com</dd>
                <dt>{t("label_experience")}</dt>
                <dd>{yearsOfExperience}+ years</dd>
                {STACK_CATEGORIES.map((category) => (
                  <React.Fragment key={category.key}>
                    <dt>{t(category.labelKey)}</dt>
                    <dd>{category.items.join(", ")}</dd>
                  </React.Fragment>
                ))}
                <dt>{t("label_hireable")}</dt>
                <dd>{t("hireable_yes")}</dd>
              </dl>

              <div className='json-card-body' aria-hidden='true'>
                <span className='code-row'>
                  <span className='code-op'>{"{"}</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"name"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-string'>{'"'}{t("name")}{'"'}</span>
                  <span className='code-op'>,</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"role"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-string'>{'"'}{t("role")}{'"'}</span>
                  <span className='code-op'>,</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"location"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-string'>{'"'}{t("location_value")}{'"'}</span>
                  <span className='code-op'>,</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"email"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-string'>{'"sumanstha999@gmail.com"'}</span>
                  <span className='code-op'>,</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"experience"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-string'>{`"${yearsOfExperience}+ years"`}</span>
                  <span className='code-op'>,</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"stack"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-op'>{"{"}</span>
                </span>
                {STACK_CATEGORIES.map((category, catIndex) => (
                  <span className='code-row code-row-indent-2' key={category.key}>
                    <span className='code-var'>{`"${category.key}"`}</span>
                    <span className='code-op'>:</span>{" "}
                    <span className='code-op'>[</span>
                    {category.items.map((item, index) => (
                      <span key={item}>
                        <span className='code-string'>{'"'}{item}{'"'}</span>
                        {index < category.items.length - 1 && (
                          <span className='code-op'>, </span>
                        )}
                      </span>
                    ))}
                    <span className='code-op'>]</span>
                    {catIndex < STACK_CATEGORIES.length - 1 && (
                      <span className='code-op'>,</span>
                    )}
                  </span>
                ))}
                <span className='code-row code-row-indent'>
                  <span className='code-op'>{"},"}</span>
                </span>
                <span className='code-row code-row-indent'>
                  <span className='code-var'>{'"hireable"'}</span>
                  <span className='code-op'>:</span>{" "}
                  <span className='code-boolean'>true</span>
                </span>
                <span className='code-row'>
                  <span className='code-op'>{"}"}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
