import { Button } from 'antd';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

const courses = [
  {
    id: 'id',
    title: 'title',
    description: 'description',
    creationDate: '12/12/12',
    duration: 210,
    authors: [{ name: 'author1' }, { name: 'author2' }],
  },
];

export const Courses = () => {
  return (
    <>
      <div className='flex gap-4 justify-between'>
        <SearchBar />
        <Button type='primary'>ADD NEW COURSE</Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {courses.map((c) => (
          <CourseCard course={c} />
        ))}
      </div>
    </>
  );
};
