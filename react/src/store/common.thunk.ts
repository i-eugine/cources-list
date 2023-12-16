import { inject, CoursesService, AuthorsService } from '@api';
import { AppDispatch } from '@store';

import { getAllAuthors } from './slices/authors.slice';
import { getAllCourses } from './slices/courses.slice';

export const getData = () => async (dispatch: AppDispatch) => {
  const coursesService = inject(CoursesService);
  const authorsService = inject(AuthorsService);

  const [courses, authors] = await Promise.all([coursesService.all(), authorsService.all()]);

  dispatch(getAllAuthors(authors.data.result));
  dispatch(
    getAllCourses(
      courses.data.result.map((c) => ({
        ...c,
        authors: c.authors
          .map((authorId) => authors.data.result.find(({ id }) => authorId === id))
          .filter(Boolean),
      }))
    )
  );

  return null;
};
