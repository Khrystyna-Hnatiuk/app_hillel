import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './features/todos/todosSlice';
import createSagaMiddleware from '@redux-saga/core';
import todosSaga from './features/todos/todosSaga';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
const rootReducer = combineReducers({
    todos: todosReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos'] 
}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const saga = createSagaMiddleware();
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
          serializableCheck: false, 
        }),
        saga
      ],
})
export const persistor = persistStore(store)
saga.run(todosSaga)
