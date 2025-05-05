import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from '../store/features/favoritesSlice'
import todolistReducer from '../store/features/todolistSlice'
import counterSlice from "./features/counterSlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import { persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['todos', 'favorites'],

}

const rootReducer = combineReducers({
    todos: todolistReducer,
    favorites: favoritesReducer,
    counter:counterSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
})
export const persistor = persistStore(store)