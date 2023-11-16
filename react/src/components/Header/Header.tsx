import { Flex } from '@components/style/Flex';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@components';
import { ROUTES } from '@routing';

import { Logo } from './components/Logo/Logo';

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

	const name = localStorage.getItem('name');

	return (
		<HeaderWrapper>
			<Logo />

			{name && (
				<Flex $alignItems='center' $gap={'md'}>
					{name}
					<Button
						onClick={() => {
							localStorage.removeItem('name');
							localStorage.removeItem('token');
							navigate(`/${ROUTES.login}`);
						}}
					>
						LOGOUT
					</Button>
				</Flex>
			)}
		</HeaderWrapper>
	);
};
