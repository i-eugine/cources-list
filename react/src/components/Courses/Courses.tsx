import { Flex } from '@components/style/Flex';
import React, { FC, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@components';
import { ICourse } from '@models';
import { ROUTES } from '@routing';

import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { cousesLoader } from './courses.loader';

const CoursesActions = styled.div`
	display: flex;
	justify-content: space-between;
`;

const filterCourses = (courses: ICourse[], search) => {
	const value = search.toLowerCase();

	return courses.filter(
		({ id, title }) => id === value || title.toLowerCase().includes(value)
	);
};

export const Courses: FC = () => {
	const navigate = useNavigate();

	const [search, setSearch] = useState('');

	const courses = useLoaderData() as Awaited<ReturnType<typeof cousesLoader>>;

	const currentCourses =
		useMemo(() => {
			console.log('ara', courses);
			return search ? filterCourses(courses, search) : courses;
		}, [search]) || [];

	console.log(currentCourses);

	const searchHandler = (value: string) => {
		const search = value.toLowerCase();

		setCurrentCourses(
			value
				? courses.filter(
						({ id, title }) =>
							id === search || title.toLowerCase().includes(search)
				  )
				: courses
		);
	};

	return (
		<Flex $flexDirection='column' $gap={'xl'}>
			<Flex $justifyContent='space-between'>
				<SearchBar searchHandler={searchHandler} />

				<Button onClick={() => navigate(`/${ROUTES.courses}/${ROUTES.add}`)}>
					ADD NEW COURSE
				</Button>
			</Flex>
			{currentCourses.map((course) => {
				return <CourseCard key={course.id} course={course} />;
			})}
		</Flex>
	);
};
