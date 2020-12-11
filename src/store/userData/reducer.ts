import {
  USER_DATA_REQUEST,
  USER_DATA_RESPONSE,
  USER_DATA_FAILED,
  USER_SHOTS_REQUEST,
  USER_SHOTS_RESPONSE,
  USER_SHOTS_FAILED,
  USER_SHOT_REQUEST,
  USER_SHOT_RESPONSE,
  USER_SHOT_FAILED,
  OPEN_SHOT_MODAL,
  CLOSE_SHOT_MODAL,
} from 'constants/actions';
import { ActionTypes, UserStateTypes } from './types';

const initialState: UserStateTypes = {
  userData: {
    user: null,
    isLoadingUser: false,
    errorUser: null,
  },
  userShots: {
    shots: [],
    isLoadingShots: false,
    errorShots: null,
  },
  shotModal: {
    isOpen: false,
    shotModalId: '',
    shotData: {
      shot: null,
      isLoadingShot: false,
      errorShot: null,
    },
  },
};

export default (state = initialState, action: ActionTypes): UserStateTypes => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoadingUser: true,
        },
      };
    case USER_DATA_RESPONSE:
      return {
        ...state,
        userData: {
          ...state.userData,
          user: action.payload,
          isLoadingUser: false,
        },
      };
    case USER_DATA_FAILED:
      return {
        ...state,
        userData: {
          ...state.userData,
          errorUser: action.payload,
          isLoadingUser: false,
        },
      };
    case USER_SHOTS_REQUEST:
      return {
        ...state,
        userShots: {
          ...state.userShots,
          isLoadingShots: true,
        },
      };
    case USER_SHOTS_RESPONSE:
      return {
        ...state,
        userShots: {
          ...state.userShots,
          shots: action.payload,
          isLoadingShots: false,
        },
      };
    case USER_SHOTS_FAILED:
      return {
        ...state,
        userShots: {
          ...state.userShots,
          errorShots: action.payload,
          isLoadingShots: false,
        },
      };
    case USER_SHOT_REQUEST:
      return {
        ...state,
        shotModal: {
          ...state.shotModal,
          shotData: {
            ...state.shotModal.shotData,
            isLoadingShot: true,
          },
        },
      };
    case USER_SHOT_RESPONSE:
      return {
        ...state,
        shotModal: {
          ...state.shotModal,
          shotData: {
            ...state.shotModal.shotData,
            shot: action.payload,
            isLoadingShot: false,
          },
        },
      };
    case USER_SHOT_FAILED:
      return {
        ...state,
        shotModal: {
          ...state.shotModal,
          shotData: {
            ...state.shotModal.shotData,
            errorShot: action.payload,
            isLoadingShot: false,
          },
        },
      };
    case OPEN_SHOT_MODAL:
      return {
        ...state,
        shotModal: {
          ...state.shotModal,
          isOpen: true,
          shotModalId: action.payload,
        },
      };
    case CLOSE_SHOT_MODAL:
      return {
        ...state,
        shotModal: {
          ...state.shotModal,
          isOpen: false,
          shotModalId: '',
          shotData: {
            ...state.shotModal.shotData,
            shot: null,
            errorShot: null,
          },
        },
      };
    default:
      return state;
  }
};
