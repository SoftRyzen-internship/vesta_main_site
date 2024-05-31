export const getWordsWithoutFirst = (text: string) => {
  return text.split(' ').splice(1).join(' ');
};
