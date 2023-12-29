import { useParams } from 'react-router';

import { CourseEditForm } from '@models';
import { ROUTE_PARAM } from '@routing/route-param';
import { coursesStore } from '@store/courses.store';

export const useSelectedCourse = () => {
  const { getCourse } = coursesStore;

  const params = useParams();
  const courseId = params[ROUTE_PARAM.courseId];
  return getCourse(courseId);
};

export const useSelectedCourseForm = () => {
  const course = useSelectedCourse();

  return course
    ? ({ ...course, authors: course.authors.map((a) => a.id) } as CourseEditForm)
    : null;
};
