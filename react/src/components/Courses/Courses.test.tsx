import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@routing';
import { useAppSelector } from '@store/hooks';
import { coursesSelector } from '@store/slices/courses.slice';

import { Courses } from './Courses';

const courses = [
  {
    id: 'id1',
    title: 'title1',
    description: 'description1',
    creationDate: '12/12/12',
    duration: 210,
    authors: [{ name: 'author1' }, { name: 'author2' }],
  },
  {
    id: 'id2',
    title: 'title2',
    description: 'description2',
    creationDate: '12/12/12',
    duration: 210,
    authors: [{ name: 'author2' }],
  },
];

const storeMock = { courses };

jest.mock('@store/slices/courses.slice', () => ({
  ...jest.requireActual('@store/slices/courses.slice'),
  coursesSelector: jest.fn(),
}));

describe('Courses', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    (useAppSelector as jest.Mock).mockImplementation((cb) => cb && cb(storeMock));

    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    (coursesSelector as jest.Mock).mockReturnValue(courses);
  });

  afterEach(() => {
    (coursesSelector as jest.Mock).mockClear();
    (useAppSelector as jest.Mock).mockClear();
    (useNavigate as jest.Mock).mockClear();
  });

  test('renders Courses component', () => {
    render(<Courses />);

    expect(useAppSelector).toHaveBeenCalled();
    expect(coursesSelector).toHaveBeenCalled();
  });

  test('renders Courses cards', () => {
    render(<Courses />);

    expect(screen.getAllByTestId('course-card').length).toBe(courses.length);
  });
  test('should navigate to course', () => {
    render(<Courses />);

    fireEvent.click(screen.getByText('ADD NEW COURSE'));
    expect(navigateMock).toHaveBeenCalledWith(`/${ROUTES.courses}/${ROUTES.add}`);
  });
});
