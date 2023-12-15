import React from 'react';
import { Navigate, matchRoutes, useLocation } from 'react-router-dom';

import { TokenManager } from '@api';
import { ROUTES, protectedRoutes } from '@routing';

export const AppGuard = ({ children }) => {
	const token = TokenManager;
	const location = useLocation();
	const isProtectedRoute = matchRoutes(protectedRoutes, location);

	if (token && !isProtectedRoute) {
		return <Navigate to={ROUTES.courses} />;
	}

	if (!token && isProtectedRoute) {
		return <Navigate to={ROUTES.login} />;
	}

	return <>{children}</>;
};
