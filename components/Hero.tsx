"use client";
import { useTranslation } from "react-i18next";
import Icon from "../data/enum";
import ButtonLink from "./ButtonLink";

const CV_File_Path = '/Suman_Shrestha_Resume.pdf';
const Hero: React.FC = () => {
  const {t} = useTranslation();

  return (

        <div className='col-6 introduction'>
          <div className='type-text'>
            <h6>{t("greeting")}</h6>
            <h1>{t("name")}</h1>
            <h4>{t("role")}</h4>
            <p className='desc'>
                {t("description")}
            </p>

            <div className='home-btn'>
              <ButtonLink
                textTitle={t("download_cv")}
                icon={Icon.DownloadIcon}
                link={CV_File_Path}
              />
            </div>
          </div>
        </div>
  );
};

export default Hero;
