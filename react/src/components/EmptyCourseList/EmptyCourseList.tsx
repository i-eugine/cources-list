import React from 'react';
import { Button } from 'src/common';
import { Heading3, TextCommon } from 'src/styles/typography';
import styled from 'styled-components';

const EmptyCourseListWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-bottom: 74px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const EmptyCourseListText = styled(TextCommon)`
	margin-top: 24px;
	margin-bottom: 40px;
`;

export const EmptyCourseList = () => {
	return (
		<EmptyCourseListWrapper>
			<Heading3>Your List Is Empty</Heading3>
			<EmptyCourseListText>
				Please use ’Add New Course’ button to add your first course
			</EmptyCourseListText>
			<Button>ADD NEW COURSE</Button>
		</EmptyCourseListWrapper>
	);
};
