import axios from 'axios';

import { IResponse, IAuthor, ICourse } from '@models';

import { API_URL } from './api.config';

class AuthorsService {
	all() {
		return axios.get<IResponse<IAuthor[]>>(`${API_URL}/authors/all`);
	}

	get(id: string) {
		return axios.get<IResponse<IAuthor>>(`${API_URL}/authors/${id}`);
	}

	async create(name: string) {
		const Authorization = localStorage.getItem('token');
		const result = await axios.post<IResponse<IAuthor>>(
			`${API_URL}/authors/add`,
			{ name },
			{
				headers: {
					Authorization,
				},
			}
		);

		return result.data.result;
	}

	delete(id: string) {
		return axios.delete<IResponse<ICourse>>(`${API_URL}/authors/${id}`);
	}
}

export const authorsService = new AuthorsService();
