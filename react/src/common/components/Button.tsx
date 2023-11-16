import styled from 'styled-components';

import { ButtonCaps } from '@styles/typography';

export const Button = styled(ButtonCaps).attrs({ as: 'button' })`
	min-width: 140px;
	padding: 13px 36px;
	background-color: var(--primary);
	border: none;
	border-radius: 5px;
	text-align: center;
	white-space: nowrap;
	text-transform: uppercase;
	color: var(--white);
	cursor: pointer;
`;
