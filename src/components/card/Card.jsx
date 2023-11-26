import React from 'react'

import './Card.css'
import { isArray } from 'lodash';

const Card = ({ data }) => {
  return (
    <div className='default'>
      <div className="gridCards" id='cards'>

        {data.length > 0 ? (
          data.map((game) => (
            <div className='cardGame' key={game.id}>
              <img src={game.image} alt={game.title} />
              <h5>{game.title}</h5>
              <div className='spans'>
                <span className='generos'>{game.genre}</span>
                <span className='precio'>${game.price}</span>
              </div>
            </div>
          ))
        ) : (
          <div className='notFound'><h1>Lo siento, no tenemos ese juego</h1></div>
        )}

      </div>
    </div>
  )
}
export default Card