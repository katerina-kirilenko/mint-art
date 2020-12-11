export const createShotModalId = (id: number, title: string): string => {
  return `${id}-${title.split(' ').join('-')}`;
};
