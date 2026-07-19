"use client";
import React, { useCallback, useMemo } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import HeroIcons from './Icons';
import SocialIcon from './SocialIcon';
import Icon from '../data/enum';
import { Tooltip } from "react-tooltip";
import { TopHeaderMenu } from "../data/interfaces";
import socials from "../data/socials";
import { persistLanguagePreference } from "../lib/languagePreference";

const languageOptions = [
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
];

const FloatingContact: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    persistLanguagePreference(lng);
  }, [i18n]);

  const contactLinks = useMemo<TopHeaderMenu[]>(() => [
    {
      id: 2,
      title: t('email_address'),
      icon: Icon.MailIcon,
      link: 'mailto:sumanstha999@gmail.com',
    }
  ], [t]);

  return (
    <>
      <section className="section d-flex relative py-20">
        <div className='container d-flex align-center justify-end'>
          <div className='lang-switcher'>
            <div
              className='lang-slider'
              style={{ transform: `translateX(${i18n.language === 'en' ? '100%' : '0%'})` }}
            />
            {languageOptions.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`lang-btn${i18n.language === code ? ' active' : ''}`}
                aria-label={`Switch to ${label}`}
              >
                <span className='lang-flag'>{flag}</span>
                <span className='lang-label'>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className='float-icons'>
        {contactLinks.map(({ id, title, icon, link }) => (
          <Link
            key={id}
            href={link}
            className='float-icon'
            aria-label={title}
            data-tooltip-id="top-menu-tooltip"
            data-tooltip-content={title}
            data-tooltip-place='left'
          >
            <HeroIcons icon={icon} />
          </Link>
        ))}
        {socials.map((social) => (
          <Link
            key={social.id}
            href={social.link}
            target='_blank'
            className='float-icon'
            aria-label={social.name}
            data-tooltip-id="top-menu-tooltip"
            data-tooltip-content={social.name}
            data-tooltip-place='left'
          >
            <SocialIcon name={social.name} />
          </Link>
        ))}
        <Link
          href='/Suman_Shrestha_Resume.pdf'
          download
          className='float-icon'
          aria-label={t('download_cv')}
          data-tooltip-id="top-menu-tooltip"
          data-tooltip-content={t('download_cv')}
          data-tooltip-place='left'
        >
          <HeroIcons icon={Icon.DownloadIcon} />
        </Link>
        {/* "Impressum" is the standard term for this legal notice in both
            languages, so the label itself doesn't need translating. */}
        <Link
          href='/impressum'
          className='float-icon'
          aria-label='Impressum'
          data-tooltip-id="top-menu-tooltip"
          data-tooltip-content='Impressum'
          data-tooltip-place='left'
        >
          <HeroIcons icon={Icon.LegalIcon} />
        </Link>
      </div>
      <Tooltip id="top-menu-tooltip" />
    </>
  );
};

export default FloatingContact;
