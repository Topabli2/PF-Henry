import { create } from 'zustand';

export const createUserStore = create(() => ({
	userprueba: {
		username: '',
		lastName: '',
		email: '',
		country: '',
		phone: '',
		profile: {
			profileName: '',
			profileType: '',
		},
	},
}));
