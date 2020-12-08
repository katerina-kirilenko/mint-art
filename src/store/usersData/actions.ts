import { USER_DATA_REQUEST, USER_DATA_RESPONSE } from 'constants/actions';
import { RequestDataAction, ResponseDataAction, User } from './types';

export const userDataRequest = (): RequestDataAction => ({
  type: USER_DATA_REQUEST,
});

export const userDataResponse = (data: User[]): ResponseDataAction => ({
  type: USER_DATA_RESPONSE,
  payload: data,
});
