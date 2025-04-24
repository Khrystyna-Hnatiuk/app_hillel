import { createSlice } from "@reduxjs/toolkit";
import { fetchSwapiByUd } from './swapiThunks';


const initialState = {
    currentItem: null,
    loading: false,
    error: null
}

const swapiSlice = createSlice({
    name: 'swapi',
    initialState,
    reducers: {
        clearCurrentItem: (state) => {
            state.currentItem = null;
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSwapiByUd.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(fetchSwapiByUd.fulfilled, (state, action) => {
                state.loading = false;
                state.currentItem = action.payload;

            })
            .addCase(fetchSwapiByUd.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message || "Unknown error";
            })
    }
})
export const { clearCurrentItem } = swapiSlice.actions;
export default swapiSlice.reducer;