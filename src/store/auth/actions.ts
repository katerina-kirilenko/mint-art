import { SET_AUTORIZED_USER } from 'constants/actions';
import { SetIsAutorizedUser } from './types';

export const setIsAutorizedUser = (): SetIsAutorizedUser => ({
  type: SET_AUTORIZED_USER,
});
