import axios from 'axios';

import { MESSAGE_KEYS, withMessage } from '@common-modules/message';
import { Resp, CourseDTO, CourseEditForm, CourseCreateForm } from '@models';

import { API_URL } from './api.config';

const coursesUrl = `${API_URL}/courses`;
export class CoursesService {
  static all() {
    return axios.get<Resp<CourseDTO[]>>(`${coursesUrl}/all`);
  }

  @withMessage(MESSAGE_KEYS.AUTHOR_CREATE)
  static create(course: CourseCreateForm) {
    return axios.post<Resp<CourseDTO>>(`${coursesUrl}/add`, course);
  }

  @withMessage(MESSAGE_KEYS.COURSE_SAVE)
  static update(course: CourseEditForm) {
    return axios.put<Resp<CourseDTO>>(`${coursesUrl}/${course.id}`, course);
  }

  @withMessage(MESSAGE_KEYS.COURSE_DELETE)
  static delete(id: string) {
    return axios.delete(`${coursesUrl}/${id}`);
  }
}
