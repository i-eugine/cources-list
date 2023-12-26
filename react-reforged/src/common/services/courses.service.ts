import axios from 'axios';

import { Resp, CourseDTO, CourseEditForm, CourseCreateForm } from '@models';

import { API_URL } from './api.config';

const coursesUrl = `${API_URL}/courses`;

export const CoursesService = {
  all: () => axios.get<Resp<CourseDTO[]>>(`${coursesUrl}/all`),
  create: (course: CourseCreateForm) => axios.post<Resp<CourseDTO>>(`${coursesUrl}/add`, course),
  update: (course: CourseEditForm) =>
    axios.put<Resp<CourseDTO>>(`${coursesUrl}/${course.id}`, course),
  delete: (id: string) => axios.delete<Resp<CourseDTO>>(`${coursesUrl}/${id}`),
};
