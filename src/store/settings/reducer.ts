import {
  SET_AVAILABLE_FOR_WORK,
  SET_THEME,
  SET_CURRENT_PAGE,
  SET_SHOW_BY,
} from 'constants/actions';
import { LIGHT } from 'constants/themes';
import { ActionTypes, SettingsStateTypes } from './types';

const initialState = {
  availableForWork: false,
  currentTheme: LIGHT,
  currentPage: 1,
  showBy: '4',
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SHOW_BY:
      return {
        ...state,
        showBy: action.payload,
      };

    default:
      return state;
  }
};
