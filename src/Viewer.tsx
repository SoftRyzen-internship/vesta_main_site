'use client';
import Play from '@/../public/icons/playButton.svg';
import { Button } from './components/ui/Button';

export const Viewer = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        nemo possimus, ipsa hic dolores commodi incidunt modi labore aliquam?
        Repellendus explicabo architecto dolore asperiores nam earum ipsum.
        Ipsum dolorem dicta sunt libero molestias voluptatibus necessitatibus
        incidunt non facilis tenetur vero eos rem fuga laudantium aspernatur,
        distinctio cupiditate itaque est, explicabo neque magni ea! Incidunt
        cumque molestiae illum odio! Culpa assumenda accusantium cupiditate hic
        quasi quia aperiam qui, voluptatum incidunt? Similique unde tempora,
        modi rem quasi fugiat. Nam totam perferendis iure veniam quos quis
        deleniti laudantium aliquid natus? Soluta?
      </p>

      <button
        type='button'
        className='h-[51px] w-[51px] rounded-full bg-orange-600 pb-4 pl-[21px] pr-[17px] pt-[17px]'
      >
        <Play width={13} height={18} />
      </button>
      <div className='bg-darkGrey h-[500px] w-full'>
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
    </>
  );
};
