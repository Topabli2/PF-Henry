'use client';
import {useStoreCart} from '@/zustand/store';  // Adjust the path as needed
import './cart.css';

const Page = () => {
    const { gamesInCart } = useStoreCart();
    console.log(gamesInCart);

    return (
        <div className='cartContainer'>
            {gamesInCart.length > 0 &&
                gamesInCart.map(game => (
                    <h1 key={game.id}>{game.title}</h1>
                ))}
        </div>
    );
};

export default Page;