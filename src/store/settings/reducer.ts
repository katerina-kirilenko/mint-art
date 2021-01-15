import { SET_AVAILABLE_FOR_WORK, SET_THEME } from 'constants/actions';
import { LIGHT } from 'constants/themes';
import { ActionTypes, SettingsStateTypes } from './types';

const initialState = {
  availableForWork: false,
  currentTheme: LIGHT,
};

export default (state = initialState, action: ActionTypes): SettingsStateTypes => {
  switch (action.type) {
    case SET_AVAILABLE_FOR_WORK:
      return {
        ...state,
        availableForWork: !state.availableForWork,
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
