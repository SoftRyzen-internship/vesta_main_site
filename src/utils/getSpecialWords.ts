export const getSpecialWords = (
  text: string,
  start: number,
  count: number,
  addSpace?: { start?: boolean; end?: boolean },
): string => {
  const result = text.split(' ').splice(start, count);
  if (addSpace && addSpace.start) {
    result.unshift(' ');
  } else if (addSpace && addSpace.end) {
    result.push(' ');
  }
  return result.join(' ');
};
