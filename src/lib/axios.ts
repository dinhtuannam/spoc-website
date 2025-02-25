import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';

// import { getToken, removeTokens } from '@/helpers/storage.helper';
const { logout } = useAuth();

function getAxios(baseURL: string) {
    const ins = axios.create({
        baseURL,
    });
    ins.interceptors.request.use(function (config) {
        const accessToken = false; //getToken();

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        config.headers['Content-Type'] = 'application/json';

        return config;
    });

    ins.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401) {
                logout();
                window.location.href = '/auth/dang-nhap';
            }
            return Promise.reject(error);
        },
    );

    return ins;
}

const production = 'https://spoc-api.onrender.com';
const dev = 'https://localhost:7204';
export const API_PATH: string = production;
export const API = getAxios(API_PATH);
