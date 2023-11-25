import React from 'react'

import './Card.css'

const Card = ({ data }) => {
  return (
    <div className="gridCards">
      {
        data.map(game => (
          <div className='cardGame' key={game.id}>
            <img src={game.image} />
            <h5>{game.title}</h5>
            <div className='spans'>
              <span className='generos'>{game.genre}</span>
              <span className='precio'>${game.price}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Card