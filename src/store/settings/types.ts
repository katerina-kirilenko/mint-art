import {
  SET_AVAILABLE_FOR_WORK,
  SET_THEME,
  SET_CURRENT_PAGE,
  SET_SHOW_BY,
} from 'constants/actions';

export interface SettingsStateTypes {
  availableForWork: boolean;
  currentTheme: string;
  currentPage: number;
  showBy: string;
}

export interface SetAvailableForWorkAction {
  type: typeof SET_AVAILABLE_FOR_WORK;
}

export interface SetCurrentTheme {
  type: typeof SET_THEME;
  payload: string;
}

export interface SetCurrentTheme {
  type: typeof SET_THEME;
  payload: string;
}

export interface SetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}

export interface SetShowBy {
  type: typeof SET_SHOW_BY;
  payload: string;
}

export type ActionTypes = SetAvailableForWorkAction | SetCurrentTheme | SetCurrentPage | SetShowBy;
