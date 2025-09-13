"use client";
import { useTranslation } from "react-i18next";
import Icon from "../data/enum";
import ButtonLink from "./ButtonLink";


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
                textTitle='Download CV'
                icon={Icon.DownloadIcon}
                link='#'
              />
            </div>
          </div>
        </div>
  );
};

export default Hero;
