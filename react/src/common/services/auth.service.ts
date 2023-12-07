import axios from 'axios';

import { ILoginRequest } from '@models';

import { API_URL } from './api.config';

export class AuthService {
	async login(data: ILoginRequest) {
		return await axios.post(`${API_URL}/login`, { ...data, name: null });
	}

	register(data: ILoginRequest) {
		return axios.post(`${API_URL}/register`, data);
	}

	logout(_: string) {
		throw new Error('TODO');
	}
}
