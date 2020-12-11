import { call, put, select, takeLatest } from 'redux-saga/effects';
import fetchUserData from 'api/fetchUserData';
import fetchUserShots from 'api/fetchUserShots';
import fetchUserShot from 'api/fetchUserShot';
import { USER_DATA_REQUEST, USER_SHOTS_REQUEST, USER_SHOT_REQUEST } from 'constants/actions';
import { selectShotModal } from './selectors';
import {
  userDataResponse,
  userDataFailed,
  userShotsResponse,
  userShotsFailed,
  userShotResponse,
  userShotFailed,
} from './actions';

function* getUserData() {
  try {
    const user = yield call(fetchUserData);

    yield put(userDataResponse(user));
  } catch (error) {
    yield put(userDataFailed(`Something went wrong ${error}`));
  }
}

function* getUserShots() {
  try {
    const shots = yield call(fetchUserShots);

    yield put(userShotsResponse(shots));
  } catch (error) {
    yield put(userShotsFailed(`Something went wrong ${error}`));
  }
}

function* getUserShot() {
  try {
    const { shotModalId } = yield select(selectShotModal);
    const shot = yield call(fetchUserShot, shotModalId);

    yield put(userShotResponse(shot));
  } catch (error) {
    yield put(userShotFailed(`Something went wrong ${error}`));
  }
}

export default function* (): Generator {
  yield takeLatest(USER_DATA_REQUEST, getUserData);
  yield takeLatest(USER_SHOTS_REQUEST, getUserShots);
  yield takeLatest(USER_SHOT_REQUEST, getUserShot);
}
