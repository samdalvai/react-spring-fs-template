import client from "./client";

const baseUrl = 'api/auth';

export const signupAPI = async (userData: any) => {
    const response = await client.post(`${baseUrl}/signup`, userData);
    return response;
};

export const loginAPI = async (userData: any) => {
    const response = await client.post(`${baseUrl}/login`, userData);
    return response;
};

export const logoutAPI = async () => {
    await client.post(`${baseUrl}/logout`);
};