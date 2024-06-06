'use client';

import { Button } from '@/components/ui/Button';
import { SocialMedia } from '@/components/ui/SocialMedia';

import { SupportCards } from '@/components/common/SuppportCards';
import { DwellingCard } from '@/components/common/DwellingCard';

import { LinkButton } from '@/components/ui/LinkButton';
import { GettingKnowTeamCard } from '@/components/common/GettingKnowTeamCard';
import { ProjectCard } from '@/components/common/ProjectCard';

import { supportCards } from '@/data';
import { dwellings, projects } from '@/data';
import { socialMedia } from '@/data';

export const Viewer = () => {
  return (
    <div className='container pb-16'>
      <div className='bg-darkGrey'>
        <Button onClick={() => console.log('click')} className='mr-10'>
          Надіслати
        </Button>
        <LinkButton
          href='https://www.monobank.ua/?lang=uk'
          target='_blank'
          rel='noopener noreferrer nofollow'
          className='mr-10'
        >
          задонатити
        </LinkButton>

        <LinkButton href='/contacts' variant='contactsHeader' className='mr-10'>
          контакти
        </LinkButton>
        <LinkButton href='/news' variant='secondary' className='mr-10'>
          дивитись всі
        </LinkButton>

        <Button
          variant='openTeamMember'
          onClick={() => console.log('click')}
          className='mr-10'
        />
        <LinkButton href='/contacts' className='mr-10'>
          Запит на підтримку
        </LinkButton>
        <Button
          variant='play'
          onClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='openMenu'
          onClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeMenu'
          onClick={() => console.log('click')}
          className='mr-10'
        />
        <Button
          variant='closeModal'
          onClick={() => console.log('click')}
          className='mr-10'
        />
        <SocialMedia socialMedia={socialMedia} lightMode={true} />
      </div>

      {/* <div className='py-16'>
        <PartnerCard img={partners.img} name={partners.name} />
      </div> */}
      <div className='py-16'>
        <DwellingCard city={dwellings.city} contacts={dwellings.contacts} />
      </div>
      
      <SupportCards
        key={supportCards.id}
        id={supportCards.id}
        amountOfHelp={supportCards.amountOfHelp}
        typeOfHelp={supportCards.typeOfHelp}
      />
      <div className='flex flex-wrap gap-6 '>
        <GettingKnowTeamCard />
      </div>
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
