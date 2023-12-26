import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { ROUTES } from '@routing/routes';
import { courses } from '@store/signals';
import { getHref } from '@utils/get-href';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

export const Courses = () => {
  return (
    <>
      <div className='flex gap-5 justify-between'>
        <SearchBar />

        <Link to={getHref(ROUTES.courses, ROUTES.create)}>
          <Button type='primary'>ADD NEW COURSE</Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
        {courses.value.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </>
  );
};
