import {
  SET_AVAILABLE_FOR_WORK,
  SET_AUTORIZED_USER,
  SET_THEME,
  USER_DATA_REQUEST,
  USER_DATA_RESPONSE,
} from 'constants/actions';
import { LIGHT } from 'constants/themes';
import { ActionTypes, InitialStateTypes } from './types';

const initialState = {
  availableForWork: false,
  isAutorizedUser: false,
  currentTheme: LIGHT,
  data: [],
  isLoadingData: false,
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
    case USER_DATA_REQUEST:
      return {
        ...state,
        isLoadingData: true,
      };
    case USER_DATA_RESPONSE:
      return {
        ...state,
        isLoadingData: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
