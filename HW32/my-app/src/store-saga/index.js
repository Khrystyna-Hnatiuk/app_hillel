import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todos/todosSlice';
import createSagaMiddleware from '@redux-saga/core';
import todosSaga from './todos/todosSaga';
import {swapiSaga} from './swapi/swapiSaga'
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import swapiReducer from './swapi/swapiSlice';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    todos: todosReducer,
    swapi:  swapiReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos','swapi'] 
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
function* rootSaga(){
  yield all([
    todosSaga(),swapiSaga()
  ])
}
export const persistor = persistStore(store)
saga.run(rootSaga)
