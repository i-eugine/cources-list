import React, { FC } from 'react';
import { Button } from 'src/common';
import { ICourse } from 'src/models/iCourse';
import { Heading4, TextCommon, TextBold } from 'src/styles/typography';
import styled from 'styled-components';

const CardWrapper = styled.div`
	padding: 21px 24px 35px;
	background-color: var(--white);
	box-shadow: 2px 0px 8px 0px #00000040;
	border-radius: 5px;
	border-left: 7px solid#333E48;
`;

const CardContent = styled.div`
	display: flex;
	gap: 47px;
	margin-top: 10px;
`;

const CardInfo = styled.div`
	min-width: 324px;
`;

const CardActions = styled.div`
	display: flex;
	margin-top: 30px;
`;

interface Props {
	course: ICourse;
	showCourseHandler: (course: ICourse) => void;
}

export const CourseCard: FC<Props> = ({ course, showCourseHandler }) => (
	<CardWrapper>
		<Heading4>{course.title}</Heading4>
		<CardContent>
			<TextCommon>{course.description}</TextCommon>
			<CardInfo>
				<div>
					<div>
						<TextCommon>
							<TextBold>Authors: </TextBold> Dave Haisenberg, Tony Ja
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
				<CardActions>
					<Button onClick={() => showCourseHandler(course)}>SHOW COURSE</Button>
				</CardActions>
			</CardInfo>
		</CardContent>
	</CardWrapper>
);
