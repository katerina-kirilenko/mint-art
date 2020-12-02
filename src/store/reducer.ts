import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER } from 'constants/actions';
import { ActionTypes, InitialStateTypes } from './types';

const initialState = {
  availableForWork: false,
  isAutorizedUser: false,
};

export default (state = initialState, action: ActionTypes): InitialStateTypes => {
  switch (action.type) {
    case SET_AVAILABLE_FOR_WORK:
      return {
        ...state,
        availableForWork: !state.availableForWork,
      };
    case SET_AUTORIZED_USER:
      return {
        ...state,
        isAutorizedUser: !state.isAutorizedUser,
      };
    default:
      return state;
  }
};
