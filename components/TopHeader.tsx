"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import HeroIcons from './Icons';
import Icon from '../data/enum';
import {Tooltip} from "react-tooltip";
import {TopHeaderMenu} from "../data/interfaces";

interface TopHeaderProps {
  topHeaderMenus: TopHeaderMenu[];
}

const TopHeader: React.FC<TopHeaderProps> = () => {
  const {t} = useTranslation();
  const topHeaderMenus: TopHeaderMenu[] = [
    {
      id: 1,
      title: t('mobile_number'),
      icon: Icon.PhoneOutgoingIcon,
      link: 'tel:+4917685985727',
    },
    {
      id: 2,
      title: t('email_address'),
      icon: Icon.MailIcon,
      link: 'mailto:sumanstha999@gmail.com',
    }];

  return (
      <section className="section d-flex relative py-20">
        <div className='container d-flex align-center justify-between'>
          <div className='information d-flex align-center justify-between'>
            {topHeaderMenus.map(({id,title, icon, link}: {id: number; title: string; icon: Icon; link: string; }  ) => (
                <Link key={id} href={link} className="d-flex"  data-tooltip-id="top-menu-tooltip"
                      data-tooltip-content={title}
                      data-tooltip-place='bottom'>
                  <HeroIcons icon={icon} />
                </Link>
            ))}
          </div>
          <div className='language'>
            <ul className='nav d-flex'>
              <li className='active'>
                <Link href='#'>EN</Link>
              </li>
              <li>
                <Link href='#'>DE</Link>
              </li>
            </ul>
          </div>
        </div>
        <Tooltip id="top-menu-tooltip" />
      </section>
  );
};

export default TopHeader;
