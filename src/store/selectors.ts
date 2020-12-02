import { InitialStateTypes } from './types';

export const isAvailableForWork = (state: InitialStateTypes): boolean => state.availableForWork;

export const isAutorizedUser = (state: InitialStateTypes): boolean => state.isAutorizedUser;
