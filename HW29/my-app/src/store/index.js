import {configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../store/features/favoritesSlice'
import todolistReducer from '../store/features/todolistSlice'
export const store = configureStore({
    reducer:{
        favorites :favoritesReducer,
        todos:todolistReducer,
    }
})