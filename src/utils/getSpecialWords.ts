export const getSpecialWords = (
  text: string,
  start: number,
  count: number,
): string => {
  return text.split(' ').splice(start, count).join(' ');
};
