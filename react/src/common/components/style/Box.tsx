import styled from 'styled-components';

import { Literal } from '@helpers';

export const spacingMapping = {
  xs: 'var(--gap-xs)',
  sm: 'var(--gap-sm)',
  md: 'var(--gap-md)',
  lg: 'var(--gap-lg)',
  xl: 'var(--gap-xl)',
};

export type SpacingType = Literal<keyof typeof spacingMapping>;

export interface BoxProps {
  $width: string;
  $height: string;

  $marginBottom: SpacingType;
  $marginTop: SpacingType;
  $marginRight: SpacingType;
  $marginLeft: SpacingType;
  $margin: SpacingType;

  $padding: SpacingType;
  $paddingTop: SpacingType;

  $flexGrow: number;
}

const spacing = (space: SpacingType) => spacingMapping[space] || space;

export const Box = styled.div<Partial<BoxProps>>`
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};

  margin-bottom: ${(p) => spacing(p.$marginBottom)};
  margin-top: ${(p) => spacing(p.$marginTop)};
  margin-right: ${(p) => spacing(p.$marginRight)};
  margin-left: ${(p) => spacing(p.$marginLeft)};
  margin: ${(p) => spacing(p.$margin)};

  padding-top: ${(p) => spacing(p.$paddingTop)};
  padding: ${(p) => spacing(p.$padding)};

  flex-grow: ${(p) => p.$flexGrow};
`;
