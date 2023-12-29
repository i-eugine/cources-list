import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { Link, Navigate } from 'react-router-dom';

import { ROUTES } from '@routing/routes';
import { coursesStore } from '@store/courses.store';
import { getHref } from '@utils/get-href';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { useSearch } from './hooks/useSearch.hook';

export const Courses = observer(function Courses() {
  const { courses, filterCourses } = coursesStore;
  const [search, _] = useSearch();

  const filteredCourses = filterCourses(search);

  if (!courses.length) {
    return <Navigate to={getHref(ROUTES.noCourses)} />;
  }

  return (
    <>
      <div className='flex gap-5 justify-between'>
        <SearchBar />

        <Link to={getHref(ROUTES.courses, ROUTES.create)}>
          <Button type='primary'>ADD NEW COURSE</Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
        {filteredCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </>
  );
});
