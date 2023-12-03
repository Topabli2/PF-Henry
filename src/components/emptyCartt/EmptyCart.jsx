import React from 'react';
import './emptyCart.css';
import { PiHandbagThin } from "react-icons/pi";
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className='emptyCartContainer' >
      <span className='bagFill' ><PiHandbagThin /></span>
      <p>START A SHOPPING CART!</p>
      <Link href='/' ><button className='emptyCartButton' >START SHOPPING</button></Link>
    </div>
  )
}

export default EmptyCart
