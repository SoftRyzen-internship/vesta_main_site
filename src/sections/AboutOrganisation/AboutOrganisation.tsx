import { FC } from 'react';

import { SupportCards } from '@/components/common/SupportCards';

import { supportCards , aboutOrganisation} from '@/data';

export const AboutOrganisation: FC = () => {
  return (
    <section >
      <div className='py-[60px] md:py-[100px]'>
        <p className='text-caption font-medium text-darkGrey'>{aboutOrganisation.caption}</p>
        <h3 className='my-[30px] text-h3 font-bold font-kyiv text-green 
        md:w-[596px] md:text-h3_tab xl:text-h3_desk xl:w-[700px] transition'>
          {aboutOrganisation.title}
        </h3>
        <p className='text-body4 font-normal text-darkGrey md:w-[492px] md:text-body4_tab xl:text-body4_desk xl:w-[465px] transition'>
          {aboutOrganisation.titleText}
        </p>
      </div>
      <div>
        <p className='text-darkGrey text-body4 font-normal pb-[10px] transition'>{aboutOrganisation.refreshData}</p>
        <ul className='flex gap-5 overflow-x-auto whitespace-nowrap transition'>
          {supportCards.map(card => (
            <SupportCards
              key={card.id}
              id={card.id}
              amountOfHelp={card.amountOfHelp}
              typeOfHelp={card.typeOfHelp}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
