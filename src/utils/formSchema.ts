import * as yup from 'yup';

import { formData } from '@/data';

const {
  validationMessages: {
    required,
    nameMin,
    nameMax,
    namePattern,
    phoneMin,
    phoneMax,
    phonePattern,
    emailMax,
    emailPattern,
    textareaMax,
  },
} = formData;

export const formSchema = yup.object({
  name: yup
    .string()
    .required(required)
    .min(2, nameMin)
    .max(30, nameMax)
    .matches(/^[А-ЯҐЄІЇа-яґєії\s'-]+$/u, namePattern),
  phone: yup
    .string()
    .required(required)
    .min(3, phoneMin)
    .max(12, phoneMax)
    .matches(/^\s*\+?\d+\s*$/, phonePattern),
  email: yup
    .string()
    .required(required)
    .max(63, emailMax)
    .matches(/^$|^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$/, emailPattern),
  textarea: yup.string().max(500, textareaMax),
  privacy: yup.boolean().oneOf([true]).required(),
});

