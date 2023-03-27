import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {feedReducer} from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['newsFeed'],
};

const rootReducer = combineReducers({
  feedReducer: persistReducer(persistConfig, feedReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
