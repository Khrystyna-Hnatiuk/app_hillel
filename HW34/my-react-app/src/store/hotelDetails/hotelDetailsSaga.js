import api from "@/services/axiosService";
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchHotelFailure, fetchHotelRequest, fetchHotelSuccess,bookHotelFailure,bookHotelRequest,bookHotelSuccess } from "./hotelDetailsSlice";


function* loadHotelSaga(action) {
    try {
        const response = yield call(api.get, `/hotels/${action.payload}`);
        yield put(fetchHotelSuccess(response.data))
    }
    catch (error) {
        yield put(fetchHotelFailure(error.message))
    }
}

function* bookHotelSaga(action){
    try {
         yield call(api.patch, `/hotels/${action.payload}`, {booked:true});
         const updatedHotel = yield call(api.get, `/hotels/${action.payload}`);

        yield put(bookHotelSuccess(updatedHotel.data))
    }
    catch (error) {
        yield put(bookHotelFailure())
    }
}
export function* watchHotelDetailsSaga() {
    yield takeEvery(fetchHotelRequest.type, loadHotelSaga)
    yield takeEvery(bookHotelRequest.type, bookHotelSaga)

}