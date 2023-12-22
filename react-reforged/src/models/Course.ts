import { Author } from './Author';

type CourseBase<TAuthor> = {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: TAuthor[];
};

export type CourseForm = CourseBase<string>;
export type CourseDTO = CourseBase<string> & { id: string };
export type Course = CourseBase<Author> & { id: string };
