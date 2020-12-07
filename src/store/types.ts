import {
  SET_AVAILABLE_FOR_WORK,
  SET_AUTORIZED_USER,
  SET_THEME,
  USER_DATA_REQUEST,
  USER_DATA_RESPONSE,
} from 'constants/actions';

export interface InitialStateTypes {
  availableForWork: boolean;
  isAutorizedUser: boolean;
  currentTheme: string;
  data: User[];
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
export interface SetAvailableForWorkAction {
  type: typeof SET_AVAILABLE_FOR_WORK;
}

export interface SetIsAutorizedUser {
  type: typeof SET_AUTORIZED_USER;
}

export interface SetCurrentTheme {
  type: typeof SET_THEME;
  payload: string;
}

export interface RequestDataAction {
  type: typeof USER_DATA_REQUEST;
}

export interface ResponseDataAction {
  type: typeof USER_DATA_RESPONSE;
  payload: User[];
}

export type ActionTypes =
  | SetAvailableForWorkAction
  | SetIsAutorizedUser
  | SetCurrentTheme
  | RequestDataAction
  | ResponseDataAction;
