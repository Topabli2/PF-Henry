'use client';
import { useStoreCart } from '@/zustand/store';
import './cart.css';

const Page = () => {
    const { gamesInCart } = useStoreCart();

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