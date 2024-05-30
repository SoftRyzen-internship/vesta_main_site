'use client';

import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from '../FormInput';
import { Textarea } from '../Textarea';
import { Checkbox } from '../Checkbox';
import { Button } from '@/components/ui/Button';

import { formData } from '@/data';
import { formSchema } from '@/utils';

import { IFormBlockProps } from './FormBlock.types';
import { IFormState } from './FormState.type';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
  const {
    formProps: { name, phone, email, textarea, checkbox },
    buttonText,
  } = formData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm<IFormState>({
    defaultValues: { privacy: false },
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
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <FormInput
          label={name.label}
          placeholder={name.placeholder}
          {...register('name')}
          errorMessage={errors.name?.message}
        />
        <FormInput
          label={phone.label}
          placeholder={phone.placeholder}
          {...register('phone')}
          errorMessage={errors.phone?.message}
        />
        <FormInput
          label={email.label}
          placeholder={email.placeholder}
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <Textarea
          label={textarea.label}
          placeholder={textarea.placeholder}
          {...register('textarea')}
          errorMessage={errors.textarea?.message}
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
        <Button type='submit' variant='primary' text={buttonText} />
      </form>
    </>
  );
};
