import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import userReducer from '../userSlice/index'
import { persistReducer, persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  
}

const persistedReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [logger]
 
})

export const persistor = persistStore(store)
