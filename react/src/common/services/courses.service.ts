import axios from 'axios';

import { inject } from '@api';
import { formatCreationDate } from '@helpers';
import { ICourse, IResponse, ICourseDTO, IAuthor } from '@models';

import { API_URL } from './api.config';
import { AuthorsService } from './authors.service';

// TODO: axios interseptor
export class CoursesService {
	private authrors: AuthorsService;

	constructor() {
		this.authrors = inject(AuthorsService);
	}

	async all(): Promise<ICourse[]> {
		const [courses, authors] = await Promise.all([
			axios.get<IResponse<ICourseDTO[]>>(`${API_URL}/courses/all`),
			this.authrors.all(),
		]);

		return courses.data.result.map((course) => this.mapCourse(course, authors));
	}

	async get(id: string) {
		const [course, authors] = await Promise.all([
			axios.get<IResponse<ICourseDTO>>(`${API_URL}/courses/${id}`),
			this.authrors.all(),
		]);

		return this.mapCourse(course.data.result, authors);
	}

	async create(data: ICourse) {
		const Authorization = localStorage.getItem('token');
		const result = await axios.post<IResponse<ICourseDTO>>(
			`${API_URL}/courses/add`,
			this.toDTO(data),
			{
				headers: {
					Authorization,
				},
			}
		);
		console.log(result);
		return result.data.result;
	}
	async update(data: ICourse) {
		const Authorization = localStorage.getItem('token');
		const result = await axios.put<IResponse<ICourseDTO>>(
			`${API_URL}/courses/${data.id}`,
			this.toDTO(data),
			{
				headers: { Authorization },
			}
		);
		console.log(result);
		return result.data.result;
	}

	async delete(id: string) {
		const Authorization = localStorage.getItem('token');
		return axios.delete<IResponse<ICourse>>(`${API_URL}/authors/${id}`, {
			headers: { Authorization },
		});
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

	private toDTO(form: ICourse): ICourseDTO {
		return {
			...form,
			authors: form.authors.map(({ id }) => id),
			duration: parseInt(`${form.duration}`),
		};
	}
}
