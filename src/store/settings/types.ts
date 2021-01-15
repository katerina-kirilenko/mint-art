import { SET_AVAILABLE_FOR_WORK, SET_THEME } from 'constants/actions';

export interface SettingsStateTypes {
  availableForWork: boolean;
  currentTheme: string;
}

export interface SetAvailableForWorkAction {
  type: typeof SET_AVAILABLE_FOR_WORK;
}

export interface SetCurrentTheme {
  type: typeof SET_THEME;
  payload: string;
}

export type ActionTypes = SetAvailableForWorkAction | SetCurrentTheme;
