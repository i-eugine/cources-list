import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import { AppLayout } from '@common/components/Layout';
import { loadMainData, userLoader } from '@common/loaders';
import { CourseInfo, Courses, EditCourse } from '@modules/Courses';
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
  },
  {
    path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}`,
    element: <CourseInfo />,
  },
  {
    path: `${ROUTES.courses}/:${ROUTE_PARAM.courseId}/${ROUTES.edit}`,
    element: <EditCourse />,
  },
  {
    path: `${ROUTES.courses}/${ROUTES.create}`,
    element: <EditCourse />,
  },
  // todo add 404
  // TODO: add empty course list
  // {
  //   path: ROUTES.noCourses,
  //   element: <EmptyCourseList />,
  // },
];

export const unprotectedRoutes = [
  {
    path: ROUTES.login,
    element: <UserLogin />,
  },
  {
    path: ROUTES.registration,
    element: <UserRegistration />,
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
            console.log('redirect');
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
