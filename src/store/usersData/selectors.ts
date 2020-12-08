import { GeneralStateTypes } from 'store/types';
import { UsersStateTypes } from './types';

export const selectUserData = (state: GeneralStateTypes): UsersStateTypes => state.usersData;
