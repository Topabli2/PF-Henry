'use client';
import React from 'react'
import "./Buy.css"
import ButtonComponent from '@/components/utils/button_Component/ButtonComponent';
import { useStoreCart, useStoreGame } from '@/zustand/store';
import Link from 'next/link';

const Buy = ({ game }) => {
  const { gamesInCart, addGamesToCart } = useStoreCart();

  return (
    <section className='Dbuy'>

      <div className='Dbuy2'>
        <h2 className='DBof'> CURRENT OFFER</h2>
        <div className='priceContainerD'>
          <h1 className='DBPRC'>BUY FOR : ${game.price}</h1>
        </div>
        <div className='butonDBJContainer'>
          <button type='button' className='ADC' onClick={() => addGamesToCart(game)} >  ADD TO CART</button>
          <Link href={'/cart'}><button type='button' className='IAC'>GO TO CART</button></Link>
        </div>
      </div>

    </section>
  )
}

export default Buy