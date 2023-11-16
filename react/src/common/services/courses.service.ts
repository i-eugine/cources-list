import axios from 'axios';

import { getCourseDuration, formatCreationDate } from '@helpers';
import { ICourse, IResponse, ICourseDTO, IAuthor } from '@models';

import { API_URL } from './api.config';
import { authorsService } from './authors.service';

class CoursesService {
	async all(): Promise<ICourse[]> {
		const [courses, authors] = await Promise.all([
			axios.get<IResponse<ICourseDTO[]>>(`${API_URL}/courses/all`),
			authorsService.all(),
		]);

		return courses.data.result.map((course) =>
			this.mapCourse(course, authors.data.result)
		);
	}

	async get(id: string) {
		const [course, authors] = await Promise.all([
			axios.get<IResponse<ICourseDTO>>(`${API_URL}/courses/${id}`),
			authorsService.all(),
		]);

		return this.mapCourse(course.data.result, authors.data.result);
	}

	async create(data: any) {
		const Authorization = localStorage.getItem('token');
		const result = await axios.post<IResponse<ICourse>>(
			`${API_URL}/courses/add`,
			data,
			{
				headers: {
					Authorization,
				},
			}
		);
		console.log(result);
		return result.data.result;
	}

	private mapCourse(course: ICourseDTO, authors: IAuthor[]): ICourse {
		return {
			...course,
			duration: getCourseDuration(course.duration),
			creationDate: formatCreationDate(course.creationDate),
			authors: course.authors
				.map((authorId) => authors.find(({ id }) => authorId === id))
				.filter(Boolean),
		};
	}
}

export const coursesService = new CoursesService();
