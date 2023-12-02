/*import { create } from 'zustand';

export const useStoreCart = create((set) => ({
    gamesInCart: [],
    addGamesToCart: (games) => {
        set((state) => ({
            gamesInCart: [...state.gamesInCart, games],
        }));
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
    }
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
import create from 'zustand';

// Creamos un store con zustand. Este store manejará el estado del carrito de compras.
export const useStoreCart = create((set) => ({
    // Inicializamos el estado del carrito de compras con los juegos que están en el localStorage.
    // Si no hay juegos en el localStorage, inicializamos con un array vacío.
    gamesInCart: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('gamesInCart')) || [] : [],

    // Esta función agrega un juego al carrito de compras.
    addGamesToCart: (games) => {
        set((state) => {
            // Creamos un nuevo array con los juegos que ya estaban en el carrito y el nuevo juego.
            const newGamesInCart = [...state.gamesInCart, games];

            // Guardamos el nuevo estado del carrito en el localStorage.
            if (typeof window !== 'undefined') {
                localStorage.setItem('gamesInCart', JSON.stringify(newGamesInCart));
            }

            // Actualizamos el estado del carrito en el store.
            return { gamesInCart: newGamesInCart };
        });
    },

    // Esta función elimina un juego del carrito de compras.
    removeGameFromCart: (gameID) => {
        set((state) => {
            // Creamos un nuevo array con todos los juegos que no tienen el id del juego a eliminar.
            const newGamesInCart = state.gamesInCart.filter((game) => game.id !== gameID);

            // Guardamos el nuevo estado del carrito en el localStorage.
            if (typeof window !== 'undefined') {
                localStorage.setItem('gamesInCart', JSON.stringify(newGamesInCart));
            }

            // Actualizamos el estado del carrito en el store.
            return { gamesInCart: newGamesInCart };
        });
    },

    // Esta función vacía el carrito de compras.
    emptyCart: () => {
        set(() => {
            // Eliminamos el estado del carrito del localStorage.
            if (typeof window !== 'undefined') {
                localStorage.removeItem('gamesInCart');
            }

            // Actualizamos el estado del carrito en el store a un array vacío.
            return { gamesInCart: [] };
        });
    }
}));
