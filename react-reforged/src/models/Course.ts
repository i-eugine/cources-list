import { Author } from './Author';

type CourseBase<TAuthor> = {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: TAuthor[];
};

export type CourseEditForm = CourseBase<string>;
export type CourseCreateForm = Omit<CourseBase<string>, 'id'>;
export type CourseDTO = CourseBase<string>;
export type Course = CourseBase<Author>;
