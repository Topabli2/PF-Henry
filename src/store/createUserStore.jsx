import { create } from 'zustand';

export const createUserStore = create((set) => ({
	user: {
		userName: '',
		email: '',
		password: '',
		repeatPassword: '',
	},
	setUser: (user) =>
		set({
			...user,
			userName: user.userName,
			email: user.email,
			password: user.password,
			repeatPassword: user.repeatPassword,
		}),
}));
