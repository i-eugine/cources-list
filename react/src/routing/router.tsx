import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { inject, CoursesService, AuthorsService } from '@api';
import { Layout } from '@components';
import { CourseInfo, couseInfoLoader } from '@pages/CourseInfo';
import { Courses } from '@pages/Courses';
import { CreateCourse } from '@pages/CreateCourse';
import { EmptyCourseList } from '@pages/EmptyCourseList';
import { Login } from '@pages/Login';
import { Registration } from '@pages/Registration';
import { store } from '@store/index';
import { getAllAuthors } from '@store/slices/authors.slice';
import { getAllCourses } from '@store/slices/courses.slice';

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
		loader: couseInfoLoader,
	},
	{
		path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}/${ROUTES.edit}`,
		element: <CreateCourse />,
		loader: couseInfoLoader,
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
				loader: async () => {
					const courses = inject(CoursesService);
					const authors = inject(AuthorsService);

					const [allCourses, allAuthros] = await Promise.all([courses.all(), authors.all()]);

					store.dispatch(getAllAuthors(allAuthros));
					store.dispatch(getAllCourses(allCourses));

					return null;
				},
				children: [...protectedRoutes],
			},
			...unprotectedRoutes,
		],
	},
]);
