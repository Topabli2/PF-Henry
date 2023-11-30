import React from 'react';
import './emptyCart.css';
import { PiHandbagThin } from "react-icons/pi";
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className='emptyCartContainer' >
      <span className='bagFill' ><PiHandbagThin /></span>
      <p>¡Empieza un carrito de compras!</p>
      <Link href='/' ><button className='emptyCartButton' >COMENZAR A COMPRAR</button></Link>
    </div>
  )
}

export default EmptyCart
