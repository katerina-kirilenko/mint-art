import { call, put, select, takeLatest } from 'redux-saga/effects';
import fetchUserData from 'api/fetchUserData';
import fetchUserShots from 'api/fetchUserShots';
import fetchUserShot from 'api/fetchUserShot';
import { USER_DATA_REQUEST, USER_SHOTS_REQUEST, USER_SHOT_REQUEST } from 'constants/actions';
import { selectShotModal } from './selectors';
import { getSettings } from 'store/settings';
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
    const { currentPage, showBy } = yield select(getSettings);
    const shotsByPage = yield call(fetchUserShots, currentPage + 1, showBy);

    yield put(userShotsResponse(shotsByPage));
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
