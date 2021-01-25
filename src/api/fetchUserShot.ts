import queryString from 'query-string';
import { Shot } from 'store/userData/types';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const basePath = 'https://api.dribbble.com/v2/';

const fetchUserShot = async (id: string): Promise<Shot> => {
  const queryUserData = {
    url: basePath + 'shots/' + id,
    query: {
      access_token: REACT_APP_ACCESS_TOKEN,
    },
  };

  const queryUrl = queryString.stringifyUrl(queryUserData, { sort: false, skipNull: true });

  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl}, received ${response.status}`);
  }

  const shot = await response.json();

  const transformShot = {
    shotId: shot.id,
    title: shot.title,
    description: shot.description,
    images: {
      hidpi: shot.images.hidpi,
      normal: shot.images.normal,
    },
    published: shot.published_at,
    url: shot.html_url,
    tags: shot.tags,
  };

  return transformShot;
};

export default fetchUserShot;
