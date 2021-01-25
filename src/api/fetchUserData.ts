import queryString from 'query-string';
import { User } from 'store/userData/types';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const basePath = 'https://api.dribbble.com/v2/';

const fetchUserData = async (): Promise<User> => {
  const queryUserData = {
    url: basePath + 'user',
    query: {
      access_token: REACT_APP_ACCESS_TOKEN,
    },
  };

  const queryUrl = queryString.stringifyUrl(queryUserData, { sort: false, skipNull: true });

  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl}, received ${response.status}`);
  }

  const data = await response.json();

  const transformData = {
    userId: data.id,
    name: data.name,
    avatar: data.avatar_url,
    location: data.location,
  };

  return transformData;
};

export default fetchUserData;
