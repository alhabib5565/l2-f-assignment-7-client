import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

type TUser = {
    email: string
    iat: number;
    exp: number;
}

type TInitaialState = {
    user: null | TUser,
    token: null | string
}

const initialState: TInitaialState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        logout: (state) => {
            state.user = null
            state.token = null
        }
    }
})

const persistConfig = {
    key: 'root',
    storage,
}

export const userPersistReducer = persistReducer(persistConfig, authSlice.reducer)

export const user = (state: RootState) => state.auth.user

export const { login, logout } = authSlice.actions
export default authSlice.reducer