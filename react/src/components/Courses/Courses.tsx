import React, { FC, useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '@components';
import { Flex } from '@components/style/Flex';
import { ICourse } from '@models';
import { ROUTES } from '@routing';
import { useAppSelector } from '@store/hooks';
import { coursesSelector } from '@store/slices/courses.slice';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';

const filterCourses = (courses: ICourse[], search) => {
	const value = search.toLowerCase();

	return courses.filter(({ id, title }) => id === value || title.toLowerCase().includes(value));
};

export const Courses: FC = () => {
	const navigate = useNavigate();

	const [search, setSearch] = useState('');

	const courses = useAppSelector(coursesSelector);
	const currentCourses = useMemo(
		() => (search ? filterCourses(courses, search) : courses),
		[search, courses]
	);

	if (!courses.length) {
		return <Navigate to={`/${ROUTES.noCourses}`} />;
	}

	return (
		<Flex $flexDirection='column' $gap={'xl'}>
			<Flex $justifyContent='space-between'>
				<SearchBar searchHandler={setSearch} />

				<Button onClick={() => navigate(`/${ROUTES.courses}/${ROUTES.add}`)}>ADD NEW COURSE</Button>
			</Flex>
			{currentCourses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</Flex>
	);
};
