'use client';

import { FC, useState } from 'react';

import { clsx } from 'clsx';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput } from '../FormInput';
import { Textarea } from '../Textarea';
import { Checkbox } from '../Checkbox';
import { FormModal } from '../../FormModal';
import { Button } from '@/components/ui/Button';

import { formSchema } from '@/utils';

import { sendEmail } from '@/actions';

import { IFormBlockProps, IFormState } from './FormBlock.types';

import { formData } from '@/data';

export const FormBlock: FC<IFormBlockProps> = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sendError, setSendError] = useState(false);
  const {
    formProps: { name, phone, email, textarea, checkbox },
    buttonText,
    modalInfo: { successful, failure },
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

  const onSubmit: SubmitHandler<IFormState> = async data => {
    setSendError(false);
    try {
      await sendEmail(data);
      reset();
    } catch (error) {
      setSendError(true);
    } finally {
      setModalOpen(true);
    }
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
      <FormModal
        openModal={modalOpen}
        closeModal={() => setModalOpen(false)}
        title={sendError ? failure.title : successful.title}
        text={sendError ? failure.text : successful.text}
        isSuccessful={!sendError}
      />
    </>
  );
};
