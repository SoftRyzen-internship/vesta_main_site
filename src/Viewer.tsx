'use client';

import { Logo } from '@/components/ui/Logo';
import { Button } from './components/ui/Button';
import { SocialMedias } from './components/ui/SocialMedias';

export const Viewer = () => {
  return (
    <>
      {/* div тимчасово, щоб було видно логотип */}
      <div className='h-[51px] w-full bg-[#1A341B]'>
        <Logo />
      </div>
      <div className='h-[100px] w-full bg-darkGrey'>
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
    </>
  );
};
