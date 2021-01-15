import { GeneralStateTypes } from 'store/types';
import { AuthStateTypes } from './types';

export const getAuth = (state: GeneralStateTypes): AuthStateTypes => state.auth;
