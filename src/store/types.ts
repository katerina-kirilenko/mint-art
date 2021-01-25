import { UserStateTypes } from './userData/types';
import { SettingsStateTypes } from './settings/types';
import { AuthStateTypes } from './auth/types';

export interface GeneralStateTypes {
  settings: SettingsStateTypes;
  auth: AuthStateTypes;
  user: UserStateTypes;
}
