import axios from 'axios';

axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	config.headers.setAuthorization(token);
	return config;
});

export * from './auth.service';
export * from './courses.service';
export * from './authors.service';
export * from './user.service';

export * from './inject';
