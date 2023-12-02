import { create } from 'zustand';

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
}));
