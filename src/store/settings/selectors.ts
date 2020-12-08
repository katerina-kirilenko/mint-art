import { GeneralStateTypes } from 'store/types';
import { SettingsStateTypes } from './types';

export const getSettings = (state: GeneralStateTypes): SettingsStateTypes => state.settings;
