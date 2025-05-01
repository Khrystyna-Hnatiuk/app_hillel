import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentItem: null,
  loading: false,
  error: null,
};

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    fetchSwapiByUid: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSwapiByUidSuccess: (state, action) => {
      state.loading = false;
      state.currentItem = action.payload;
    },
    fetchSwapiByUidFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Unknown error';
    },
    clearCurrentItem: (state) => {
      state.currentItem = null;
      state.error = null;
    },
  },
});

export const { fetchSwapiByUid, fetchSwapiByUidSuccess, fetchSwapiByUidFailure, clearCurrentItem } = swapiSlice.actions;

export default swapiSlice.reducer;
