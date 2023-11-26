import './cards.css'

import React from 'react'

const Cards = ({ dataToRender }) => {
  return (
    <div className='centerContainer'>
      <div className='gamesContainer'>
        {dataToRender.map(game => (
          <div className='gameCard' key={game.id}>
            <img className='imgGame' src={game.caratula} />
            <h4>{game.titulo}</h4>
            <p>En stock: {`(${game.stock})`}<span className='precioGame'>${game.precio}</span></p>
            {/* <p className='precioGame'>${game.precio}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
