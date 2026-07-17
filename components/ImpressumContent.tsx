"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const ImpressumContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='impressum-section section' id='impressum'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='title'>{t("impressum_page_title")}</h2>
        </div>

        <div className='impressum-body'>
          <h3>{t("impressum_heading_tmg")}</h3>
          <p>
            {t("name")}
            <br />
            {t("impressum_street")}
            <br />
            {t("impressum_city")}
            <br />
            {t("impressum_country")}
          </p>

          <h3>{t("impressum_heading_contact")}</h3>
          <p>
            {t("label_email")}:{" "}
            <a href='mailto:sumanstha999@gmail.com'>sumanstha999@gmail.com</a>
          </p>

          <h3>{t("impressum_heading_responsible")}</h3>
          <p>
            {t("name")}
            <br />
            {t("impressum_same_address")}
          </p>

          <h3>{t("impressum_heading_disclaimer")}</h3>
          <p>{t("impressum_disclaimer_text")}</p>
        </div>
      </div>
    </section>
  );
};

export default ImpressumContent;
