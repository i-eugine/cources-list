import { Flex } from '@components/style/Flex';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@components';
import { Box } from '@components/style';
import { ICourse } from '@models';
import { ROUTES } from '@routing';
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

export const CourseCard: FC<Props> = ({ course }) => {
	const navigate = useNavigate();
	return (
		<CardWrapper>
			<Heading4>{course.title}</Heading4>

			<Flex $gap={'xl'} $justifyContent='space-between' $marginTop={'sm'}>
				<TextCommon>{course.description}</TextCommon>

				<CardInfo>
					<div>
						<div>
							<TextCommon>
								<TextBold>Authors: </TextBold>{' '}
								{course.authors.map(({ name }) => name).join(', ')}
							</TextCommon>
						</div>

						<div>
							<TextCommon>
								<TextBold>Duration: </TextBold> {course.duration} hours
							</TextCommon>
						</div>

						<div>
							<TextCommon>
								<TextBold>Created: </TextBold> {course.creationDate}
							</TextCommon>
						</div>
					</div>

					<Box $marginTop={'xl'}>
						<Button onClick={() => navigate(`/${ROUTES.courses}/${course.id}`)}>
							SHOW COURSE
						</Button>
					</Box>
				</CardInfo>
			</Flex>
		</CardWrapper>
	);
};
