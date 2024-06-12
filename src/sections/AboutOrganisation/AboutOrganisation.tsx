'use client';

import { FC, useEffect, useState } from 'react';

import { ScrollBox } from '@/components/ui/ScrollBox';
import { SupportCards } from '@/components/common/SupportCards';

import { aboutOrganisation } from '@/data';

import { fetchData } from '@/actions/fetchData';

import { getOrganization } from '@/graphql/organizationSchema';

import { getSpecialWords } from '@/utils';

import { OrganizationResponse, OrganizationAttributes } from './AboutOrganisation.types';


export const AboutOrganisation: FC = () => {
  const { caption, title } = aboutOrganisation;
  const [organizationData, setOrganizationData] = useState<OrganizationAttributes | null>(null);

  useEffect(() => {
    fetchData(getOrganization)
      .then((response) => {
        const data = (response as OrganizationResponse).organization.data.attributes;
        setOrganizationData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const updatedSupportCards = organizationData ? [
    { id: 1, amountOfHelp: organizationData.legal_support, typeOfHelp: 'Legal Support' },
    { id: 2, amountOfHelp: organizationData.request_psychologist, typeOfHelp: 'Request Psychologist' },
    { id: 3, amountOfHelp: organizationData.help_psyhologist, typeOfHelp: 'Help Psychologist' }
  ] : [];


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
            {organizationData?.text}
          </p>
        </div>
      </div>
      <div className='container'>
        <p
          className='pb-[10px] text-body4 font-normal text-darkGrey transition xl:flex xl:justify-end'
        >
          *станом на {organizationData?.date}
        </p>
        <ScrollBox className='overflow-x-auto'>
          <ul className='flex gap-5 transition pb-10'>
            {updatedSupportCards.map((card: { id: number; amountOfHelp: number; typeOfHelp: string }) => (
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
