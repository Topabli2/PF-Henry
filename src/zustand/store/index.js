import { create } from "zustand";
import Swal from "sweetalert2";

export const useStoreCart = create((set) => ({
  userId: null,
  gamesInCart: [],
  //Storage
  setUserId: (id) =>
    set((state) => {
      const storedGamesInCart =
        typeof window !== "undefined"
          ? JSON.parse(localStorage.getItem("gamesInCart" + id))
          : [];
      return { userId: id, gamesInCart: storedGamesInCart || [] };
    }),

  //Storage
  addGamesToCart: (games) => {
    set((state) => {
      if (state.gamesInCart.length < 4) {
        const newGamesInCart = [...state.gamesInCart, games];
        Swal.fire({
          icon: 'success',
          iconColor: 'green', // Cambia el color del icono a amarillo
          titleText: "GAME ADD TO CART",
          background: '#333333', // Color de fondo negro
          html: '<span style="color: orange;"></span>', // Cambia el color del texto a blanco
          footer: '<a href="http://localhost:3000/cart">Success! The game has been added to your shopping cart.</a>',
         
        });
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "gamesInCart" + state.userId,
            JSON.stringify(newGamesInCart)
          );
        }
        return { gamesInCart: newGamesInCart };
      } else {
        Swal.fire({
          icon: 'warning',
          iconColor: 'yellow', // Cambia el color del icono a amarillo
          titleText: "WARNING...",
          background: '#333333', // Color de fondo negro
          html: '<span style="color: orange;">No more than 4 games can be added in a single purchase</span>', // Cambia el color del texto a blanco
          footer: '<a href="http://localhost:3000/cart">Complete your cart purchase or remove the games.</a>',
          confirmButtonColor: '#3333;', // Cambia el color del botón de confirmación a negro
        });
        
        
        
        return state;
      }
    });
  },

  removeGameFromCart: (gameID) => {
    set((state) => {
      const newGamesInCart = state.gamesInCart.filter(
        (game) => game.id !== gameID
      );
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "gamesInCart" + state.userId,
          JSON.stringify(newGamesInCart)
        );
      }
      return { gamesInCart: newGamesInCart };
    });
  },

  emptyCart: () => {
    set((state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("gamesInCart" + state.userId);
      }
      return { gamesInCart: [] };
    });
  },
}));
