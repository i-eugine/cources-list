import axios from 'axios';

import { API_URL } from './api.config';

export interface ILoginRequest {
	name: string;
	email: string;
	password: string;
}

class AuthService {
	async login(data: ILoginRequest) {
		const resp = await axios.post(`${API_URL}/login`, { ...data, name: null });
		console.log(resp.data);
		const { email, name } = resp.data.user;
		localStorage.setItem('token', resp.data.result);
		localStorage.setItem('name', name || email);
		return;
	}

	register(data: ILoginRequest) {
		return axios.post(`${API_URL}/register`, data);
	}

	logout(authorization: string) {
		throw new Error('TODO');
	}
}

export const authService = new AuthService();
