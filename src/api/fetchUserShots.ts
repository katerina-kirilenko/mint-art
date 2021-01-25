import queryString from 'query-string';
import { Shot } from 'store/userData/types';

const { REACT_APP_ACCESS_TOKEN } = process.env;

const basePath = 'https://api.dribbble.com/v2/';

const fetchUserShots = async (currentPage: number, showBy: string): Promise<Shot[]> => {
  const queryUserData = {
    url: basePath + 'user/shots',
    query: {
      access_token: REACT_APP_ACCESS_TOKEN,
      page: currentPage,
      per_page: showBy,
    },
  };

  const queryUrl = queryString.stringifyUrl(queryUserData, { sort: false, skipNull: true });

  const response = await fetch(queryUrl);

  if (!response.ok) {
    throw new Error(`Could not fetch ${queryUrl}, received ${response.status}`);
  }

  const shots = await response.json();

  const transformShots = shots.map((shot: any) => {
    return {
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
  });

  return transformShots;
};

export default fetchUserShots;
