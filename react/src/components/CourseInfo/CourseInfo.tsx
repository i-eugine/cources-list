import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card } from '@components';
import { Flex } from '@components/style';
import { getCourseDuration } from '@helpers';
import { ROUTES, ROUTE_PARAM } from '@routing';
import { useAppSelector } from '@store/hooks';
import { courseByIdSelector } from '@store/slices/courses.slice';
import { Heading3, Heading5, TextBold, TextCommon } from '@styles/typography';

const CourseInfoCardDetails = styled.div`
	display: grid;
	grid-template-columns: 120px auto;
	min-width: 480px;
	gap: 28px;
	padding-left: 40px;
	border-left: 1px solid var(--basic);
`;

const CourseInfoCardLabel = styled(TextBold)`
	width: 120px;
`;

export const CourseInfo: FC = () => {
	const navigate = useNavigate();
	const id = useParams()[ROUTE_PARAM.courseId];
	const course = useAppSelector(courseByIdSelector(id));

	return (
		<>
			<Heading3>{course.title}</Heading3>

			<Card $marginBottom={'md'} $marginTop={'md'}>
				<Heading5>Description: </Heading5>

				<Flex $gap={'40px'} $justifyContent='space-between' $marginTop={'lg'}>
					<TextCommon>{course.description}</TextCommon>

					<CourseInfoCardDetails>
						<CourseInfoCardLabel>ID:</CourseInfoCardLabel>
						<TextCommon>{course.id}</TextCommon>

						<CourseInfoCardLabel>Duration:</CourseInfoCardLabel>
						<TextCommon>
							<TextBold>{getCourseDuration(course.duration)}</TextBold> hours
						</TextCommon>

						<CourseInfoCardLabel>Created:</CourseInfoCardLabel>
						<TextCommon>{course.creationDate}</TextCommon>

						<CourseInfoCardLabel>Authors:</CourseInfoCardLabel>
						<TextCommon>{course.authors.map(({ name }) => name).join(', ')}</TextCommon>
					</CourseInfoCardDetails>
				</Flex>
			</Card>

			<Flex $justifyContent='flex-end'>
				<Button onClick={() => navigate(`/${ROUTES.courses}`)}>BACK</Button>
			</Flex>
		</>
	);
};
