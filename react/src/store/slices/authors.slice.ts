import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuthor } from '@models';

const initialState: IAuthor[] = [];

let cachedAuthors = [];

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		getAllAuthors(_, { payload }: PayloadAction<IAuthor[]>) {
			cachedAuthors = payload;
			return payload;
		},
		resetAuthors() {
			return [...cachedAuthors];
		},
		removeAuthor(state, { payload }: PayloadAction<string>) {
			return state.filter((a) => a.id !== payload);
		},
		// used for API
		deleteAuthor(state, { payload }: PayloadAction<string>) {
			return state.filter((a) => a.id !== payload);
		},
		addAuthor(state, { payload }: PayloadAction<IAuthor>) {
			return [...state, payload];
		},
		// used for API
		saveAuthor(state, { payload }: PayloadAction<IAuthor>) {
			return [...state, payload];
		},
	},
});

export const { getAllAuthors, resetAuthors, removeAuthor, deleteAuthor, addAuthor, saveAuthor } =
	authorsSlice.actions;

export default authorsSlice.reducer;
