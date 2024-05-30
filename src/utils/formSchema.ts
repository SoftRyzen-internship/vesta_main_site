import * as yup from 'yup';

import { formData } from '@/data';

import { nameRegExp } from './nameRegExp';
import { emailRegExp } from './emailRegExp';
import { phoneRegExp } from './phoneRegExp';

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
    .matches(nameRegExp, namePattern),
  phone: yup
    .string()
    .required(required)
    .min(13, phoneMin)
    .max(13, phoneMax)
    .matches(phoneRegExp, phonePattern),
  email: yup
    .string()
    .required(required)
    .max(63, emailMax)
    .matches(emailRegExp, emailPattern),
  textarea: yup.string().max(500, textareaMax),
  privacy: yup.boolean().oneOf([true]).required(),
});
