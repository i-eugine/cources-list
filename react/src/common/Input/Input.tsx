import { TextStandard } from 'src/styles/typography';
import styled from 'styled-components';

export const Input = styled(TextStandard).attrs({ as: 'input' })`
	min-width: 400px;
	padding: 13px 18px;
	border: 1px solid #cfcfcf;
	border-radius: 5px;
	background: var(--white);

	::placeholder {
		color: var(--basic);
	}
`;
