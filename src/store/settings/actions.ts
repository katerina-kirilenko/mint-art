import { SET_AVAILABLE_FOR_WORK, SET_THEME } from 'constants/actions';
import { SetAvailableForWorkAction, SetCurrentTheme } from './types';

export const setAvailableForWork = (): SetAvailableForWorkAction => ({
  type: SET_AVAILABLE_FOR_WORK,
});

export const setCurrentTheme = (theme: string): SetCurrentTheme => ({
  type: SET_THEME,
  payload: theme,
});
