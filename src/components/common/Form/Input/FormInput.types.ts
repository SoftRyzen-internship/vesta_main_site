import { ComponentPropsWithoutRef } from 'react';

export interface IFormInputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
}
