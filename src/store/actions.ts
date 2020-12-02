import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER } from 'constants/actions';
import { SetAvailableForWorkAction, SetIsAutorizedUser } from './types';

export const setAvailableForWork = (): SetAvailableForWorkAction => ({
  type: SET_AVAILABLE_FOR_WORK,
});

export const setIsAutorizedUser = (): SetIsAutorizedUser => ({
  type: SET_AUTORIZED_USER,
});
