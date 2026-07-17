"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import HeroIcons from "./Icons";
import SocialIcon from "./SocialIcon";
import TechBackground from "./TechBackground";
import Icon from "../data/enum";
import socials from "../data/socials";
import { CONTACT_ICONS } from "../data/backgroundIcons";

const ContactContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='contact-section section' id='contact'>
      <TechBackground icons={CONTACT_ICONS} />
      <div className='container'>
        <div className='contact-intro'>
          <div className='section-title'>
            <h2 className='title'>{t("contact_page_title")}</h2>
          </div>
          <p className='contact-message'>{t("contact_message")}</p>
        </div>

        <div className='contact-links'>
          <Link href='mailto:sumanstha999@gmail.com' className='contact-link'>
            <span className='contact-link-icon'>
              <HeroIcons icon={Icon.MailIcon} />
            </span>
            <span className='contact-link-text'>
              <span className='contact-link-label'>{t("label_email")}</span>
              <span className='contact-link-value'>
                sumanstha999@gmail.com
              </span>
            </span>
          </Link>

          {socials.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              target='_blank'
              className='contact-link'
            >
              <span className='contact-link-icon'>
                <SocialIcon name={social.name} />
              </span>
              <span className='contact-link-text'>
                <span className='contact-link-label'>
                  {social.name === "linkedin" ? "LinkedIn" : social.name}
                </span>
                <span className='contact-link-value'>{t("contact_connect")}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
