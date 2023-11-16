import { Box } from '@components/style/Box';
import { Flex } from '@components/style/Flex';
import React, { useCallback, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { authorsService, coursesService } from '@api';
import { Button, Card, ConnectedControl, Input, Textarea } from '@components';
import { getCourseDuration } from '@helpers';
import { IAuthor } from '@models';
import { ROUTES } from '@routing';
import { Heading3, TextCommon, Heading4, TextBold } from '@styles/typography';

import { AuthorItem } from './components/AuthorItem';
import { AuthorsBlock } from './components/AuthorsBlock';
import { CreateCourseLoaderType } from './createCourse.loader';

const DurationDisplay = styled(TextCommon)`
	white-space: nowrap;
`;

export const AUTHORS_FIELD = 'authors';

export const CreateCourse = () => {
	const navigate = useNavigate();

	const authorsList = useLoaderData() as CreateCourseLoaderType;
	const [allAuthors, setAllAuthors] = useState(authorsList);

	/** TODO */
	const methods = useForm<any>({
		mode: 'onBlur',
		reValidateMode: 'onChange',

		defaultValues: {
			[AUTHORS_FIELD]: [],
		},
	});
	const { register, control, setValue, handleSubmit } = methods;

	register(AUTHORS_FIELD, { value: [] });

	const duration = useWatch({ control, name: 'duration' });
	const authorList = useWatch({
		control,
		name: AUTHORS_FIELD,
	});

	console.log(authorList);

	const handleAuthorAdd = useCallback(
		(author: IAuthor) => {
			setValue(AUTHORS_FIELD, [...authorList, author]);
			setAllAuthors(allAuthors.filter(({ id }) => author.id !== id));
		},
		[authorList, setValue]
	);

	const handleAuthorCreate = async (name) => {
		const author = await authorsService.create(name);
		setAllAuthors([...allAuthors, author]);
	};

	const handleAuthorDelete = async (id) => {
		await authorsService.delete(id);
		setAllAuthors(allAuthors.filter((author) => author.id !== id));
	};

	const handleAuthorExclude = (author) => {
		setAllAuthors([...allAuthors, author]);
		setValue(
			AUTHORS_FIELD,
			authorList.filter(({ id }) => author.id !== id)
		);
	};

	const handleCourseSubmit = async (data) => {
		console.log(data);

		const req = {
			...data,
			duration: parseInt(data.duration),
			authors: data[AUTHORS_FIELD].map(({ id }) => id),
		};
		await coursesService.create(req);

		navigate(`/${ROUTES.courses}`);
	};

	return (
		<div>
			<Heading3 $marginBottom={'xl'}>Course edit/create page</Heading3>

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(handleCourseSubmit)}>
					<Card $flexDirection={'column'} $gap={'md'}>
						<Heading4>Main info</Heading4>
						<ConnectedControl
							element={<Input />}
							label='Title'
							name='title'
							options={{ required: true }}
						/>
						<ConnectedControl
							element={<Textarea />}
							label='Description'
							name='description'
							options={{ required: true }}
						/>

						<Flex $alignItems={'end'} $width={'50%'}>
							<ConnectedControl
								element={<Input type='number' />}
								label='Duration'
								name='duration'
								options={{ required: true }}
							/>

							{duration && (
								<DurationDisplay $padding='sm'>
									<TextBold>{getCourseDuration(duration)}</TextBold> hours
								</DurationDisplay>
							)}
						</Flex>

						<Flex $gap={'md'}>
							<Box $flexGrow={1}>
								<Heading4>Authors</Heading4>

								<AuthorsBlock
									authors={allAuthors}
									onAdd={handleAuthorAdd}
									onCreate={handleAuthorCreate}
									onDelete={handleAuthorDelete}
								/>
							</Box>

							<Box $width={'200px'}>
								<Heading4>Course Authors</Heading4>

								<Box $padding={'md'}>
									{authorList.length ? (
										authorList.map((author) => (
											<AuthorItem
												key={author.id}
												author={author}
												onDelete={handleAuthorExclude}
											/>
										))
									) : (
										<TextCommon>Author list is empty</TextCommon>
									)}
								</Box>
							</Box>
						</Flex>
					</Card>

					<Flex
						$gap={'md'}
						$justifyContent={'flex-end'}
						$marginTop={'md'}
						$width={'100%'}
					>
						<Button>cancel</Button>
						<Button type='submit'>create course</Button>
					</Flex>
				</form>
			</FormProvider>
		</div>
	);
};
