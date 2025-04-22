import {configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../store/features/favoritesSlice'
import todolistReducer from '../store/features/todolistSlice'
import counterSlice from "./features/counterSlice";
export const store = configureStore({
    reducer:{
        favorites :favoritesReducer,
        todos:todolistReducer,
        counter:counterSlice
    }
})