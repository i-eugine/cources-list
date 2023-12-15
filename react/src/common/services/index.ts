import axios from 'axios';

import { TokenManager } from './token-manager';

axios.interceptors.request.use((config) => {
	const token = TokenManager.getToken();
	config.headers.setAuthorization(token);
	return config;
});

export * from './auth.service';
export * from './courses.service';
export * from './authors.service';
export * from './user.service';

export * from './token-manager';

export * from './inject';
