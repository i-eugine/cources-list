import { IAuthor } from './iAuthor';

interface ICourseBase<TAuthor, TDuration = number> {
	id?: string;
	title: string;
	description: string;
	creationDate: string;
	duration: TDuration;
	authors: TAuthor[];
}

export type ICourseDTO = ICourseBase<string>;
export type ICourse = ICourseBase<IAuthor>;
