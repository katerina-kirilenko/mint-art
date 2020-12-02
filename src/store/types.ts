import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER } from 'constants/actions';

export interface InitialStateTypes {
  availableForWork: boolean;
  isAutorizedUser: boolean;
}

export interface SetAvailableForWorkAction {
  type: typeof SET_AVAILABLE_FOR_WORK;
}

export interface SetIsAutorizedUser {
  type: typeof SET_AUTORIZED_USER;
}

export type ActionTypes = SetAvailableForWorkAction | SetIsAutorizedUser;
