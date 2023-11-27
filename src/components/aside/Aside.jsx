import { data } from '@/app/api/data';
import './aside.css';
import { faSortDown, faBroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { fn } from '../searchbar/Searchbar';

const Aside = ({ types, onChange }) => {

  const [clase, setClase] = useState('listButton--click listButton');
  const [typesToSend, setTypesToSend] = useState([]);
  const quantitiesTypes = {};

  data.forEach(game => {
    quantitiesTypes[game.genre] = 0;
  })

  data.forEach(game => {
    quantitiesTypes[game.genre]++
  })

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
    <div>

      <div className='ordenarAside'>
        <a>Ordenar</a>
        <p onClick={() => onChange[1]('PD')}>Por precio (mayor a menor)</p>
        <p onClick={() => onChange[1]('PA')}>Por precio (menor a mayor)</p>
        <p onClick={() => onChange[1]('FD')}>Por fecha de lanzamiento (más reciente)</p>
        <p onClick={() => onChange[1]('FA')}>Por fecha de lanzamiento (más antiguo)</p>
        <p onClick={() => onChange[1]('CLEAN')} className='broom'><FontAwesomeIcon icon={faBroom} /></p>
      </div>
      <div className='aside'>

        <ul className='list'>

          <li className='listItem listItem--click'>
            <div className={clase} value={'listButton--click'} onClick={handleClass}>
              <a className='listLink' >Filtrar</a>
              <FontAwesomeIcon icon={faSortDown} className='listIcon' />
            </div>
            <ul className='listShow'>

              < li className='listInside'>
                <p className='listLink listLink--inside all' onClick={() => onChange[0]('all')}>All</p>
              </li>

              {
                types.map((type, index) => {
                  if (type === "CienciaFicción") type = 'Ciencia Ficción';
                  if (type === "BattleRoyale") type = 'Battle Royale';
                  return (
                    < li className='listInside' key={type} >
                      <p className='listLink listLink--inside'>{type}<span> ({cantidades[index]})</span><input className='checkbox' type='checkbox' onChange={() => handleCheckboxChange(type)}
                        checked={typesToSend.includes(type)} /></p>
                    </li>
                  )
                })
              }
              <button disabled={typesToSend.length === 0} className='apply' onClick={() => { onChange[0](typesToSend), setTypesToSend([]) }}>Aplicar</button>
            </ul>

          </li>

        </ul >

      </div >
    </div>
  );
};

export default Aside;
