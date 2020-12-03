import { InitialStateTypes } from './types';

export const isAvailableForWork = (state: InitialStateTypes): boolean => state.availableForWork;

export const isAutorizedUser = (state: InitialStateTypes): boolean => state.isAutorizedUser;

export const currentTheme = (state: InitialStateTypes): string => state.currentTheme;
