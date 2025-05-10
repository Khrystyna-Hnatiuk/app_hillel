import api from "@/services/axiosService";
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchHotelsFailure, fetchHotelsSuccess, fetchHotelsRequest } from "./hotelsSlice";


function* loadHotelsSaga() {
    try {
        const response = yield call(api.get, '/hotels');
        yield put(fetchHotelsSuccess(response.data))
    }
    catch (error) {
        yield put(fetchHotelsFailure(error.message))
    }
}
export function* watchHotelsSaga() {
    yield takeEvery(fetchHotelsRequest.type, loadHotelsSaga)
}