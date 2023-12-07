import axios from 'axios';

import { inject } from '@api';
import { formatCreationDate } from '@helpers';
import { ICourse, IResponse, ICourseDTO, IAuthor } from '@models';

import { API_URL } from './api.config';
import { AuthorsService } from './authors.service';

export class CoursesService {
	private authrors: AuthorsService;

	constructor() {
		this.authrors = inject(AuthorsService);
	}

	all() {
		return axios.get<IResponse<ICourseDTO[]>>(`${API_URL}/courses/all`);
	}

	async get(id: string) {
		const [course, authors] = await Promise.all([
			axios.get<IResponse<ICourseDTO>>(`${API_URL}/courses/${id}`),
			this.authrors.all(),
		]);

		return this.mapCourse(course.data.result, authors.data.result);
	}

	create(data: ICourseDTO) {
		return axios.post<IResponse<ICourseDTO>>(`${API_URL}/courses/add`, data);
	}
	update(data: ICourseDTO) {
		return axios.put<IResponse<ICourseDTO>>(`${API_URL}/courses/${data.id}`, data);
	}

	delete(id: string) {
		return axios.delete<IResponse<ICourse>>(`${API_URL}/authors/${id}`);
	}

	private mapCourse(course: ICourseDTO, authors: IAuthor[]): ICourse {
		return {
			...course,
			creationDate: formatCreationDate(course.creationDate),
			authors: course.authors
				.map((authorId) => authors.find(({ id }) => authorId === id))
				.filter(Boolean),
		};
	}
}
