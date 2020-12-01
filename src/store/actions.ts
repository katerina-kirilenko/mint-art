import { SET_AVAILABLE_FOR_WORK } from 'constants/actions';
import { SetAvailableForWorkAction } from './types';

export const setAvailableForWork = (): SetAvailableForWorkAction => ({
  type: SET_AVAILABLE_FOR_WORK,
});
