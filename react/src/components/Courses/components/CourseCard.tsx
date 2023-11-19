import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CoursesService, inject } from '@api';
import { Button, PencilIcon, TrashIcon } from '@components';
import { ButtonIcon } from '@components/ButtonIcon';
import { Flex } from '@components/style/Flex';
import { getCourseDuration } from '@helpers';
import { ICourse } from '@models';
import { ROUTES } from '@routing';
import { useAppDispatch } from '@store/hooks';
import { deleteCourse } from '@store/slices/courses.slice';
import { TextCommon, Heading4, TextBold } from '@styles/typography';

const CardWrapper = styled.div`
	padding: 21px 24px 35px;
	background-color: var(--white);
	box-shadow: 2px 0px 8px 0px #00000040;
	border-radius: 5px;
	border-left: 7px solid#333E48;
`;

const CardInfo = styled.div`
	min-width: 324px;
`;

interface Props {
	course: ICourse;
}

const toCourseUrl = (courseIs: string, isEdit?: boolean) =>
	`/${ROUTES.courses}/${courseIs}${isEdit ? '/edit' : ''}`;

// ASK why not store.dispatch
export const CourseCard: FC<Props> = ({ course }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleDelete = async () => {
		const courses = inject(CoursesService);
		await courses.delete(course.id);
		dispatch(deleteCourse(course.id));
	};

	return (
		<CardWrapper>
			<Heading4>{course.title}</Heading4>

			<Flex $gap={'xl'} $justifyContent='space-between' $marginTop={'sm'}>
				<TextCommon>{course.description}</TextCommon>

				<CardInfo>
					<div>
						<div>
							<TextCommon>
								<TextBold>Authors: </TextBold> {course.authors.map(({ name }) => name).join(', ')}
							</TextCommon>
						</div>

						<div>
							<TextCommon>
								<TextBold>Duration: </TextBold> {getCourseDuration(course.duration)} hours
							</TextCommon>
						</div>

						<div>
							<TextCommon>
								<TextBold>Created: </TextBold> {course.creationDate}
							</TextCommon>
						</div>
					</div>

					<Flex $gap={'sm'} $marginTop={'xl'}>
						<Button onClick={() => navigate(toCourseUrl(course.id))}>SHOW COURSE</Button>

						<ButtonIcon onClick={handleDelete}>
							<TrashIcon />
						</ButtonIcon>

						<ButtonIcon onClick={() => navigate(toCourseUrl(course.id, true))}>
							<PencilIcon />
						</ButtonIcon>
					</Flex>
				</CardInfo>
			</Flex>
		</CardWrapper>
	);
};
