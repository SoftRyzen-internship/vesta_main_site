'use client';

import { Button } from '@/components/ui/Button';
import { SocialMedia } from '@/components/ui/SocialMedia';

import { DwellingCard } from '@/components/common/DwellingCard';

import { LinkButton } from '@/components/ui/LinkButton';

import { dwellings } from '@/data';
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

    </div>
  );
};
