import { coursesService } from '@api';

export const cousesLoader = async () => {
	const resp = await coursesService.all();
	return resp;
};
