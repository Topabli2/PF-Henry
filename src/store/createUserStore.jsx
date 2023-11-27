// createUserStore.js
import { create } from 'zustand';

export const createUserStore = create((set) => ({
	user: {
		username: '',
		lastName: '',
		password: '',
		email: '',
		country: '',
		phone: '',
		userGames: [],
		profile: {
			profileName: '',
			profile_type: 0,
		},
	},
	msjToRender: '',
	err: '',
	setUser: (user) =>
		set((state) => ({
			...state,
			user: {
				...state.user,
				...user,
			},
		})),
	setMsjToRender: (msj) => set({ msjToRender: msj }),
	setErr: (error) => set({ err: error }),
}));
