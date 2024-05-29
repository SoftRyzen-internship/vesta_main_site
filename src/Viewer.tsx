'use client';

import { Logo } from '@/components/ui/Logo';
import dataSupport from '@/data/supportCards.json';

import { Button } from './components/ui/Button';
import { SocialMedias } from './components/ui/SocialMedias';
import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/common/SuppportCards';
import { NewsCard } from './components/common/NewsCard';
import { PartnerCard } from './components/common/PartnerCard';

import news from '@/data/news.json';
import partners from '@/data/partners.json';

export const Viewer = () => {
  return (
    <div className='container pb-16'>
      <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='bg-darkGrey'>
        <Button
          text='Запит на підтримку'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          text='контакти'
          variant='contacts'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          text='дивитись всі'
          variant='secondary'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='openTeamMember'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='play'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='openMenu'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeMenu'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeModal'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <SocialMedias />
      </div>
      <div className='py-16'>
        <NewsCard
          id={news.id}
          img={news.img}
          imgAlt={news.imgAlt}
          date={news.date}
          title={news.title}
          description={news.description}
        />
      </div>
      <div className='py-16'>
        <PartnerCard img={partners.img} name={partners.name} />
      </div>
      <div className='container'>
        <SupportCards data={dataSupport.supportsCards} />
        <ServiceCard />
      </div>
    </div>
  );
};
