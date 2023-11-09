import { IAuthor } from './iAuthor';

export interface ICourse<TA = IAuthor, TD = string> {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: TD;
	authors: TA[];
}
