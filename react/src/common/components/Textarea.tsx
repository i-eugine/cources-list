import styled from 'styled-components';

import { Input } from './Input';

export const Textarea = styled(Input).attrs({ as: 'textarea' })`
	min-height: 100px;
`;
