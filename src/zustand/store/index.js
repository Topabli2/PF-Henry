/*import { create } from 'zustand';

export const useStoreCart = create((set) => ({
    gamesInCart: [],
    addGamesToCart: (game) => {
        set((state) => {
            const gameFoundIndex = state.gamesInCart.findIndex(juego => juego.id === game.id);

            if (gameFoundIndex !== -1) {
                const updatedGamesInCart = [...state.gamesInCart];
                updatedGamesInCart[gameFoundIndex].cantidad += 1;
                return { gamesInCart: updatedGamesInCart };
            }

            game['cantidad'] = 1;

            return {
                gamesInCart: [...state.gamesInCart, game],
            };
        });
    },
    removeGameFromCart: (gameID) => {
        set((state) => ({
            gamesInCart: state.gamesInCart.filter((game) => game.id !== gameID),
        }));
    },
    emptyCart: () => {
        set(() => ({
            gamesInCart: []
        }));
    },
    incrementQuantity: (gameID) => {
        set((state) => {
            const gameFound = state.gamesInCart.filter(juego => juego.id === gameID);
            if (gameFound) gameFound[0].cantidad++;
            return state;
        });
    },
    decrementQuantity: (gameID) => {
        set((state) => {
            const gameFound = state.gamesInCart.filter(juego => juego.id === gameID);
            if (gameFound) gameFound[0].cantidad--;
            return state;
        });
    },

}));

export const useStoreGame = create((set) => ({
    gameToBack: [],
    addGameToBack: (game) => {
        set((state) => ({
            gameToBack: [...state.gameToBack, game],
        }));
    },
}));*/



// Importamos la librería zustand para manejar el estado global de la aplicación.
import { create } from 'zustand';

// Asumiendo que tienes una función que obtiene el userId del usuario actual.
//import { useUser } from '@clerk/nextjs'; // Asegúrate de reemplazar esto con tu propio módulo de autenticación.


/*export const useStoreCart = create((set) => ({
    userId: null,
    gamesInCart: [],

    setUserId: (id) => set((state) => {
        const storedGamesInCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('gamesInCart' + id)) : [];
        return { userId: id, gamesInCart: storedGamesInCart || [] };
    }),

    addGamesToCart: (games) => {
        set((state) => {
            const newGamesInCart = [...state.gamesInCart, games];
            if (typeof window !== 'undefined') {
                localStorage.setItem('gamesInCart' + state.userId, JSON.stringify(newGamesInCart));
            }
            return { gamesInCart: newGamesInCart };
        });
    },

    removeGameFromCart: (gameID) => {
        set((state) => {
            const newGamesInCart = state.gamesInCart.filter((game) => game.id !== gameID);
            if (typeof window !== 'undefined') {
                localStorage.setItem('gamesInCart' + state.userId, JSON.stringify(newGamesInCart));
            }
            return { gamesInCart: newGamesInCart };
        });
    },

    emptyCart: () => {
        set((state) => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('gamesInCart' + state.userId);
            }
            return { gamesInCart: [] };
        });
    },
}));*/


export const useStoreCart = create((set) => ({
    userId: null,
    gamesInCart: JSON.parse(localStorage.gamesInCartnull),
    //Storage
    setUserId: (id) => set((state) => {
        const storedGamesInCart = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('gamesInCart' + id)) : [];
        return { userId: id, gamesInCart: storedGamesInCart || [] };
    }),

    //Storage 
    addGamesToCart: (games) => {
        set((state) => {
            let condicion = false;

            if (JSON.parse(localStorage.gamesInCartnull).length === 4) {
                condicion = true;
                return state;
            }

            if (state.gamesInCart.length < 4 || condicion) {
                alert('creando jugo')
                const findGame = state.gamesInCart.find(juego => juego.id === games.id)
                if (findGame.id) {
                    alert('Ya tienes ese juego en el carrito');
                    return state;
                }
                const newGamesInCart = [...state.gamesInCart, games];
                if (typeof window !== 'undefined') {
                    localStorage.setItem('gamesInCart' + state.userId, JSON.stringify(newGamesInCart));
                }
                return { gamesInCart: newGamesInCart };
            }

            else {
                alert("No se pueden agregar más de 4 productos al carrito.");
                return state;
            }
        });
    },

    removeGameFromCart: (gameID) => {
        set((state) => {
            const newGamesInCart = state.gamesInCart.filter((game) => game.id !== gameID);
            if (typeof window !== 'undefined') {
                localStorage.setItem('gamesInCart' + state.userId, JSON.stringify(newGamesInCart));
            }
            return { gamesInCart: newGamesInCart };
        });
    },

    emptyCart: () => {
        set((state) => {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('gamesInCart' + state.userId);
            }
            return { gamesInCart: [] };
        });
    },
}));

