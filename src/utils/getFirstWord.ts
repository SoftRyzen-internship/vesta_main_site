export const getFirstWord = (text: string) => {
  return text
    .split(' ')
    .filter((_, i) => i === 0)
    .join(' ');
};
