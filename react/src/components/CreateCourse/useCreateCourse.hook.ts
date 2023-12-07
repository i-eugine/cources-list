import { useEffect, useState } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import { IAuthor, ICourse } from '@models';
import { useAppSelector } from '@store/hooks';
import { authorsSelector } from '@store/slices/authors.slice';

export const AUTHORS_FIELD = 'authors';

export const useCreateCourse = (course?: ICourse) => {
	const allAuthors = useAppSelector(authorsSelector);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		setAuthors([...allAuthors]);
	}, [allAuthors]);

	const methods = useForm<ICourse>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		defaultValues: { [AUTHORS_FIELD]: [] },
	});

	const { control, reset } = methods;

	const courseAuthors = useFieldArray({ control, name: 'authors' });

	const duration = useWatch({ control, name: 'duration' });

	useEffect(() => {
		if (course) {
			reset(course);
			setAuthors(authors.filter((a) => !course.authors.some(({ id }) => a.id === id)));
		}
	}, []);

	const handleAuthorAdd = (author: IAuthor) => {
		setAuthors(authors.filter((a) => a.id !== author.id));
		courseAuthors.append(author);
	};

	const handleAuthorExclude = (author) => {
		setAuthors([...authors, author]);
		courseAuthors.remove(courseAuthors.fields.findIndex((a) => a.id === author.id));
	};

	return {
		methods,

		duration,
		courseAuthors: courseAuthors.fields,

		authors,

		handleAuthorAdd,
		handleAuthorExclude,
	};
};
