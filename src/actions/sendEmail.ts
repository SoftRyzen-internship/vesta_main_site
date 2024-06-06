import { IFormState } from '@/components/common/Form/FormBlock/FormBlock.types';

export const sendEmail = async (data: IFormState): Promise<void> => {
  const response = await fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Щось пішло не так...');
  }

  return response.json();
};
