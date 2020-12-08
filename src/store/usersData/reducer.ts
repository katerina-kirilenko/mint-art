import { USER_DATA_REQUEST, USER_DATA_RESPONSE } from 'constants/actions';
import { ActionTypes, UsersStateTypes } from './types';

const initialState: UsersStateTypes = {
  usersData: [],
  isLoadingData: false,
};

export default (state = initialState, action: ActionTypes): UsersStateTypes => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        isLoadingData: true,
      };
    case USER_DATA_RESPONSE:
      return {
        ...state,
        isLoadingData: false,
        usersData: action.payload,
      };
    default:
      return state;
  }
};
