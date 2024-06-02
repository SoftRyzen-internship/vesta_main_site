'use client';

import { FC } from 'react';
import { clsx } from 'clsx';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from '../FormInput';
import { Textarea } from '../Textarea';
import { Checkbox } from '../Checkbox';
import { Button } from '@/components/ui/Button';

import { formData } from '@/data';

import { formSchema } from '@/utils';

import { IFormBlockProps, IFormState } from './FormBlock.types';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
  const {
    formProps: { name, phone, email, textarea, checkbox },
    buttonText,
  } = formData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
    control,
    watch,
    setValue,
  } = useForm<IFormState>({
    defaultValues: {
      privacy: false,
    },
    shouldFocusError: false,
    resolver: yupResolver(formSchema),
  });

  useFormPersist('storageForm', {
    watch,
    setValue,
    exclude: ['privacy'],
  });

  const onSubmit: SubmitHandler<IFormState> = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx('flex flex-col gap-7 mdOnly:max-w-[684px]', className)}
      >
        <FormInput
          label={name.label}
          placeholder={name.placeholder}
          {...register('name')}
          errorMessage={errors.name?.message}
          isFilled={dirtyFields['name']}
        />
        <FormInput
          label={phone.label}
          placeholder={phone.placeholder}
          {...register('phone')}
          errorMessage={errors.phone?.message}
          isFilled={dirtyFields['phone']}
        />
        <FormInput
          label={email.label}
          placeholder={email.placeholder}
          {...register('email')}
          errorMessage={errors.email?.message}
          isFilled={dirtyFields['email']}
        />
        <Textarea
          label={textarea.label}
          placeholder={textarea.placeholder}
          {...register('textarea')}
          errorMessage={errors.textarea?.message}
          isFilled={dirtyFields['textarea']}
        />
        <Controller
          name='privacy'
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              handleChange={field.onChange}
              errorMessage={errors.privacy?.message}
              text={checkbox.label}
            />
          )}
        />
        <Button
          type='submit'
          variant='primary'
          className='w-full'
          text={buttonText}
        />
      </form>
    </>
  );
};
