import { games } from '@/app/api';
import './aside.css';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Aside = ({ types, onChange }) => {

  const [clase, setClase] = useState('listButton--click listButton');
  const [typesToSend, setTypesToSend] = useState([]);

  const quantitiesTypes = {
    RPG: 0,
    Acción: 0,
    CienciaFicción: 0,
    Aventura: 0,
    Histórico: 0,
    Western: 0,
    Deportes: 0,
    Simulación: 0,
    Sandbox: 0,
    Shooter: 0,
    BattleRoyale: 0,
    Multijugador: 0
  };
  games.forEach(game => (
    game.genero.forEach(genero => (
      quantitiesTypes[genero]++
    ))
  ))

  const cantidades = Object.values(quantitiesTypes);

  const handleClass = (event) => {

    let height = 0;
    let menu = event.currentTarget.nextElementSibling;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }

    menu.style.height = `${height}px`

    if (clase.split(' ')[2] === "arrow") {
      setClase('listButton--click listButton');
      return;
    }
    setClase('listButton--click listButton arrow')
  }

  const handleCheckboxChange = (type) => {
    setTypesToSend((prevTypes) => {
      const typeIndex = prevTypes.indexOf(type);

      if (typeIndex === -1) {
        if (prevTypes.length < 3) {
          return [...prevTypes, type];
        }
      } else {
        const updatedTypes = [...prevTypes];
        updatedTypes.splice(typeIndex, 1);
        return updatedTypes;
      }
      return prevTypes;
    });
  };


  return (
    <div className='aside'>

      <ul className='list'>

        <li className='listItem listItem--click'>
          <div className={clase} value={'listButton--click'} onClick={handleClass}>
            <a className='listLink' >Filtrar</a>
            <FontAwesomeIcon icon={faSortDown} className='listIcon' />
          </div>
          <ul className='listShow'>

            < li className='listInside'>
              <p className='listLink listLink--inside' onClick={() => onChange('all')}>All</p>
            </li>

            {
              types.map((type, index) => {
                if (type === "CienciaFicción") type = 'Ciencia Ficción';
                if (type === "BattleRoyale") type = 'Battle Royale';
                return (
                  < li className='listInside' key={type} >
                    <p className='listLink listLink--inside'>{type}<span> ({cantidades[index]})</span><input type='checkbox' onChange={() => handleCheckboxChange(type)}
                      checked={typesToSend.includes(type)} /></p>
                  </li>
                )
              })
            }
            <button disabled={typesToSend.length === 0} className='apply' onClick={() => { onChange(typesToSend), setTypesToSend([]) }}>Aplicar</button>
          </ul>

        </li>

      </ul >

    </div >
  );
};

export default Aside;
