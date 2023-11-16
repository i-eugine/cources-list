import { authorsService } from '@api';
import { LoaderType } from '@helpers';

export type CreateCourseLoaderType = LoaderType<typeof createCourseLoader>;

export const createCourseLoader = async () => {
	const resp = await authorsService.all();
	return resp.data.result;
};
