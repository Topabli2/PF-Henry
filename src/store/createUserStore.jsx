// createUserStore.js
import { create } from 'zustand';

export const createUserStore = create((set) => ({
  user: {
    userName: '',
    email: '',
    password: '',
    repeatPassword: '',
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
