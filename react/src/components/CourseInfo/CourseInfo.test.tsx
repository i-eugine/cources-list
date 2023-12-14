import { render, screen } from '@testing-library/react';
import theoretically from 'jest-theories';
import React from 'react';
import { useParams } from 'react-router-dom';

import { ROUTE_PARAM } from '@routing';
import { useAppSelector } from '@store/hooks';
import { courseByIdSelector } from '@store/slices/courses.slice';

import { CourseInfo } from './CourseInfo';

const course = {
	id: 'id',
	title: 'title',
	description: 'description',
	creationDate: '12/12/12',
	duration: 210,
	authors: [{ name: 'author1' }, { name: 'author2' }],
};

const storeMock = {
	courses: [course],
};

jest.mock('@store/slices/courses.slice', () => ({
	...jest.requireActual('@store/slices/courses.slice'),
	courseByIdSelector: jest.fn(),
}));

describe('CourseInfo', () => {
	beforeEach(() => {
		(courseByIdSelector as jest.Mock).mockImplementation(() => (s) => s.courses[0]);
		(useAppSelector as jest.Mock).mockImplementation((cb) => cb && cb(storeMock));
		(useParams as jest.Mock).mockReturnValue({ [ROUTE_PARAM.courseId]: 'id' });
	});

	afterEach(() => {
		(courseByIdSelector as jest.Mock).mockClear();
		(useAppSelector as jest.Mock).mockClear();
		(useParams as jest.Mock).mockClear();
	});

	test('renders CourseInfo component', () => {
		render(<CourseInfo />);

		expect(useParams).toHaveBeenCalled();
		expect(useAppSelector).toHaveBeenCalled();
		expect(courseByIdSelector).toHaveBeenCalledWith('id');
	});

	describe('render fields', () => {
		const theories = [
			{ name: 'title', value: course.title },
			{ name: 'description', value: course.description },
			{ name: 'duration', value: '03:30' },
			{ name: 'creationDate', value: '12/12/12' },
			{ name: 'authors', value: 'author1, author2' },
		];

		theoretically('renders {name}', theories, ({ value }) => {
			render(<CourseInfo />);
			expect(screen.getByText(value)).toBeInTheDocument();
		});
	});
});
