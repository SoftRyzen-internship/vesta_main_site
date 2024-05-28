'use client';

// import { Logo } from '@/components/ui/Logo';
// import { Button } from './components/ui/Button';
// import { ServiceCard } from '@/components/common/ServiceCard';
import { CustomInput } from '@/components/common/Form/CustomInput';

import { formData } from '@/data';
import { CustomTextarea } from './components/common/Form/CustomTextarea';

export const Viewer = () => {
  return (
    <>
      {/* div тимчасово, щоб було видно логотип */}
      {/* <div className='h-[51px] w-full bg-[#1A341B]'>
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
      </div> */}

      <div className='container'>
        {/* <ServiceCard /> */}
        <CustomInput
          label={formData.namedField.name.label}
          placeholder={formData.namedField.name.placeholder}
          // errorMessage={formData.namedField.name.errorMessage}
        />
        <CustomTextarea
          label={formData.namedField.textarea.label}
          placeholder={formData.namedField.textarea.placeholder}
          // errorMessage={formData.namedField.textarea.errorMessage}
        />
      </div>
    </>
  );
};
