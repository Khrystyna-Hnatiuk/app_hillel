import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotels: [],
    loading: false,
    error: null

}
const hotelsSlice = createSlice({
    name: 'hotels',
     initialState,
    reducers: {
        fetchHotelsRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchHotelsSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.hotels = action.payload
        },
        fetchHotelsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }

    }
})

export const {fetchHotelsFailure,fetchHotelsRequest,fetchHotelsSuccess} =  hotelsSlice.actions;
export default hotelsSlice.reducer;