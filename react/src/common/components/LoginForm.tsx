import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Button } from '@components';

import { Card } from './Card';
import { ConnectedControl } from './ConnectedControl';
import { Input } from './Input';

export const LoginForm = ({ withName = true, onFormSubmit, children }) => {
	const methods = useForm({ mode: 'onBlur' });

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit((data) => onFormSubmit(data))}>
				<Card
					$alignItems={'center'}
					$flexDirection='column'
					$gap={'30px'}
					$paddingTop='60px'
					$width='600px'
				>
					{withName && (
						<ConnectedControl
							element={<Input />}
							label='Name'
							name='name'
							options={{ required: true }}
						/>
					)}

					<ConnectedControl
						element={<Input />}
						label='Email'
						name='email'
						options={{ required: true }}
					/>

					<ConnectedControl
						element={<Input />}
						label='Password'
						name='password'
						options={{ required: true }}
					/>

					<Button type='submit'>login</Button>

					{children}
				</Card>
			</form>
		</FormProvider>
	);
};
