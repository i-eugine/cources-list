import { useComputed } from '@preact/signals-react';
import { useNavigate, useParams } from 'react-router';

import { Course, CourseEditForm } from '@models';
import { ROUTE_PARAM } from '@routing/route-param';
import { ROUTES } from '@routing/routes';
import { courses } from '@store/signals';
import { getHref } from '@utils/get-href';

export const useSelectedCourseInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const courseId = params[ROUTE_PARAM.courseId];

  if (!courseId) {
    navigate(getHref(ROUTES.courses));
  }

  const course = useComputed(() => courses.value.find((c) => c.id === courseId));

  if (!course.value) {
    navigate(getHref(ROUTES.courses));
  }

  return course.value as Course;
};

export const useSelectedCourseForm = () => {
  const course = useSelectedCourseInfo();

  return { ...course, authors: course.authors.map((a) => a.id) } as CourseEditForm;
};
