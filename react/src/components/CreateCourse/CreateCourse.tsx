import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card, ConnectedControl, Input, Textarea } from '@components';
import { Box } from '@components/style/Box';
import { Flex } from '@components/style/Flex';
import { getCourseDuration } from '@helpers';
import { ICourse } from '@models';
import { ROUTES, ROUTE_PARAM } from '@routing';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { saveAuthor, deleteAuthor } from '@store/slices/authors.slice';
import { addCourse, courseByIdSelector, saveCourse } from '@store/slices/courses.slice';
import { Heading3, TextCommon, Heading4, TextBold } from '@styles/typography';

import { AuthorItem } from './components/AuthorItem';
import { AuthorsBlock } from './components/AuthorsBlock';
import { useCreateCourse } from './useCreateCourse.hook';

const DurationDisplay = styled(TextCommon)`
	white-space: nowrap;
`;

export const AUTHORS_FIELD = 'authors';

export const CreateCourse = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const id = useParams()[ROUTE_PARAM.courseId];
	console.log(id);
	const course = id ? useAppSelector(courseByIdSelector(id)) : null;

	const { methods, duration, courseAuthors, authors, handleAuthorAdd, handleAuthorExclude } =
		useCreateCourse(course);

	const handleAuthorCreate = async (name: string) => dispatch(saveAuthor(name));
	const handleAuthorDelete = async (id: string) => dispatch(deleteAuthor(id));

	const handleCourseSubmit = methods.handleSubmit(async (form: ICourse) => {
		await dispatch((course ? saveCourse : addCourse)(form));
		navigate(`/${ROUTES.courses}`);
	});

	return (
		<div>
			<Heading3 $marginBottom={'xl'}>Course edit/create page</Heading3>

			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(handleCourseSubmit)}>
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
									authors={authors}
									onAdd={handleAuthorAdd}
									onCreate={handleAuthorCreate}
									onDelete={handleAuthorDelete}
								/>
							</Box>

							<Box $width={'200px'}>
								<Heading4>Course Authors</Heading4>

								<Box $padding={'md'}>
									{courseAuthors.length ? (
										courseAuthors.map((author) => (
											<AuthorItem key={author.id} author={author} onDelete={handleAuthorExclude} />
										))
									) : (
										<TextCommon>Author list is empty</TextCommon>
									)}
								</Box>
							</Box>
						</Flex>
					</Card>

					<Flex $gap={'md'} $justifyContent={'flex-end'} $marginTop={'md'} $width={'100%'}>
						<Button type='button' onClick={() => navigate(-1)}>
							cancel
						</Button>

						<Button type='submit'>create course</Button>
					</Flex>
				</form>
			</FormProvider>
		</div>
	);
};
