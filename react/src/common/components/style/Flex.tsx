import styled from 'styled-components';

import { Box, SpacingType, spacingMapping } from './Box';

type JustifyContentSettings =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'space-evenly';

export interface FlexProps {
	$flexDirection: 'row' | 'column';
	$gap: SpacingType;
	$alignItems: AlignSetting;
	$justifyContent: JustifyContentSettings;
}

export const Flex = styled(Box)<Partial<FlexProps>>`
	display: flex;
	flex-direction: ${(p) => p.$flexDirection};
	gap: ${(p) => spacingMapping[p.$gap] || p.$gap};
	align-items: ${(p) => p.$alignItems};
	justify-content: ${(p) => p.$justifyContent};
`;
