import {
  USER_DATA_REQUEST,
  USER_DATA_RESPONSE,
  USER_DATA_FAILED,
  USER_SHOTS_REQUEST,
  USER_SHOTS_RESPONSE,
  USER_SHOTS_FAILED,
  USER_SHOT_REQUEST,
  USER_SHOT_RESPONSE,
  USER_SHOT_FAILED,
  OPEN_SHOT_MODAL,
  CLOSE_SHOT_MODAL,
} from 'constants/actions';

export interface UserStateTypes {
  userData: UserData;
  userShots: UserShots;
  shotModal: ShotModal;
}

export interface UserData {
  user: User | null;
  isLoadingUser: boolean;
  errorUser: string | null;
}

export interface User {
  userId: number;
  name: string;
  avatar: string;
  location: string;
}

export interface UserShots {
  shotsByPage: Shot[];
  isLoadingShots: boolean;
  errorShots: string | null;
}

export interface ShotModal {
  isOpen: boolean;
  shotModalId: string;
  shotData: {
    shot: Shot | null;
    isLoadingShot: boolean;
    errorShot: string | null;
  };
}

export interface Shot {
  shotId: number;
  title: string;
  description: string;
  images: {
    hidpi: string;
    normal: string;
  };
  published: string;
  url: string;
  tags: string[];
}

export interface RequestUserDataAction {
  type: typeof USER_DATA_REQUEST;
}

export interface ResponseUserDataAction {
  type: typeof USER_DATA_RESPONSE;
  payload: User;
}

export interface FailedUserDataAction {
  type: typeof USER_DATA_FAILED;
  payload: string;
}

export interface RequestUserShotsAction {
  type: typeof USER_SHOTS_REQUEST;
}

export interface ResponseUserShotsAction {
  type: typeof USER_SHOTS_RESPONSE;
  payload: Shot[];
}

export interface FailedUserShotsAction {
  type: typeof USER_SHOTS_FAILED;
  payload: string;
}

export interface RequestUserShotAction {
  type: typeof USER_SHOT_REQUEST;
}

export interface ResponseUserShotAction {
  type: typeof USER_SHOT_RESPONSE;
  payload: Shot;
}

export interface FailedUserShotAction {
  type: typeof USER_SHOT_FAILED;
  payload: string;
}

export interface OpenShotModalAction {
  type: typeof OPEN_SHOT_MODAL;
  payload: string;
}

export interface CloseShotModalAction {
  type: typeof CLOSE_SHOT_MODAL;
}

export type ActionTypes =
  | RequestUserDataAction
  | ResponseUserDataAction
  | FailedUserDataAction
  | RequestUserShotsAction
  | ResponseUserShotsAction
  | FailedUserShotsAction
  | RequestUserShotAction
  | ResponseUserShotAction
  | FailedUserShotAction
  | OpenShotModalAction
  | CloseShotModalAction;
