import {
  SET_AVAILABLE_FOR_WORK,
  SET_AUTORIZED_USER,
  SET_THEME,
  USER_DATA_REQUEST,
  USER_DATA_RESPONSE,
} from 'constants/actions';
import {
  SetAvailableForWorkAction,
  SetIsAutorizedUser,
  SetCurrentTheme,
  RequestDataAction,
  ResponseDataAction,
  User,
} from './types';

export const setAvailableForWork = (): SetAvailableForWorkAction => ({
  type: SET_AVAILABLE_FOR_WORK,
});

export const setIsAutorizedUser = (): SetIsAutorizedUser => ({
  type: SET_AUTORIZED_USER,
});

export const setCurrentTheme = (theme: string): SetCurrentTheme => ({
  type: SET_THEME,
  payload: theme,
});

export const userDataRequest = (): RequestDataAction => ({
  type: USER_DATA_REQUEST,
});

export const userDataResponse = (data: User[]): ResponseDataAction => ({
  type: USER_DATA_RESPONSE,
  payload: data,
});
