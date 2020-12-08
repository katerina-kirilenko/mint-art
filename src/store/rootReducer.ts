import { combineReducers } from 'redux';
import settings from './settings/reducer';
import auth from './auth/reducer';
import usersData from './usersData/reducer';

export default combineReducers({
  settings,
  auth,
  usersData,
});
