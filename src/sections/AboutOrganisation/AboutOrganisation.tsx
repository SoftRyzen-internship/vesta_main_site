import { FC } from 'react';

import { SupportCards } from '@/components/common/SupportCards';
import { ScrollBox } from '@/components/ui/ScrollBox';
import { getSpecialWords } from '@/utils';

import { supportCards, aboutOrganisation } from '@/data';

export const AboutOrganisation: FC = () => {
  const { caption, title, titleText, refreshData } = aboutOrganisation;

  return (
    <section>
      <div className='container py-[60px] md:py-[100px] xl:flex xl:justify-between'>
        <p className='text-caption font-medium uppercase text-darkGrey'>
          {caption}
        </p>
        <div className='xl:flex xl:flex-col'>
          <h3
            className='my-[30px] font-kyiv text-h3 font-bold text-green 
            transition md:w-[596px] md:text-h3_tab xl:mb-[20px] xl:mt-0 xl:w-[700px] xl:text-h3_desk'
          >
            {getSpecialWords(title, 0, 8, { end: true })}
            <span className='bg-yellowLight'>
              {getSpecialWords(title, 8, 2)}
            </span>
            {getSpecialWords(title, 10, 4, { start: true })}
          </h3>
          <p className='text-body4 font-normal text-darkGrey transition md:w-[492px] md:text-body4_tab xl:w-[465px] xl:text-body4_desk'>
            {titleText}
          </p>
        </div>
      </div>
      <div className='container'>
        <p
          className='pb-[10px] text-body4 font-normal text-darkGrey transition xl:flex xl:justify-end'
        >
          {refreshData}
        </p>
        <ScrollBox className='overflow-x-auto'>
          <ul className='flex gap-5 transition pb-10'>
            {supportCards.map((card) => (
              <li key={card.id}>
                <SupportCards
                  id={card.id}
                  amountOfHelp={card.amountOfHelp}
                  typeOfHelp={card.typeOfHelp}
                />
              </li>
            ))}
          </ul>
        </ScrollBox>
      </div>
    </section>
  );
};
