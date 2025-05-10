import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotel: null,
    loading: false,
    error: null,
    bookingInProgress: false

}
const hotelDetailsSlice = createSlice({
    name: 'hotelDetails',
    initialState,
    reducers: {
        fetchHotelRequest: (state) => {
            state.loading = true;
            state.bookingInProgress=false
            state.error = null;
        },
        fetchHotelSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.hotel = action.payload
        },
        fetchHotelFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        bookHotelRequest: (state) => {
            state.bookingInProgress = true;
            state.error = null
        },
        bookHotelSuccess: (state, action) => {
            state.hotel = action.payload;
            state.bookingInProgress = false;

        },
        bookHotelFailure: (state, action) => {

            state.error = action.payload;
            state.bookingInProgress = false;

        }

    }
})

export const { fetchHotelFailure, fetchHotelRequest, fetchHotelSuccess, bookHotelFailure,bookHotelSuccess,bookHotelRequest } = hotelDetailsSlice.actions;
export default hotelDetailsSlice.reducer;