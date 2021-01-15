import { USER_DATA_REQUEST, USER_DATA_RESPONSE } from 'constants/actions';

export interface UsersStateTypes {
  usersData: User[];
  isLoadingData: boolean;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  shots: Shots[];
}

interface Shots {
  id: number;
  created: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  likes: number;
  views: number;
  saves: number;
  comments: [
    {
      id: number;
      author: string;
      data: string;
      text: string;
    },
  ];
}

export interface RequestDataAction {
  type: typeof USER_DATA_REQUEST;
}

export interface ResponseDataAction {
  type: typeof USER_DATA_RESPONSE;
  payload: User[];
}

export type ActionTypes = RequestDataAction | ResponseDataAction;
