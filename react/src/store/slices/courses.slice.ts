import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICourse } from '@models';

const initialState: ICourse[] = [];

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		getAllCourses(_, { payload }: PayloadAction<ICourse[]>) {
			return payload;
		},
		saveCourse(state, { payload }: PayloadAction<ICourse>) {
			console.log('saving course', payload);
			const index = state.findIndex((c) => payload.id === c.id);
			state[index] = payload;
		},
		addCourse(state, { payload }: PayloadAction<ICourse>) {
			return [...state, payload];
		},
		deleteCourse(state, { payload }: PayloadAction<string>) {
			return state.filter(({ id }) => id !== payload);
		},
	},
});

export const { getAllCourses, saveCourse, addCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
