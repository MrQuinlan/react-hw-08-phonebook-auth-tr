import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './Auth';

import { filter } from './Filter/Filter-reducer';

import { contactsApi } from '../services/contacts-api';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter,

        devTools: process.env.NODE_ENV === 'development',
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(contactsApi.middleware),
});

let persistor = persistStore(store);

export { store, persistor };
