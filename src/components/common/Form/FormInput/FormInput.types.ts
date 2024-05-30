import { ComponentPropsWithoutRef } from 'react';

export interface IFormInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage: string | undefined;
  className?: string;
  isFilled: boolean | undefined; 
};