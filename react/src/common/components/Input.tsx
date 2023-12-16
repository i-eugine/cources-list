import styled from 'styled-components';

import { TextStandard } from '@styles/typography';

export const Input = styled(TextStandard).attrs({ as: 'input' })`
  width: 100%;
  padding: 13px 18px;
  border: 1px solid #cfcfcf;
  border-radius: 5px;
  background: var(--white);

  ::placeholder {
    color: var(--basic);
  }

  &[aria-invalid='true'] {
    border-color: var(--error);
  }
`;
