import { ButtonCaps } from 'src/styles/typography';
import styled from 'styled-components';

export const Button = styled(ButtonCaps).attrs({ as: 'button' })`
	min-width: 140px;
	padding: 13px 36px;
	background-color: var(--primary);
	border: none;
	border-radius: 5px;
	text-align: center;
	color: var(--white);
	cursor: pointer;
`;
