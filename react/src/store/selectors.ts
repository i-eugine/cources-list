import { RootState } from './index';

export const userSelector = (store: RootState) => store.user;
export const authorsSelector = (store: RootState) => store.authors;
export const coursesSelector = (store: RootState) => store.courses;
