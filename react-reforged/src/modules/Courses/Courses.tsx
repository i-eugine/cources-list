import { Button } from 'antd';

import { Course } from '@models';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

const courses: Course[] = [
  {
    id: 'id',
    title: 'title',
    description: 'description',
    creationDate: '12/12/12',
    duration: 210,
    authors: [
      { id: 'id1', name: 'author1' },
      { id: 'id2', name: 'author2' },
    ],
  },
];

export const Courses = () => {
  return (
    <>
      <div className='flex gap-4 justify-between'>
        <SearchBar />
        <Button type='primary'>ADD NEW COURSE</Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4'>
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </>
  );
};
