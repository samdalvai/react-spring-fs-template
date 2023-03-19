import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI, logoutAPI, registerAPI } from '../services/authService';

export const register = createAsyncThunk('auth/register', async (userData) => {
    const response = await registerAPI(userData);
    return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
    const response = await loginAPI(userData);
    return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    await logoutAPI();
});