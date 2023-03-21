import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, logoutAPI, signupAPI } from '../services/authService';

export const signup = createAsyncThunk('auth/signup', async (userData) => {
    const response = await signupAPI(userData);
    return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
    const response = await loginAPI(userData);
    return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await logoutAPI();
});