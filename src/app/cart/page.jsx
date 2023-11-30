"use client";
import { useStoreCart } from "@/zustand/store"; // Adjust the path as needed
import "./cart.css";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const Page = async () => {
  const user = useUser();

  if (user) {
    const user_id = user.user.id;
    const email = user.user.primaryEmailAddress.emailAddress;

    console.log(user_id, email);
    try {
      const response = await axios.post("/api/users", { user_id, email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("No user is authenticated");
  }

  const { gamesInCart } = useStoreCart();
  console.log(gamesInCart);

  return (
    <div className="cartContainer">
      {gamesInCart.length > 0 &&
        gamesInCart.map((game) => <h1 key={game.id}>{game.title}</h1>)}
    </div>
  );
};

export default Page;
