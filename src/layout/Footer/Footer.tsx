'use client';
import { Logo } from '@/components/ui/Logo';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { socialMedia, footer, footerNavigation } from '@/data';

import { FC } from 'react';
import SoftRyzen from '/public/icons/softryzen.svg';
import GoIt from '/public/icons/goIt.svg';
import { NavList } from '@/components/common/NavList';
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
      <div className='container pb-[15px] pt-[50px] text-white md:pb-[23px] md:pt-[60px] xl:pb-[28px] transition'>
        <div>
          <div className='xl:flex'>
            <Logo />
            <div className='relative flex flex-col md:flex-row xl:w-full xl:pl-[277px] transition'>
              <div className='mb-10  mt-[43px] flex flex-col gap-[15px] text-body4 font-normal text-white md:mt-[40px] xl:mt-0 transition'>
                <NavList navList={footerNavigation} forFooter={true} />
                <button className='absolute right-0' onClick={scrollToTop}>
                  <ScrollUp className='fill-bgText hover:fill-orangeText' />
                </button>
              </div>
              <div className='flex flex-col gap-[15px] pb-10 text-body4 font-normal text-white md:pb-[96px] md:pl-[169px] md:pt-[40px]  xl:pb-[100px] xl:pl-[236px]  xl:pt-0 transition'>
                <div className='flex flex-col gap-1'>
                  <p className='text-greenHover text-whiteGrey'>
                    Юридичні послуги
                  </p>
                  <a
                    href='tel:+321321'
                    className='transition hover:text-orangeText'
                  >
                    068 924 32 34
                  </a>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-greenHover text-whiteGrey'>
                    Юридичні послуги
                  </p>
                  <a
                    href='tel:+321321'
                    className='transition hover:text-orangeText'
                  >
                    068 924 32 34
                  </a>
                </div>
                <a
                  href='mailto:mail@example.com'
                  className='transition hover:text-orangeText'
                >
                  charity.vo.vesta@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:flex xl:gap-[91px] transition'>
          <hr className='border-0.3px	 absolute left-0 w-full border-accent border-opacity-[0.3] xl:hidden transition' />
          <div className='flex flex-col py-[15px] md:py-5 md:pl-[10px] xl:pb-0 xl:pt-[20px] xl:pl-0 transition'>
            <div className='flex flex-col gap-[15px] md:flex-row-reverse md:items-center md:justify-between xl:gap-[270px] transition'>
              <SocialMedia forFooter={true} socialMedia={socialMedia} />
              <a
                href={footer.linkPolicy}
                rel='noopener noreferrer nofollow'
                target='_blank'
                aria-label='Відкрити сторінку політики'
                className='w-fit pr-3 text-body4 font-normal text-greenHover transition hover:text-orangeText'
              >
                Політики
              </a>
            </div>
          </div>
          <hr className='border-0.3px	 absolute left-0 w-full border-accent border-opacity-[0.3] ' />
          <div className='flex flex-col gap-[10px] md:flex-row md:items-center xl:pt-[20px] transition'>
            <p className='pt-[15px] text-body4 font-normal text-greenHover xl:pt-0 xl:pr-[30px]'>
              {footer.footerCreated}
            </p>
            <div className='flex gap-5 md:pl-[30px] md:pt-5 xl:pt-0 xl:pl-0'>
              <a
                href={footer.linkGOIT}
                rel='noopener noreferrer nofollow'
                target='_blank'
                aria-label='Відкрити головну сторінку GOIT'
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
                aria-label='Відкрити головну сторінку SoftRyzen'
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
