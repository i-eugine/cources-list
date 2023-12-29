import { Author } from '@models';
import { AuthorsService, CoursesService } from '@services';
import { authorsStore } from '@store/authors.store';
import { coursesStore } from '@store/courses.store';

export const loadMainData = async () => {
  const [coursesData, authorsData] = await Promise.all([
    CoursesService.all(),
    AuthorsService.all(),
  ]);

  const { setCourses } = coursesStore;
  const { setAuthors } = authorsStore;

  setAuthors(authorsData.data.result);
  setCourses(
    coursesData.data.result.map((course) => ({
      ...course,
      authors: course.authors
        .map((authorId) => authorsData.data.result.find(({ id }) => authorId === id))
        .filter(Boolean) as Author[],
    }))
  );
};
