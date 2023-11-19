import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService, inject } from '@api';
import { PageCentered, LoginForm, NavigationLink } from '@components';
import { ROUTES } from '@routing';
import { useAppDispatch } from '@store/hooks';
import { loginUser } from '@store/slices/user.slice';
import { Heading3 } from '@styles/typography';

export const Login = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleFormSubmit = async (data) => {
		const auth = inject(AuthService);
		const user = await auth.login(data);
		dispatch(loginUser(user));
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
