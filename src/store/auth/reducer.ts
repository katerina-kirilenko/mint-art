import { SET_AUTORIZED_USER } from 'constants/actions';

import { SetIsAutorizedUser, AuthStateTypes } from './types';

const initialState = {
  isAutorizedUser: false,
};

export default (state = initialState, action: SetIsAutorizedUser): AuthStateTypes => {
  switch (action.type) {
    case SET_AUTORIZED_USER:
      return {
        ...state,
        isAutorizedUser: !state.isAutorizedUser,
      };
    default:
      return state;
  }
};
