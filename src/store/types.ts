import { UsersStateTypes } from './usersData/types';
import { SettingsStateTypes } from './settings/types';
import { AuthStateTypes } from './auth/types';

export interface GeneralStateTypes {
  settings: SettingsStateTypes;
  auth: AuthStateTypes;
  usersData: UsersStateTypes;
}
