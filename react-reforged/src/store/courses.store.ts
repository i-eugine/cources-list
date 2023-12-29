import { action, observable } from 'mobx';

import { Author, Course, CourseCreateForm, CourseDTO, CourseEditForm } from '@models';
import { CoursesService } from '@services';

import { authorsStore } from './authors.store';

const mapCourse = (course: CourseDTO): Course => {
  const { authors } = authorsStore;

  return {
    ...course,
    authors: course.authors
      .map((id) => authors.find((a) => a.id === id))
      .filter(Boolean) as Author[],
  };
};

class CoursesStore {
  @observable accessor courses: Course[] = [];

  @action.bound setCourses(courses: Course[]) {
    this.courses = courses;
  }

  @action.bound async addCourse(data: CourseCreateForm) {
    const resp = await CoursesService.create(data);

    this.courses = [...this.courses, mapCourse(resp.data.result)];
  }

  @action.bound async ediitCourse(data: CourseEditForm) {
    await CoursesService.update(data);

    const index = this.courses.findIndex((c) => c.id === data.id);
    index !== -1 && this.courses.with(index, mapCourse(data));
  }

  @action.bound async deleteCourse(id: string) {
    await CoursesService.delete(id);
    this.courses = this.courses.filter((c) => c.id !== id);
  }

  getCourse = (id: string = '') => this.courses.find((c) => c.id === id);
  filterCourses = (query: string) =>
    query ? this.courses.filter((c) => c.title.includes(query)) : this.courses;
}

export const coursesStore = new CoursesStore();
