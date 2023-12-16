import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { inject, AuthService, UserService, TokenManager } from '@api';
import { ILoginRequest, IUser } from '@models';
import { RootState } from '@store';

const name = 'user';

export const loginUser = createAsyncThunk(`${name}/loginUser`, async (loginReq: ILoginRequest) => {
	const auth = inject(AuthService);
	const resp = await auth.login(loginReq);
	TokenManager.setToken(resp.data.result);
	return { ...resp.data.user, isAuth: true };
});

export const authUser = createAsyncThunk(`${name}/authUser`, () => {
	const userService = inject(UserService);
	return userService.me();
});

export const logoutUser = createAsyncThunk(`${name}/logoutUser`, () => {
	TokenManager.removeToken();
	return { ...initialState };
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
		builder.addCase(logoutUser.fulfilled, (_, { payload }) => payload);
		builder.addCase(authUser.fulfilled, (_, { payload }) => payload);
	},
});

export default userSlice.reducer;
