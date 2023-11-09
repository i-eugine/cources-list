import React, { useCallback, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import styled from 'styled-components';
import { Courses } from './components/Courses/Courses';
import { EmptyCourseList } from './components/EmptyCourseList/EmptyCourseList';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { formatCreationDate, getCourseDuration } from './helpers';
import { ICourse } from './models/iCourse';
import { IAuthor } from './models/iAuthor';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

const MainContent = styled.div`
	width: 1122px;
	height: calc(100vh - 80px);
	padding-top: 74px;
	margin: auto;
`;
const courses: ICourse[] = mockedCoursesList.map((course) => ({
	...course,
	creationDate: formatCreationDate(course.creationDate),
	duration: getCourseDuration(course.duration),
	authors: course.authors.map((id) =>
		mockedAuthorsList.find((author) => id === author.id)
	),
}));

const App = () => {
	const [current, setCurrent] = useState<ICourse | null>(null);

	const showCourse = (course: ICourse) => setCurrent(course);
	const backHandler = () => setCurrent(null);

	return (
		<>
			<Header />
			<MainContent>
				{!current && (
					<Courses courses={courses} showCourseHandler={showCourse} />
				)}
				{current && <CourseInfo course={current} backHandler={backHandler} />}

				{/* <EmptyCourseList /> */}
			</MainContent>
		</>
	);
};

export default App;
