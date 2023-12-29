import { action, observable } from 'mobx';

import { Course } from '@models';
import { CoursesService } from '@services';

class CoursesStore {
  @observable accessor courses: Course[] = [];

  @action.bound setCourses(courses: Course[]) {
    this.courses = courses;
  }

  @action.bound addCourse(course: Course) {
    this.courses = [...this.courses, course];
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
