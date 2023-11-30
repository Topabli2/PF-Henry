'use client';
import { useStoreCart } from '@/zustand/store'
import './cart.css';
import Card from '@/components/card/Card';

const page = () => {

    const store = useStoreCart();
    const gamesInCart = store.gamesInCart;

    console.log(gamesInCart);

    return (
        <div className='cartAndDetail'>
            
            <div className='cartsContainer'>
                {
                    gamesInCart.map(game => (
                        <div className='cartContainer'>
                            <img src={game.image} />
                        </div>
                    ))
                }
            </div>

            <div className='detailsCart'>

            </div>
        </div>
    )
}

export default page
