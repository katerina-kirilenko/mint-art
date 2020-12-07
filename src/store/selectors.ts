import { createSelector } from 'reselect';
import { InitialStateTypes } from './types';

const getState = (state: InitialStateTypes) => state;

export const isAvailableForWork = (state: InitialStateTypes): boolean => state.availableForWork;

export const isAutorizedUser = (state: InitialStateTypes): boolean => state.isAutorizedUser;

export const currentTheme = (state: InitialStateTypes): string => state.currentTheme;

export const selectUserData = createSelector(getState, ({ data, isLoadingData }) => {
  return { data, isLoadingData };
});
