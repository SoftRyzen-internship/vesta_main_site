'use client';
import React, { FC, useEffect, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { NavList } from '@/components/common/NavList';

import SoftRyzen from '/public/icons/softryzen.svg';
import GoIt from '/public/icons/goIt.svg';
import ScrollUp from '/public/icons/scrollUp.svg';

import { fetchData } from '@/actions/fetchData';

import { getContact } from '@/graphql/contactSchema';

import { FooterOrganizationResponse, FooterPhones } from './Footer.types';

import { scrollToTop } from '@/utils';

import { socialMedia, footer, footerNavigation } from '@/data';

export const Footer: FC = () => {
  const [supportCards, setSupportCards] = useState<FooterPhones[]>([]);
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data: FooterOrganizationResponse = await fetchData<FooterOrganizationResponse>(getContact);
        const { legal_support, psychological_support, head_organization, email } = data.contact.data.attributes;

        const updatedSupportCards: FooterPhones[] = [
          { id: 1, typeOfHelp: 'Юридичні послуги', aria: 'Зателефонувати за юридичною допомогою', phone: legal_support },
          { id: 2, typeOfHelp: 'Психологічні послуги:', aria: 'Зателефонувати за психологічною допомогою', phone: psychological_support },
          { id: 3, typeOfHelp: 'Зв\'язатися за нами', aria: 'Зателефонувати організції', phone: head_organization }
        ];

        setSupportCards(updatedSupportCards);
        setEmail(email);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <footer className='bg-green'>
      <div className='container pb-[15px] pt-[50px] text-white transition md:pb-[23px] md:pt-[60px] xl:pb-[28px]'>
        <div>
          <div className='xl:flex'>
            <Logo />
            <div className='relative flex flex-col transition md:flex-row xl:w-full xl:pl-[277px]'>
              <div className='mb-10 mt-[43px] flex flex-col gap-[15px] text-body4 font-normal text-white transition md:mt-[40px] xl:mt-0'>
                <NavList navList={footerNavigation} forFooter={true} />
                <button className='absolute right-0' onClick={scrollToTop}>
                  <ScrollUp className='fill-bgText transition hover:fill-orangeText focus:fill-orangeText' />
                </button>
              </div>
              <div className='flex flex-col gap-[15px] pb-10 text-body4 font-normal text-white transition md:pb-[96px] md:pl-[169px] md:pt-[40px] xl:pb-[100px] xl:pl-[236px] xl:pt-0'>
                {supportCards.map(({ id, typeOfHelp, aria, phone }) => (
                  <div key={id} className='flex flex-col gap-1'>
                    <p className='text-greenHover text-whiteGrey'>
                      {typeOfHelp}
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className='transition hover:text-orangeText'
                      aria-label={`${aria}`}
                    >
                      {phone}
                    </a>
                  </div>
                ))}
                <a
                  href={`mailto:${email}`}
                  className='transition hover:text-orangeText'
                  aria-label={footer.ariaEmail}
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='transition xl:flex xl:gap-[91px]'>
          <hr className='border-0.3px absolute left-0 w-full border-accent border-opacity-[0.3] transition xl:hidden' />
          <div className='flex flex-col py-[15px] transition md:py-5 md:pl-[10px] xl:pb-0 xl:pl-0 xl:pt-[20px]'>
            <div className='flex flex-col gap-[15px] transition md:flex-row-reverse md:items-center md:justify-between xl:gap-[270px]'>
              <SocialMedia lightMode={true} socialMedia={socialMedia} />
              <a
                href={footer.linkPolicy}
                rel={footer.rel}
                target={footer.target}
                aria-label={footer.ariaPolicy}
                className='w-fit pr-3 text-body4 font-normal text-greenHover transition hover:text-orangeText'
              >
                {footer.namePolicy}
              </a>
            </div>
          </div>
          <hr className='border-0.3px absolute left-0 w-full border-accent border-opacity-[0.3]' />
          <div className='flex flex-col gap-[10px] transition md:flex-row md:items-center xl:pt-[20px]'>
            <p className='pt-[15px] text-body4 text-greenHover xl:pr-[30px] xl:pt-0'>
              {footer.footerCreated}
            </p>
            <div className='flex gap-5 md:pl-[30px] md:pt-5 xl:pl-0 xl:pt-0'>
              <a
                href={footer.linkGOIT}
                rel={footer.rel}
                target={footer.target}
                aria-label={footer.ariaGOIT}
              >
                <GoIt
                  className='fill-greenHover transition hover:fill-orangeText'
                  width={67}
                  height={20}
                />
              </a>
              <a
                href={footer.linkSoftRyzen}
                rel={footer.rel}
                target={footer.target}
                aria-label={footer.ariaSoftRyzen}
              >
                <SoftRyzen
                  className='fill-greenHover transition hover:fill-orangeText'
                  width={134}
                  height={19}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
