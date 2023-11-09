import React, { FC, useState } from 'react';
import { CourseCard } from './components/CourseCard/CourseCard';
import styled from 'styled-components';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ICourse } from 'src/models/iCourse';
import { Button } from 'src/common';

const CoursesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const CoursesActions = styled.div`
	display: flex;
	justify-content: space-between;
`;

export interface Props {
	courses: ICourse[];
	showCourseHandler: (course: ICourse) => void;
}

export const Courses: FC<Props> = ({ courses, showCourseHandler }) => {
	const [currentCourses, setCurrentCourses] = useState(courses);

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
		<CoursesWrapper>
			<CoursesActions>
				<SearchBar searchHandler={searchHandler} />

				<Button>ADD NEW COURSE</Button>
			</CoursesActions>
			{currentCourses.map((course) => {
				return (
					<CourseCard
						key={course.id}
						course={course}
						showCourseHandler={showCourseHandler}
					/>
				);
			})}
		</CoursesWrapper>
	);
};
