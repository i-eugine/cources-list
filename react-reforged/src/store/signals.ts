import { signal } from '@preact/signals-react';

import { Author, Course, User } from '@models';

export const courses = signal<Course[]>([]);
export const setCourses = (c: Course[]) => (courses.value = c);
export const addCourse = (c: Course) => courses.value.push(c);

export const authors = signal<Author[]>([]);
export const setAuthors = (a: Author[]) => (authors.value = a);
export const addAuthor = (a: Author) => authors.value.push(a);

export const user = signal<User | null>(null);
export const setUser = (u: User | null) => (user.value = u);
