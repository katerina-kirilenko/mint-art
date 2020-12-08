import { call, put, takeLatest } from 'redux-saga/effects';
import fetchData from 'api/fetchData';
import { USER_DATA_REQUEST } from 'constants/actions';
import { userDataResponse } from './actions';

function* getData() {
  try {
    const data = yield call(fetchData);

    yield put(userDataResponse(data));
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
}

export default function* (): Generator {
  yield takeLatest(USER_DATA_REQUEST, getData);
}
