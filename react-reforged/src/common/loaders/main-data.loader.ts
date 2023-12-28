import { Author } from '@models';
import { AuthorsService, CoursesService } from '@services';
import { courses, setAuthors, setCourses } from '@store/signals';

export const loadMainData = async () => {
  const [coursesData, authorsData] = await Promise.all([
    CoursesService.all(),
    AuthorsService.all(),
  ]);
  console.log(loadMainData);
  setAuthors(authorsData.data.result);
  setCourses(
    coursesData.data.result.map((course) => ({
      ...course,
      authors: course.authors
        .map((authorId) => authorsData.data.result.find(({ id }) => authorId === id))
        .filter(Boolean) as Author[],
    }))
  );

  console.log(courses.value);
};
