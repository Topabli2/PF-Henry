import create from 'zustand';

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
}));

export const useStoreGame = create((set) => ({
    gameToBack: [],
    addGameToBack: (game) => {
        set((state) => ({
            gameToBack: [...state.gameToBack, game],
        }));
    },
}));
