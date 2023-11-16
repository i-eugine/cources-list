import { createCourseLoader } from '@pages/CreateCourse/createCourse.loader';
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from '@components';
import { CourseInfo, couseInfoLoader } from '@pages/CourseInfo';
import { Courses, cousesLoader } from '@pages/Courses';
import { CreateCourse } from '@pages/CreateCourse';
import { Login } from '@pages/Login';
import { Registration } from '@pages/Registration';

import { ROUTE_PARAM } from './route-param';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Navigate to={ROUTES.courses} />,
			},
			{
				path: ROUTES.courses,
				element: <Courses />,
				loader: cousesLoader,
			},
			{
				path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}`,
				element: <CourseInfo />,
				loader: couseInfoLoader,
			},
			{
				path: `${ROUTES.courses}/${ROUTES.add}`,
				element: <CreateCourse />,
				loader: createCourseLoader,
			},
			{
				path: ROUTES.login,
				element: <Login />,
			},
			{
				path: ROUTES.registration,
				element: <Registration />,
			},
		],
	},
]);
