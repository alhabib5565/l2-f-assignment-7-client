import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { userPersistReducer } from "./features/auth/authSlice";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import themeSlice from "./features/theme/themeSlice";
export const store = configureStore({
    reducer: {
        auth: userPersistReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        theme: themeSlice
    },
    middleware: (getDEfaultMiddleWare) => getDEfaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(baseApi.middleware)
})


export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const themeSate = (state: RootState) => state.theme