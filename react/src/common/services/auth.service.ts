import axios from 'axios';

import { ILoginRequest } from '@models';

import { API_URL } from './api.config';

export class AuthService {
  login = (data: ILoginRequest) => axios.post(`${API_URL}/login`, { ...data, name: null });

  register = (data: ILoginRequest) => axios.post(`${API_URL}/register`, data);
}
