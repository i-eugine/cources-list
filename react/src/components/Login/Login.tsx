import React from 'react';
import { useNavigate } from 'react-router-dom';

import { authService } from '@api';
import { PageCentered, LoginForm, NavigationLink } from '@components';
import { ROUTES } from '@routing';
import { Heading3 } from '@styles/typography';

export const Login = () => {
	const navigate = useNavigate();

	const handleFormSubmit = async (data) => {
		await authService.login(data);

		navigate(`/${ROUTES.courses}`);
	};

	return (
		<PageCentered>
			<Heading3 $marginBottom={'xl'}>Login</Heading3>

			<LoginForm withName={false} onFormSubmit={handleFormSubmit}>
				<p>
					If you have an account you may{' '}
					<NavigationLink to={ROUTES.registration}>Register</NavigationLink>
				</p>
			</LoginForm>
		</PageCentered>
	);
};
