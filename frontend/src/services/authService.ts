import axios from 'axios';

const baseUrl = '/api/auth';

export const registerAPI = async (userData: any) => {
    const response = await axios.post(`${baseUrl}/register`, userData);
    return response;
};

export const loginAPI = async (userData: any) => {
    const response = await axios.post(`${baseUrl}/login`, userData);
    return response;
};

export const logoutAPI = async () => {
    await axios.post(`${baseUrl}/logout`);
};