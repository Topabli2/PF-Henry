import React from 'react'

import './Card.css'

const Card = ({ data }) => {

  return (
    <div className="gridCards">
    {
      data.map(games => (
        <section key={games.id} className='sectionCard'>
          <img className='imgCard' src={games.image} alt="" />
          {/* <img className='imgCardOro' src="https://github.com/zuoki/imagenesPF/blob/main/CarfdP.png?raw=true" alt="card" /> */}
          <div className='cardTex'>
            <h1>{games.title}</h1>
            <h2>${games.price}</h2>
            <div className='cosito'>DETALLES</div>
          </div>
        </section>
      ))
    }
</div>
  )
}
export default Card