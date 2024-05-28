'use client';

import { Logo } from '@/components/ui/Logo';
import { Button } from './components/ui/Button';
import { ServiceCard } from './components/common/ServiceCard';
import { SupportCards } from './components/ui/SuppportCards/SupportCards';
import dataSupport from '@/data/supportCardsData.json'

export const Viewer = () => {
  return (
    <>
      {/* div тимчасово, щоб було видно логотип */}
      <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='bg-darkGrey h-[100px] w-full'>
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
      </div>

      <div className='container'>
        <SupportCards data={dataSupport.supportsCards}/>
        <ServiceCard />
      </div>
    </>
  );
};
