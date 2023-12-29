import axios from 'axios';

import { MESSAGE_KEYS, withMessage } from '@common-modules/message';
import { LoginRequest, User, Resp, LoginResponse } from '@models';

import { API_URL } from './api.config';

export class AuthService {
  @withMessage(MESSAGE_KEYS.USER_LOGIN)
  static login(data: LoginRequest) {
    return axios.post<LoginResponse>(`${API_URL}/login`, { ...data, name: null });
  }

  @withMessage(MESSAGE_KEYS.USER_REGISTER)
  static register(data: LoginRequest) {
    return axios.post(`${API_URL}/register`, data);
  }

  static me() {
    return axios.get<Resp<User>>(`${API_URL}/users/me`);
  }
}
