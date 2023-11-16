import { IAuthor } from './iAuthor';

interface ICourseBase<TA, TD> {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: TD;
	authors: TA[];
}

export type ICourseDTO = ICourseBase<string, number>;
export type ICourse = ICourseBase<IAuthor, string>;
