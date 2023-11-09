import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from 'src/common';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	padding: 15px 30px;
	background-color: var(--white);
	box-shadow: 1px 1px 4px 0px #00000026;
`;

export const Header = () => (
	<HeaderWrapper>
		<Logo />

		<Button>LOGIN</Button>
	</HeaderWrapper>
);
