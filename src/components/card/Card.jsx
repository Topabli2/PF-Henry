import React from 'react'

import './Card.css'

const Card = ({game}) => {    
  return (

    <section key={game.id} className='sectionCard'>
    <img className='imgCard' src={game.caratula} alt=""/>
    <img className='imgCardOro' src="https://github.com/zuoki/imagenesPF/blob/main/CarfdP.png?raw=true" alt="card" />
    <div className='cardTex'>
    <h1>{game.titulo}</h1>
    <h2>${game.precio}</h2>
    <div className='cosito'>DETALLES</div>
    </div>
    </section>

  )
}
export default Card