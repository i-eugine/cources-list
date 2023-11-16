import { LoaderFunctionArgs } from 'react-router-dom';

import { coursesService } from '@api';
import { ROUTE_PARAM } from '@routing';

export const couseInfoLoader = async (args: LoaderFunctionArgs) => {
	const courseId = args.params[ROUTE_PARAM.courseId];
	return await coursesService.get(courseId);
};
