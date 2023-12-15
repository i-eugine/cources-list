import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { TokenManager } from '@api';
import { Layout } from '@components';
import { CourseInfo } from '@pages/CourseInfo';
import { Courses } from '@pages/Courses';
import { CreateCourse } from '@pages/CreateCourse';
import { EmptyCourseList } from '@pages/EmptyCourseList';
import { Login } from '@pages/Login';
import { Registration } from '@pages/Registration';
import { getData } from '@store/common.thunk';
import { store } from '@store/index';
import { authUser } from '@store/slices/user.slice';

import { ROUTE_PARAM } from './route-param';
import { ROUTES } from './routes';

export const protectedRoutes = [
	{
		path: '',
		element: <Navigate to={ROUTES.courses} />,
	},
	{
		path: ROUTES.courses,
		element: <Courses />,
	},
	{
		path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}`,
		element: <CourseInfo />,
	},
	{
		path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}/${ROUTES.edit}`,
		element: <CreateCourse />,
	},
	{
		path: `${ROUTES.courses}/${ROUTES.add}`,
		element: <CreateCourse />,
	},
	{
		path: ROUTES.noCourses,
		element: <EmptyCourseList />,
	},
];

export const unprotectedRoutes = [
	{
		path: ROUTES.login,
		element: <Login />,
	},
	{
		path: ROUTES.registration,
		element: <Registration />,
	},
];

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				loader: () =>
					Promise.allSettled(
						TokenManager.getToken()
							? [store.dispatch(getData()), store.dispatch(authUser())]
							: [store.dispatch(getData())]
					),
				children: [...protectedRoutes],
			},
			...unprotectedRoutes,
		],
	},
]);
