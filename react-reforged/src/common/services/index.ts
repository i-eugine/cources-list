import axios from 'axios';

import { TokenManager } from '@store/token-manager';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.setAuthorization(token);
  return config;
});

axios.interceptors.response.use(null, (error) => {
  if (error.response?.status === 401) {
    TokenManager.removeToken();
    window.location.href = '/';
  }
});

export * from './auth.service';
export * from './courses.service';
export * from './authors.service';
