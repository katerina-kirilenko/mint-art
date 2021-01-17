import {
  SET_AVAILABLE_FOR_WORK,
  SET_THEME,
  SET_CURRENT_PAGE,
  SET_SHOW_BY,
} from 'constants/actions';
import { SetAvailableForWorkAction, SetCurrentTheme, SetCurrentPage, SetShowBy } from './types';

export const setAvailableForWork = (): SetAvailableForWorkAction => ({
  type: SET_AVAILABLE_FOR_WORK,
});

export const setCurrentTheme = (theme: string): SetCurrentTheme => ({
  type: SET_THEME,
  payload: theme,
});

export const setCurrentPage = (page: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setShowBy = (count: string): SetShowBy => ({
  type: SET_SHOW_BY,
  payload: count,
});
