import React from 'react';

import { PageCentered, Button } from '@components';
import { TextCommon, Heading3 } from '@styles/typography';

export const EmptyCourseList = () => {
	return (
		<PageCentered>
			<Heading3>Your List Is Empty</Heading3>
			<TextCommon $marginBottom={'md'} $marginTop={'xl'}>
				Please use ’Add New Course’ button to add your first course
			</TextCommon>
			<Button>ADD NEW COURSE</Button>
		</PageCentered>
	);
};
