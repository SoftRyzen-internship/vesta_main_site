import { FC } from 'react';

import { ScrollBox } from '@/components/ui/ScrollBox';
import { SupportCards } from '@/components/common/SupportCards';

import { aboutOrganisation } from '@/data';

import { fetchData } from '@/actions/fetchData';

import { getOrganization } from '@/graphql/organizationSchema';

import { getSpecialWords } from '@/utils';

import {
  OrganizationResponse,
  AboutOrganisationHelps,
} from './AboutOrganisation.types';
import {
  OrganizationResponse,
  AboutOrganisationHelps,
} from './AboutOrganisation.types';

export const AboutOrganisation: FC = async () => {
  const { caption, title, sectionOrganisationHelp } = aboutOrganisation;

  const data: OrganizationResponse =
    await fetchData<OrganizationResponse>(getOrganization);

  const { help_psyhologist, legal_support, date, request_psychologist, text } =
    data.organization.data.attributes;

  const updatedSupportCards: AboutOrganisationHelps[] = [
    {
      id: 1,
      amountOfHelp: legal_support,
      typeOfHelp: 'надано юридичну підтримку',
    },
    {
      id: 2,
      amountOfHelp: request_psychologist,
      typeOfHelp: 'запитів на психологічну підтримку',
    },
    {
      id: 3,
      amountOfHelp: help_psyhologist,
      typeOfHelp: 'надано психологічну підтримку',
    },
  ];
  const updatedSupportCards: AboutOrganisationHelps[] =
    sectionOrganisationHelp.map(card => {
      switch (card.typeOfHelp) {
        case 'надано юридичну підтримку':
          return { ...card, amountOfHelp: help_psyhologist ?? 0 };
        case 'запитів на психологічну підтримку':
          return { ...card, amountOfHelp: legal_support ?? 0 };
        case 'надано психологічну підтримку':
          return { ...card, amountOfHelp: request_psychologist ?? 0 };
        default:
          return { ...card, amountOfHelp: 0 };
      }
    });

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
            {text}
          </p>
        </div>
      </div>
      <div className='container'>
        <p className='pb-[10px] text-body4 font-normal text-darkGrey transition xl:flex xl:justify-end'>
          *станом на {date}
        </p>
        <ScrollBox className='overflow-x-scroll scrollbar-thin'>
          <ul className='flex gap-5 pb-10 transition'>
            {updatedSupportCards.map(card => (
              <li key={card.id}>
                <SupportCards
                  id={card.id}
                  amountOfHelp={card.amountOfHelp!}
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
