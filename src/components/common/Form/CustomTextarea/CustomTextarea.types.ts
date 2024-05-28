import { ComponentPropsWithoutRef } from 'react';

export interface ICustomTextareaProps
  extends ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  errorMessage?: string;
  className?: string;
}
