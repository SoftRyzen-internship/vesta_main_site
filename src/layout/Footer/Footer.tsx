'use client';

import { FC } from 'react';

import { Logo } from '@/components/ui/Logo';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { NavList } from '@/components/common/NavList';

import { socialMedia, footer, footerPhones, footerNavigation } from '@/data';

import SoftRyzen from '/public/icons/softryzen.svg';
import GoIt from '/public/icons/goIt.svg';
import ScrollUp from '/public/icons/scrollUp.svg';

const scrollToTop = () => {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = () => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollInterval);
    }
  };

  requestAnimationFrame(scrollInterval);
};

export const Footer: FC = () => {
  return (
    <footer className='bg-green'>
      <div className='container pb-[15px] pt-[50px] text-white transition md:pb-[23px] md:pt-[60px] xl:pb-[28px]'>
        <div>
          <div className='xl:flex'>
            <Logo />
            <div className='relative flex flex-col transition md:flex-row xl:w-full xl:pl-[277px]'>
              <div className='mb-10  mt-[43px] flex flex-col gap-[15px] text-body4 font-normal text-white transition md:mt-[40px] xl:mt-0'>
                <NavList navList={footerNavigation} forFooter={true} />
                <button className='absolute right-0' onClick={scrollToTop}>
                  <ScrollUp className='fill-bgText transition hover:fill-orangeText focus:fill-orangeText' />
                </button>
              </div>
              <div className='flex flex-col gap-[15px] pb-10 text-body4 font-normal text-white transition md:pb-[96px] md:pl-[169px]  md:pt-[40px] xl:pb-[100px]  xl:pl-[236px] xl:pt-0'>
                {footerPhones.map((item, index) => (
                  <div key={index} className='flex flex-col gap-1'>
                    <p className='text-greenHover text-whiteGrey'>
                      {item.typeOfHelp}
                    </p>
                    <a
                      href={`tel:${item.phone}`}
                      className='transition hover:text-orangeText'
                      aria-label={`Позвонити за номером  ${item.phone}`}
                    >
                      {item.phone}
                    </a>
                  </div>
                ))}
                <a
                  href={`mailto:${footer['@mail']}`}
                  className='transition hover:text-orangeText'
                  aria-label={`Відіслати лист на пошту ${footer['@mail']}`}
                >
                  {footer['@mail']}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='transition xl:flex xl:gap-[91px]'>
          <hr className='border-0.3px	 absolute left-0 w-full border-accent border-opacity-[0.3] transition xl:hidden' />
          <div className='flex flex-col py-[15px] transition md:py-5 md:pl-[10px] xl:pb-0 xl:pl-0 xl:pt-[20px]'>
            <div className='flex flex-col gap-[15px] transition md:flex-row-reverse md:items-center md:justify-between xl:gap-[270px]'>
              <SocialMedia forFooter={true} socialMedia={socialMedia} />
              <a
                href={footer.linkPolicy}
                rel='noopener noreferrer nofollow'
                target='_blank'
                aria-label={`Відкрити сторінку ${footer.namePolicy}`}
                className='w-fit pr-3 text-body4 font-normal text-greenHover transition hover:text-orangeText'
              >
                {footer.namePolicy}
              </a>
            </div>
          </div>
          <hr className='border-0.3px	 absolute left-0 w-full border-accent border-opacity-[0.3] ' />
          <div className='flex flex-col gap-[10px] transition md:flex-row md:items-center xl:pt-[20px]'>
            <p className='pt-[15px] text-body4 font-normal text-greenHover xl:pr-[30px] xl:pt-0'>
              {footer.footerCreated}
            </p>
            <div className='flex gap-5 md:pl-[30px] md:pt-5 xl:pl-0 xl:pt-0'>
              <a
                href={footer.linkGOIT}
                rel='noopener noreferrer nofollow'
                target='_blank'
                aria-label={`Відкрити головну сторінку ${footer.nameGOIT}`}
              >
                <GoIt
                  className='fill-greenHover transition hover:fill-orangeText'
                  width={67}
                  height={20}
                />
              </a>
              <a
                href={footer.linkSoftRyzen}
                rel='noopener noreferrer nofollow'
                target='_blank'
                aria-label={`Відкрити головну сторінку ${footer.nameSoftRyzen}`}
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
