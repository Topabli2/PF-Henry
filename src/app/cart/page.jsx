"use client";
import { useStoreCart } from "@/zustand/store";
import "./cart.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "@/components/emptyCartt/EmptyCart";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import ParticlesWall from "@/components/wallpeaper.jsx/ParticlesWall";
import { useEffect } from "react";

const Page = () => {
  const { gamesInCart, removeGameFromCart, emptyCart, setUserId, userId } =
    useStoreCart();

  let subtotal = 0;
  gamesInCart.forEach((game) => {
    subtotal += game.price;
  });

  const removeGame = (event) => {
    event.preventDefault();
  };

  const handlerCartEmpty = (event) => {
    event.preventDefault();
    emptyCart();
  };

  const user = useUser();
  console.log(user);

  useEffect(() => {
    if (user && user.user && user.user.id !== userId) {
      setUserId(user.user.id);
    }
  }, [user]);

  if (user && user.user) {
    const user_id = user.user.id;
    const email = user.user.primaryEmailAddress.emailAddress;

    // Hacer una solicitud POST a tu API de back-end con los datos del usuario
    axios
      .post("/api/users", { user_id, email })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.log("No user is authenticated");
  }

  return (
    <>
      <ParticlesWall />
      <div className="cartContainer">
        <div className="cartContainerGames">
          {gamesInCart.length > 0 ? (
            gamesInCart.map((game) => (
              <div className="cartGame" key={game.id}>
                <img src={game.image} />
                <p>{game.title}</p>
                {/*<p>Cantidad: {game.id}</p>*/}
                <p>Precio: ${game.price}</p>
                <p>Subtotal: ${Math.floor(game.price * game.id)}</p>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="subtotal"
                  style={{ color: "#ff5757" }}
                  onClick={() => {
                    removeGame, removeGameFromCart(game.id);
                  }}
                />
              </div>
            ))
          ) : (
            <EmptyCart />
          )}
        </div>

        <div className="cartContainerDetails">
          <h4>
            TOTAL
            <hr /> <p>${Math.ceil(subtotal)}</p>
          </h4>
          <Link href="/payment">
            <button className="firstButton" disabled={subtotal == 0}>
              Ir a pagar
            </button>
          </Link>
          <button onClick={handlerCartEmpty}>Vaciar carrito</button>
          <Link href="/">
            <button className="lastButton">Seguir comprando</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
