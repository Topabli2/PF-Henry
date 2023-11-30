'use client';
import { useStoreCart } from '@/zustand/store'
import './cart.css'

const page = () => {
    const { gamesInCart } = useStoreCart();
    console.log(gamesInCart)
  return (
    <div className='cartContainer'>
      {gamesInCart.length > 0 &&
        gamesInCart.map(game => (
            <h1>{game.title}</h1>
        ))
      }
    </div>
  )
}

export default page
