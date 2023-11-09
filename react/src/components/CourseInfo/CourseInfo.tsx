import React, { FC } from 'react';
import { Button } from 'src/common';
import { ICourse } from 'src/models/iCourse';
import {
	Heading3,
	Heading5,
	TextBold,
	TextCommon,
} from 'src/styles/typography';
import styled from 'styled-components';

const CourseInfoCard = styled.div`
	padding: 60px;
	margin-top: 24px;
	margin-bottom: 46px;
	background-color: var(--white);
	border-radius: 5px;
	border: 1px solid var(--basic);
`;

const CourseInfoCardContent = styled.div`
	display: flex;
	gap: 40px;
	margin-top: 25px;
`;

const CourseInfoCardDetails = styled.div`
	min-width: 480px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	padding-left: 40px;
	border-left: 1px solid var(--basic);
`;

const CourseInfoCardLabel = styled(TextBold)`
	width: 120px;
`;

const CourseInfoActions = styled.div`
	display: flex;
	justify-content: end;
`;

interface Props {
	course: ICourse;
	backHandler: () => void;
}
export const CourseInfo: FC<Props> = ({ course, backHandler }) => (
	<>
		<Heading3>{course.title}</Heading3>
		<CourseInfoCard>
			<div>
				<Heading5>Description: </Heading5>
			</div>
			<CourseInfoCardContent>
				<TextCommon>{course.description}</TextCommon>
				<CourseInfoCardDetails>
					<div>
						<CourseInfoCardLabel>ID:</CourseInfoCardLabel>
						<TextCommon>{course.id}</TextCommon>
					</div>
					<div>
						<CourseInfoCardLabel>Duration:</CourseInfoCardLabel>
						<TextCommon>
							<TextBold>{course.duration}</TextBold> hours
						</TextCommon>
					</div>
					<div>
						<CourseInfoCardLabel>Created:</CourseInfoCardLabel>
						<TextCommon>{course.creationDate}</TextCommon>
					</div>
					<div>
						<CourseInfoCardLabel>Authors:</CourseInfoCardLabel>
						<TextCommon>
							{course.authors.map(({ name }) => name).join(', ')}
						</TextCommon>
					</div>
				</CourseInfoCardDetails>
			</CourseInfoCardContent>
		</CourseInfoCard>
		<CourseInfoActions>
			<Button onClick={backHandler}>BACK</Button>
		</CourseInfoActions>
	</>
);
