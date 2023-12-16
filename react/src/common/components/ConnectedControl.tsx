import React, { FC } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { TextCommon } from '@styles/typography';

import { Label } from './Label';
import { Box } from './style/Box';

const Error = styled(TextCommon)`
	display: block;
	color: var(--error);
`;

type ConnectedControlProps = {
	label: string;
	name: string;
	options?: RegisterOptions;
	element: JSX.Element;
};

export const ConnectedControl: FC<ConnectedControlProps> = ({ name, label, options, element }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	return (
		<Box $width={'100%'}>
			<Label>{label}</Label>

			{React.cloneElement(element, {
				name,
				'aria-invalid': Boolean(errors[name]),
				...register(name, options),
			})}

			{errors[name]?.type === 'required' && <Error>{label} is required.</Error>}
		</Box>
	);
};
