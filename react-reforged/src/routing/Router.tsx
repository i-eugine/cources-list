import { createBrowserRouter, Navigate, redirect, RouteObject } from 'react-router-dom';

import { AppLayout, NotFoundPage } from '@components';
import { loadMainData, userLoader } from '@loaders';
import { CourseInfo, Courses, EditCourse } from '@modules/Courses';
import { EmptyCourseList } from '@modules/Courses/EmptyCourseList';
import { UserLogin, UserRegistration } from '@modules/User';
import { TokenManager } from '@store/token-manager';
import { getHref } from '@utils/get-href';

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
    lazy: async () => {
      const { Courses } = await import('@modules/Courses/Courses');
      return { Component: Courses };
    },
  },
  {
    path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}`,
    element: <CourseInfo />,
    lazy: async () => {
      const { CourseInfo } = await import('@modules/Courses/CourseInfo');
      return { Component: CourseInfo };
    },
  },
  {
    path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}/${ROUTES.edit}`,
    element: <EditCourse />,
    lazy: async () => {
      const { EditCourse } = await import('@modules/Courses/EditCourse');
      return { Component: EditCourse };
    },
  },
  {
    path: `${ROUTES.courses}/${ROUTES.create}`,
    element: <EditCourse />,
    lazy: async () => {
      const { EditCourse } = await import('@modules/Courses/EditCourse');
      return { Component: EditCourse };
    },
  },
  {
    path: ROUTES.noCourses,
    element: <EmptyCourseList />,
    lazy: async () => {
      const { EmptyCourseList } = await import('@modules/Courses/EmptyCourseList');
      return { Component: EmptyCourseList };
    },
  },
  {
    path: '*',
    element: <NotFoundPage />,
    lazy: async () => {
      const { NotFoundPage } = await import('@components');
      return { Component: NotFoundPage };
    },
  },
];

export const unprotectedRoutes: RouteObject[] = [
  {
    path: ROUTES.login,
    element: <UserLogin />,
    lazy: async () => {
      const { UserLogin } = await import('@modules/User/UserLogin');
      return { Component: UserLogin };
    },
  },
  {
    path: ROUTES.registration,
    element: <UserRegistration />,
    lazy: async () => {
      const { UserRegistration } = await import('@modules/User/UserRegistration');
      return { Component: UserRegistration };
    },
  },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      {
        path: '',
        children: [...protectedRoutes],
        loader: async () => {
          if (!TokenManager.getToken()) {
            return redirect(getHref(ROUTES.login));
          }

          await Promise.all([loadMainData(), userLoader()]);
          return null;
        },
      },
      ...unprotectedRoutes,
    ],
  },
]);
