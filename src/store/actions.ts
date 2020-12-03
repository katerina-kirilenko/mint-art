import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER, SET_THEME } from 'constants/actions';
import { SetAvailableForWorkAction, SetIsAutorizedUser, SetCurrentTheme } from './types';

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
