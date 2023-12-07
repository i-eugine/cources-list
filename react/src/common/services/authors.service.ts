import axios from 'axios';

import { IResponse, IAuthor, ICourse } from '@models';

import { API_URL } from './api.config';

export class AuthorsService {
	all = () => axios.get<IResponse<IAuthor[]>>(`${API_URL}/authors/all`);

	get = (id: string) => axios.get<IResponse<IAuthor>>(`${API_URL}/authors/${id}`);

	create = (name: string) => axios.post<IResponse<IAuthor>>(`${API_URL}/authors/add`, { name });

	delete = (id: string) => axios.delete<IResponse<ICourse>>(`${API_URL}/authors/${id}`, {});
}
