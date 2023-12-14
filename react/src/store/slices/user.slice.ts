import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { inject, AuthService, UserService } from '@api';
import { ILoginRequest, IUser } from '@models';
import { RootState } from '@store';

const name = 'user';

export const loginUser = createAsyncThunk(`${name}/loginUser`, async (loginReq: ILoginRequest) => {
	const auth = inject(AuthService);
	const resp = await auth.login(loginReq);
	localStorage.setItem('token', resp.data.result);
	return { ...resp.data.user, isAuth: true };
});

export const authUser = createAsyncThunk(`${name}/authUser`, () => {
	const userService = inject(UserService);
	return userService.me();
});

const initialState: IUser = {
	isAuth: false,
	name: '',
	email: '',
};

export const userSelector = (store: RootState) => store.user;

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logoutUser: () => ({ ...initialState }),
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.fulfilled, (_, { payload }) => payload);
		builder.addCase(authUser.fulfilled, (_, { payload }) => payload);
	},
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;