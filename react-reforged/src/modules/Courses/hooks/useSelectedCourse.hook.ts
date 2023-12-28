import { useComputed } from '@preact/signals-react';
import { useParams } from 'react-router';

import { CourseEditForm } from '@models';
import { ROUTE_PARAM } from '@routing/route-param';
import { courses } from '@store/signals';

const useSelectedCourse = () => {
  const params = useParams();
  const courseId = params[ROUTE_PARAM.courseId];
  return useComputed(() => courses.value.find((c) => c.id === courseId));
};

export const useSelectedCourseInfo = () => {
  const course = useSelectedCourse();
  return course.value;
};

export const useSelectedCourseForm = () => {
  const course = useSelectedCourse();

  return course.value
    ? ({ ...course.value, authors: course.value.authors.map((a) => a.id) } as CourseEditForm)
    : null;
};
