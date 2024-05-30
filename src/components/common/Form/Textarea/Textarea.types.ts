import { ComponentPropsWithoutRef } from 'react';

export interface ITextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
}
