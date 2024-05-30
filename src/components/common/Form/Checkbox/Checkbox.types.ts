import { InputHTMLAttributes } from 'react';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  handleChange: (checked: boolean) => void;
  errorMessage?: string;
  text?: string;
  className?: string;
}
