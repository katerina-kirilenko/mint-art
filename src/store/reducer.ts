import { SET_AVAILABLE_FOR_WORK } from 'constants/actions';
import { SetAvailableForWorkAction, InitialStateTypes } from './types';

const initialState = {
  availableForWork: false,
};

export default (state = initialState, action: SetAvailableForWorkAction): InitialStateTypes => {
  switch (action.type) {
    case SET_AVAILABLE_FOR_WORK:
      return {
        ...state,
        availableForWork: !state.availableForWork,
      };
    default:
      return state;
  }
};
