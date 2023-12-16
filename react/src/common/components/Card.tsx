import styled, { IStyledComponent } from 'styled-components';

import { BoxProps } from './style/Box';
import { Flex, FlexProps } from './style/Flex';

type DirtyFix = typeof Flex & IStyledComponent<'web', FlexProps & BoxProps>;

export const Card = styled(Flex as DirtyFix).attrs((p) => ({
  ...p,
  $flexDirection: p.$flexDirection || 'column',
  $padding: p.$padding || '30px 20px 30px',
}))`
  border: 1px solid var(--basic);
  background: var(--white);
`;
