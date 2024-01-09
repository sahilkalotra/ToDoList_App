import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3001';

export enum StorageKey {
  Authorization = 'Authorization',
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
  const unprotectedRoutes = ['/login', '/signUp'];

  if (unprotectedRoutes.includes(config?.url)) {
    config.headers.Authorization = null;
    return config;
  }
  config.headers.Authorization = await AsyncStorage.getItem(
    StorageKey.Authorization,
  );

  return config;
});
axiosInstance.interceptors.response.use(async response => {
  const authToken =
    response.data.Authorization ||
    response.headers.Authorization ||
    response.headers.authorization;
  if (authToken) {
    await AsyncStorage.setItem(StorageKey.Authorization, authToken);
  }
  return response;
});
