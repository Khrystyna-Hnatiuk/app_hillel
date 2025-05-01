import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchSwapiByUid } from './swapiSlice';

const fetchSwapiData = async (uid) => {
  const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
  if (!response.ok) {
    throw new Error('Swapi not found');
  }
  const data = await response.json();
  return data.result;
};

function* fetchSwapiByUidSaga(action) {
  try {
    const data = yield call(fetchSwapiData, action.payload);
    yield put({ type: 'swapi/fetchSwapiByUidSuccess', payload: data });
  } catch (err) {
    yield put({ type: 'swapi/fetchSwapiByUidFailure', payload: err.message });
  }
}

export function* swapiSaga() {
  yield takeLatest('swapi/fetchSwapiByUid', fetchSwapiByUidSaga);
}
