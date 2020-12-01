import { SET_AVAILABLE_FOR_WORK } from 'constants/actions';

export interface InitialStateTypes {
  availableForWork: boolean;
}

export interface SetAvailableForWorkAction {
  type: typeof SET_AVAILABLE_FOR_WORK;
}
