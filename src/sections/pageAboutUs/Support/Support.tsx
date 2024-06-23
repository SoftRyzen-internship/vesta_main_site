import { FC } from 'react';
import Image from 'next/image';

import { SupportCardAbout } from '@/components/common/SupportCardAbout';
import { LinkButton } from '@/components/ui/LinkButton';

import { supportAboutData } from '@/data';

import { getSpecialWords } from '@/utils';

export const Support: FC = () => {
  const {
    title,
    description,
    link: { text, link },
    subtitle,
    img,
    imgAlt,
    cards,
  } = supportAboutData;
  return (
    <section className='smOnly:py-[60px] md:pt-[100px] xl:pt-[130px]'>
      <div className='container'>
        <div className='xl:mb-[130px] xl:flex xl:gap-[128px]'>
          <h2 className='mb-[30px] font-kyiv text-h3 text-green md:w-[596px] md:text-h3_tab xl:mb-0 xl:text-h3_desk'>
            <span className='bg-yellowLight'>
              {getSpecialWords(title, 0, 3)}
            </span>
            {getSpecialWords(title, 3, title.length - 4, { start: true })}
          </h2>
          <div>
            <p className='paragraph mb-10 md:w-[415px]'>{description}</p>
            <LinkButton href={link} className='mb-[60px] md:mb-[100px] xl:mb-0'>
              {text}
            </LinkButton>
          </div>
        </div>
        <div className='relative xl:flex xl:gap-[128px]'>
          <Image
            src={img}
            width={328}
            height={437}
            alt={imgAlt}
            className='mb-[50px] h-[437px] w-[328px] rounded-ee-[150px] object-cover md:h-[691px] md:w-[566px] md:rounded-ee-[200px] xl:mb-0 xl:h-[872px] xl:w-[596px]'
          />
          <p className='absolute left-10 top-10 text-body3 font-medium uppercase tracking-[-0.01em] text-bgText md:w-[325px] xl:text-body3_desk'>
            {subtitle}
          </p>
          <ul className='md:w-[566px] xl:w-[492px]'>
            {cards.map((item, index) => (
              <li key={index} className='mb-10 last:mb-0'>
                <SupportCardAbout
                  item={{
                    ...item,
                    icon:
                      (item.icon === 'balanceIcon' && item.icon) ||
                      (item.icon === 'infoIcon' && item.icon) ||
                      (item.icon === 'heartHandIcon' && item.icon) ||
                      'heartHandIcon',
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
