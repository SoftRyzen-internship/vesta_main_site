'use client';

import { Logo } from '@/components/ui/Logo';
import { Button } from './components/ui/Button';
import { SocialMedia } from './components/ui/SocialMedia';
import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/common/SuppportCards';
import { NewsCard } from '@/components/common/NewsCard';
import { PartnerCard } from '@/components/common/PartnerCard';
import { DwellingCard } from '@/components/common/DwellingCard';
import { TeamCard } from './components/common/TeamCard';
import { FormBlock } from '@/components/common/Form';
import { NavLink } from '@/components/ui/Link';
import { GettingKnowTeamCard } from '@/components/common/GettingKnowTeamCard';
import { ProjectCard } from '@/components/common/ProjectCard';

import { supportCards } from '@/data';
import { dwellings, news, partners, projects } from './data';
import { socialMedia } from '@/data';

export const Viewer = () => {
  return (
    <div className='container pb-16'>
      <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='bg-darkGrey'>
        <Button
          text='Надіслати'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <NavLink
          href='https://www.monobank.ua/?lang=uk'
          text='задонатити'
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='mr-10'
        />

        <NavLink
          href='/contacts'
          text='контакти'
          variant='contactsHeader'
          className='mr-10'
        />
        <NavLink
          href='/news'
          text='дивитись всі'
          variant='secondary'
          className='mr-10'
        />

        <Button
          variant='openTeamMember'
          handleClick={() => console.log('click')}
          className='mr-10'
        />
        <NavLink href='/contacts' text='Запит на підтримку' className='mr-10' />
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
        <SocialMedia socialMedia={socialMedia} forFooter={true} />
      </div>
      <div className='py-16'>
        <NewsCard
          id={news.id}
          // img={news.img}
          imgAlt={news.imgAlt}
          date={news.date}
          title={news.title}
          description={news.description}
        />
      </div>
      <div className='py-16'>
        <PartnerCard img={partners.img} name={partners.name} />
      </div>
      <div className='py-16'>
        <DwellingCard city={dwellings.city} contacts={dwellings.contacts} />
      </div>
      <div className='py-16'>
        <GettingKnowTeamCard />
      </div>
      <SupportCards
        key={supportCards.id}
        id={supportCards.id}
        amountOfHelp={supportCards.amountOfHelp}
        typeOfHelp={supportCards.typeOfHelp}
      />
      <ServiceCard />
      <FormBlock className='my-10' />
      <section>
        <div className='container outline outline-slate-800'>
          <TeamCard />
        </div>
      </section>
      <div className='flex flex-col gap-10 py-16'>
        {projects.map(
          ({ id, img, imgAlt, title, description, linkText, link }, index) => (
            <ProjectCard
              key={id}
              img={img}
              imgAlt={imgAlt}
              title={title}
              description={description}
              linkText={linkText}
              link={link}
              isOddCard={index % 2 ? false : true}
            />
          ),
        )}
      </div>
    </div>
  );
};
