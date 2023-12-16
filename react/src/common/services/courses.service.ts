import axios from 'axios';

import { ICourse, IResponse, ICourseDTO } from '@models';

import { API_URL } from './api.config';

const courseUrl = `${API_URL}/courses`;

export class CoursesService {
	all = () => axios.get<IResponse<ICourseDTO[]>>(`${courseUrl}/all`);

	create = (data: ICourseDTO) => axios.post<IResponse<ICourseDTO>>(`${courseUrl}/add`, data);

	update = (data: ICourseDTO) => axios.put<IResponse<ICourseDTO>>(`${courseUrl}/${data.id}`, data);

	delete = (id: string) => axios.delete<IResponse<ICourse>>(`${courseUrl}/${id}`);
}
