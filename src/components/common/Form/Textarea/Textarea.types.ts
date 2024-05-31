import { ComponentPropsWithoutRef } from 'react';

export interface ITextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  errorMessage: string | undefined;
  className?: string;
  isFilled: boolean | undefined;
}
