import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@models';

const initialState: IUser = {
	isAuth: false,
	name: '',
	email: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser: () => ({ ...initialState }),
		loginUser: (_, { payload }: PayloadAction<IUser>) => payload,
	},
});

export const { logoutUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
