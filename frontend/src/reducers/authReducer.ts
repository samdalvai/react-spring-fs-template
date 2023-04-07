import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, logoutAPI, signupAPI, userAPI } from '../services/authService';

interface AuthState {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
    error: any;
  }

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
};

export type UserLoginData = {
    username: String,
    password: String
}

export type UserSignupData = {
    username: String,
    email: String,
    password: String
}

export const login = createAsyncThunk('auth/login', async (userData: UserLoginData) => {
    const response = await loginAPI(userData);
    return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await logoutAPI();
});

export const autoLogin = createAsyncThunk('auth/autoLogin', async () => {
    const response = await userAPI();
    return response.data;
});

export const signup = createAsyncThunk('auth/signup', async (userData: UserSignupData) => {
    const response = await signupAPI(userData);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(autoLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(autoLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(autoLogin.rejected, (state, action) => {
                state.loading = false;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;