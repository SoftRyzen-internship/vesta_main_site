import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  handleChange: (checked: boolean) => void;
  errorMessage: string | undefined;
  text: string;
  className?: string;
};
