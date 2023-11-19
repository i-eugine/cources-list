import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@components';
import { Box } from '@components/style';
import { ROUTES } from '@routing';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { userSelector } from '@store/selectors';
import { logoutUser } from '@store/slices/user.slice';

import { Logo } from './components/Logo';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	padding: 15px 30px;
	background-color: var(--white);
	box-shadow: 1px 1px 4px 0px #00000026;
`;

export const Header = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const user = useAppSelector(userSelector);

	return (
		<HeaderWrapper>
			<Logo />

			{user.isAuth && (
				<Box>
					{user.name || user.email}
					<Button
						$marginLeft={'xs'}
						onClick={() => {
							localStorage.removeItem('token');
							dispatch(logoutUser());
						}}
					>
						LOGOUT
					</Button>
				</Box>
			)}

			{!user.isAuth && <Button onClick={() => navigate(`/${ROUTES.login}`)}>LOGIN</Button>}
		</HeaderWrapper>
	);
};
