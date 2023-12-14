import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { inject, CoursesService } from '@api';
import { ICourse, ICourseDTO } from '@models';
import { RootState } from '@store';

const name = 'courses';

//#region thunk
const toDTO = (course: ICourse): ICourseDTO => ({
	...course,
	authors: course.authors.map(({ id }) => id),
	duration: parseInt(`${course.duration}`),
});

export const saveCourse = createAsyncThunk(`${name}/saveCourse`, async (course: ICourse) => {
	const coursesService = inject(CoursesService);
	const resp = await coursesService.update(toDTO(course));
	return { ...resp.data.result, authors: course.authors };
});

export const addCourse = createAsyncThunk(`${name}/addCourse`, async (course: ICourse) => {
	const coursesService = inject(CoursesService);
	const resp = await coursesService.create(toDTO(course));
	return { ...resp.data.result, authors: course.authors };
});

export const deleteCourse = createAsyncThunk(`${name}/deleteCourse`, async (id: string) => {
	const coursesService = inject(CoursesService);
	await coursesService.delete(id);
	return id;
});
//#endregion

//#region slice

const courses = createEntityAdapter<ICourse>({ selectId: (c) => c.id });

export const coursesSelector = courses.getSelectors<RootState>((s) => s.courses).selectAll;
export const courseByIdSelector = (id: string) => (state: RootState) =>
	courses.getSelectors<RootState>((s) => s.courses).selectById(state, id);

const coursesSlice = createSlice({
	name: 'courses',
	initialState: courses.getInitialState(),
	reducers: {
		getAllCourses: courses.setAll,
	},
	extraReducers: (builder) => {
		builder.addCase(saveCourse.fulfilled, (state, { payload }) => {
			courses.updateOne(state, { id: payload.id, changes: payload });
		});

		builder.addCase(addCourse.fulfilled, courses.addOne);
		builder.addCase(deleteCourse.fulfilled, courses.removeOne);
	},
});

export const { getAllCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
//#endregion
