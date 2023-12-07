import axios from 'axios';
import { IUser } from 'models/iUser';

import { IResponse } from '@models';

import { API_URL } from './api.config';

export class UserService {
	async me(): Promise<IUser> {
		const resp = await axios.get<IResponse<IUser>>(`${API_URL}/users/me`);

		const { name, email } = resp.data.result;

		return { name, email, isAuth: true };
	}
}
