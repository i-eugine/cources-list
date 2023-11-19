import React, { useEffect } from 'react';
import { Navigate, matchRoutes, useLocation } from 'react-router-dom';

import { UserService, inject } from '@api';
import { ROUTES, protectedRoutes } from '@routing';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { userSelector } from '@store/selectors';
import { loginUser } from '@store/slices/user.slice';

export const AppGuard = ({ children }) => {
	console.log('rendering');
	const dispatch = useAppDispatch();

	const token = localStorage.getItem('token');
	const { isAuth } = useAppSelector(userSelector);
	const location = useLocation();
	const isProtectedRoute = matchRoutes(protectedRoutes, location);

	// ASk: why this called twice
	useEffect(() => {
		console.log('updating ', isAuth, token);
		if (token && !isAuth) {
			const userService = inject(UserService);
			userService.me().then((user) => dispatch(loginUser(user)));
		}
	}, [token, isAuth]);

	console.log('checking route', isAuth, isProtectedRoute);
	if (token && !isProtectedRoute) {
		return <Navigate to={ROUTES.courses} />;
	}

	if (!token && isProtectedRoute) {
		console.log('navigate');
		return <Navigate to={ROUTES.login} />;
	}

	return <>{children}</>;
};
