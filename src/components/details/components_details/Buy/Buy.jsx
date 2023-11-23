import React from 'react'
import "./Buy.css"
import ButtonComponent from '@/components/utils/button_Component/ButtonComponent'

const Buy = ({game}) => {
  return (
    <section className='Dbuy'>
        
         <div className='Dbuy2'>
        <h2 className='DBof'> OFERTA ACTUAL</h2>
        <div className='priceContainerD'>
          <h1 className='DBPRC'>COMPRAR POR : ${game.precio}</h1>
        </div>
        <div className='butonDBJContainer'>
          <button type='button'className='ADC'>  AGREGAR AL CARRITO</button>
          <button type='button' className='IAC'>IR AL CARRITO</button> 
          <div className='cB'>
          <ButtonComponent value={"button"}/>
          </div>
        </div>
        </div>
            
        </section>
  )
}

export default Buy