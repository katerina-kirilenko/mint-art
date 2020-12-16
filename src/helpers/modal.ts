import { colors } from 'constants/colors';

interface RandomColorsProps {
  count?: number;
}

export const createShotModalId = (id: number, title: string): string => {
  return `${id}-${title.split(' ').join('-')}`;
};

export const getRandomColors = ({ count = 8 }: RandomColorsProps): string[] => {
  const getRandomColor = (): number => Math.floor(Math.random() * (colors.length + 1));

  const randomColors = [];
  let ink = 0;

  while (ink < count) {
    randomColors.push(colors[getRandomColor()]);
    ink++;
  }

  return randomColors;
};
