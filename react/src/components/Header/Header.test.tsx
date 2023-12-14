import { render, screen } from '@testing-library/react';
import React from 'react';

import { useAppSelector } from '@store/hooks';

import { Header } from './Header';

const storeMock = {
	user: {
		isAuth: true,
		name: 'Test name',
	},
};

describe('Header', () => {
	beforeEach(() => {
		(useAppSelector as jest.Mock).mockImplementation((cb) => cb && cb(storeMock));
	});

	afterEach(() => {
		(useAppSelector as jest.Mock).mockClear();
	});

	test('renders Header component', () => {
		render(<Header />);
	});

	test('renders User name', () => {
		render(<Header />);

		expect(screen.getByText(storeMock.user.name)).toBeInTheDocument();
	});
	test('renders Logo', () => {
		render(<Header />);

		expect(screen.getByAltText('logo')).toBeInTheDocument();
	});
});
