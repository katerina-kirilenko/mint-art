import { createSelector } from 'reselect';
import { GeneralStateTypes } from 'store/types';
import { UserData, UserShots, ShotModal } from './types';

export const selectUserData = (state: GeneralStateTypes): UserData => state.user.userData;

export const selectUserShots = (state: GeneralStateTypes): UserShots => state.user.userShots;

export const selectShotModal = (state: GeneralStateTypes): ShotModal => state.user.shotModal;

export const selectShotData = createSelector(selectShotModal, (shotModal) => shotModal.shotData);
