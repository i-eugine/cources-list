import { AuthService } from './auth.service';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { UserService } from './user.service';

type Constructor<T> = new () => T;

type Injectables = UserService | AuthService | AuthorsService | CoursesService;

const injectorContainer = new Map();

export const inject = <T extends Injectables>(target: Constructor<T>): T => {
	if (injectorContainer.has(target)) {
		return injectorContainer.get(target);
	}

	const instance = new target();
	injectorContainer.set(target, instance);

	return instance;
};
