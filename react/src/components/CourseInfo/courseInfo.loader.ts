import { LoaderFunctionArgs } from 'react-router-dom';

import { CoursesService, inject } from '@api';
import { ROUTE_PARAM } from '@routing';

export const couseInfoLoader = async (args: LoaderFunctionArgs) => {
	const courseId = args.params[ROUTE_PARAM.courseId];
	const courses = inject(CoursesService);
	return await courses.get(courseId);
};
