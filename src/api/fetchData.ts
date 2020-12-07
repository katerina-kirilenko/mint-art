import { User } from 'store/types';

const fetchData = async (): Promise<User[]> => {
  const response = await fetch('./data.json');

  if (!response.ok) {
    throw new Error(`Could not fetch query, received ${response.status}`);
  }

  return await response.json();
};

export default fetchData;
