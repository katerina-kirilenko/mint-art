import { SET_AVAILABLE_FOR_WORK, SET_AUTORIZED_USER, SET_THEME } from 'constants/actions';
import { LIGHT } from 'constants/themes';
import { ActionTypes, InitialStateTypes } from './types';

const initialState = {
  availableForWork: false,
  isAutorizedUser: false,
  currentTheme: LIGHT,
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
    case SET_THEME:
      return {
        ...state,
        currentTheme: action.payload,
      };
    default:
      return state;
  }
};
