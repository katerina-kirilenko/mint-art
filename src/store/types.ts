import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER, SET_THEME } from 'constants/actions';

export interface InitialStateTypes {
  availableForWork: boolean;
  isAutorizedUser: boolean;
  currentTheme: string;
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

export type ActionTypes = SetAvailableForWorkAction | SetIsAutorizedUser | SetCurrentTheme;
