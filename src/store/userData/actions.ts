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
import {
  User,
  Shot,
  RequestUserDataAction,
  ResponseUserDataAction,
  FailedUserDataAction,
  OpenShotModalAction,
  CloseShotModalAction,
  RequestUserShotsAction,
  ResponseUserShotsAction,
  FailedUserShotsAction,
  RequestUserShotAction,
  ResponseUserShotAction,
  FailedUserShotAction,
} from './types';

export const userDataRequest = (): RequestUserDataAction => ({
  type: USER_DATA_REQUEST,
});

export const userDataResponse = (data: User): ResponseUserDataAction => ({
  type: USER_DATA_RESPONSE,
  payload: data,
});

export const userDataFailed = (text: string): FailedUserDataAction => {
  return {
    type: USER_DATA_FAILED,
    payload: text,
  };
};

export const userShotsRequest = (): RequestUserShotsAction => ({
  type: USER_SHOTS_REQUEST,
});

export const userShotsResponse = (data: Shot[]): ResponseUserShotsAction => ({
  type: USER_SHOTS_RESPONSE,
  payload: data,
});

export const userShotsFailed = (text: string): FailedUserShotsAction => {
  return {
    type: USER_SHOTS_FAILED,
    payload: text,
  };
};

export const userShotRequest = (): RequestUserShotAction => ({
  type: USER_SHOT_REQUEST,
});

export const userShotResponse = (data: Shot): ResponseUserShotAction => ({
  type: USER_SHOT_RESPONSE,
  payload: data,
});

export const userShotFailed = (text: string): FailedUserShotAction => {
  return {
    type: USER_SHOT_FAILED,
    payload: text,
  };
};

export const openShotModal = (id: string): OpenShotModalAction => ({
  type: OPEN_SHOT_MODAL,
  payload: id,
});

export const closeShotModal = (): CloseShotModalAction => ({
  type: CLOSE_SHOT_MODAL,
});
