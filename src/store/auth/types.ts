import { SET_AUTORIZED_USER } from 'constants/actions';

export interface AuthStateTypes {
  isAutorizedUser: boolean;
}

export interface SetIsAutorizedUser {
  type: typeof SET_AUTORIZED_USER;
}
