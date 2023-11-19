import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authors from './slices/authors.slice';
import courses from './slices/courses.slice';
import user from './slices/user.slice';

export const reducer = combineReducers({
	courses,
	authors,
	user,
});

export const store = configureStore({
	reducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
