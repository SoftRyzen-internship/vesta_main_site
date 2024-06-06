export const formatDate = (date: string) => {
  const newDate = date.replace(/^(.{3})(.{3})/, '$2$1');
  return Date.parse(newDate);
};
