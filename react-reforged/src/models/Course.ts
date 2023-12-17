import { Author } from './Author';

type ICourseBase<TAuthor> = {
  id?: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: TAuthor[];
};

export type ICourseDTO = ICourseBase<string>;
export type ICourse = ICourseBase<Author>;
