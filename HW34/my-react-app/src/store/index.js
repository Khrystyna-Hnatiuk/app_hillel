import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import hotelsReducer from './hotelsList/hotelsSlice';
import hotelDetailsReducer from './hotelDetails/hotelDetailsSlice';
import { watchHotelsSaga } from './hotelsList/hotelsSaga';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { watchHotelDetailsSaga } from './hotelDetails/hotelDetailsSaga';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ 
  history: createBrowserHistory(),
});

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['hotels','hotelDetails']
}
const rootReducer= combineReducers({
  hotels: hotelsReducer,
  hotelDetails:hotelDetailsReducer,
  router:routerReducer,
})
const persistedReducer = persistReducer(persistConfig,rootReducer)
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }).concat(routerMiddleware, sagaMiddleware),

});
export const persistor = persistStore(store)
export const reduxHistory = createReduxHistory(store);


sagaMiddleware.run(watchHotelsSaga);
sagaMiddleware.run(watchHotelDetailsSaga);

