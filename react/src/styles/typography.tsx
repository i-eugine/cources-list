import styled from 'styled-components';

const typography = (
	size: string,
	weight: number,
	height: string
) => styled.span`
	display: inline-block;
	font-size: ${size};
	font-weight: ${weight};
	line-height: ${height};
`;

export const Heading3 = typography('32px', 700, '30px');
export const Heading4 = typography('20px', 700, '32px');
export const Heading5 = typography('20px', 700, '20px');
export const TextCommon = typography('16px', 400, '20px');
export const TextBold = typography('16px', 700, '20px');
export const TextStandard = typography('16px', 400, '24px');
export const ButtonCaps = typography('16px', 700, '24px');
