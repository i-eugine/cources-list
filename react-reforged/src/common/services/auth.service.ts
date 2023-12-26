import axios from 'axios';

import { LoginRequest, User, Resp, LoginResponse } from '@models';

import { API_URL } from './api.config';

export const AuthService = {
  login: (data: LoginRequest) =>
    axios.post<LoginResponse>(`${API_URL}/login`, { ...data, name: null }),
  register: (data: LoginRequest) => axios.post(`${API_URL}/register`, data),
  me: () => axios.get<Resp<User>>(`${API_URL}/users/me`),
};
