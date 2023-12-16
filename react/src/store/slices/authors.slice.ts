import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { AuthorsService, inject } from '@api';
import { IAuthor } from '@models';
import { RootState } from '@store';

const name = 'authors';

//#region thunk
export const saveAuthor = createAsyncThunk(`${name}/saveAuthor`, async (name: string) => {
  const authorsService = inject(AuthorsService);
  const resp = await authorsService.create(name);
  return resp.data.result;
});

export const deleteAuthor = createAsyncThunk(`${name}/deleteAuthor`, async (id: string) => {
  const authorsService = inject(AuthorsService);
  await authorsService.delete(id);
  return id;
});
//#endregion

const authors = createEntityAdapter<IAuthor>({ selectId: (a) => a.id });

export const authorsSelector = authors.getSelectors<RootState>((s) => s.authors).selectAll;

const authorsSlice = createSlice({
  name,
  initialState: authors.getInitialState(),
  reducers: {
    getAllAuthors: authors.setAll,
  },
  extraReducers: (builder) => {
    builder.addCase(saveAuthor.fulfilled, authors.addOne);
    builder.addCase(deleteAuthor.fulfilled, authors.removeOne);
  },
});

export const { getAllAuthors } = authorsSlice.actions;

export default authorsSlice.reducer;
