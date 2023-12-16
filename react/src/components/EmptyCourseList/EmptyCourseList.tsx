import React from 'react';
import { useNavigate } from 'react-router';

import { PageCentered, Button } from '@components';
import { ROUTES } from '@routing';
import { TextCommon, Heading3 } from '@styles/typography';

export const EmptyCourseList = () => {
	const navigate = useNavigate();
	return (
		<PageCentered>
			<Heading3>Your List Is Empty</Heading3>

			<TextCommon $marginBottom={'md'} $marginTop={'xl'}>
				Please use ’Add New Course’ button to add your first course
			</TextCommon>

			<Button onClick={() => navigate(`/${ROUTES.courses}/${ROUTES.add}`)}>ADD NEW COURSE</Button>
		</PageCentered>
	);
};
