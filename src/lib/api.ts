import { IFormState } from "@/components/common/Form/FormBlock/FormBlock.types";

export const sendFormToEmail = async (data: IFormState) =>
  fetch('/api/sendEmail', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  }).then(res => {
    if (!res.ok) throw new Error('Щось пішло не так...');
    return res.json();
  });