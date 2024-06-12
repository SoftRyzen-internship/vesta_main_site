// 'use client';
import { FC } from 'react';

import { ServiceCard } from '@/components/common/ServiceCard';
import { ScrollBox } from '@/components/ui/ScrollBox';

import { service } from '@/data';
import { fetchData } from '@/actions/fetchData';
import { getService } from '@/graphql/serviceSchema';
import { IServiceCardProps } from '@/components/common/ServiceCard/ServiceCard.types';

export const Services: FC = async () => {
  const { title } = service;
  const data = await fetchData(getService);
  // console.log(data.service.data.attributes.serviceItem);
  const services: IServiceCardProps[] =
    data.service.data.attributes.serviceItem;
  return (
    <section className='py-[60px] md:py-[50px] xl:py-[65px]'>
      <div className='container'>
        <h2 className='subtitle mb-10 md:mb-[50px] md:text-center xl:mb-[60px]'>
          {title}
        </h2>
        <ScrollBox className='overflow-x-auto md:overflow-hidden'>
          <ul className='flex items-center gap-10 pb-10 md:flex-col md:gap-[30px] xl:gap-10'>
            {services.map(({ title, image, description }, index) => (
              <li key={index}>
                <ServiceCard
                  title={title}
                  src={image.data.attributes.url || ''}
                  alt={'alt'}
                  description={description}
                  count={String(index + 1)}
                  countAll={services.length.toString()}
                />
              </li>
            ))}
          </ul>
        </ScrollBox>
      </div>
    </section>
  );
};
