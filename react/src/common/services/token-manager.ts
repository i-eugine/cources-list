const TOKEN_KEY = 'token';

export const TokenManager = {
	getToken: () => localStorage.getItem(TOKEN_KEY),
	setToken: (token: string) => localStorage.setItem(TOKEN_KEY, token),
	removeToken: () => localStorage.removeItem(TOKEN_KEY),
};
