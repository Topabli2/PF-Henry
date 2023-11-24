'use client';
import { useState } from 'react';
import { games } from './api.js';
import filter from './utils/filter.js';
import order from './utils/order.js';
import Cards from '@/components/cards/Cards.jsx';
import MostPrice from '@/components/mostPrice/MostPrice.jsx';
import Select from '@/components/select/Select.jsx';
import Offerts from '@/components/offerts/Offerts.jsx';
import Aside from '@/components/aside/Aside.jsx';
import Genders from '@/components/generos/Genders.jsx';


const HomePage = () => {
    let dataToRender = games;
    const [filtrado, setFiltrado] = useState(false);
    const [filtrados, setFiltrados] = useState([]);
    const [ordenado, setOrdenado] = useState(false);
    const [ordenados, setOrdenados] = useState([]);

    const mostPrice = games
        .map(game => (game.precio >= 49.99 ? game : null))
        .filter(game => game !== null);

    const arrTypesGames = games.map(game => game.genero).flat();
    const uniqueArrTypesGames = arrTypesGames.filter((type, index, array) => {
        return array.indexOf(type) === index;
    });

    const handleFilter = (types) => {

        for(let i = 0; i < types.length; i++){
            if(types[i] === 'Ciencia Ficción') types[i] = 'CienciaFicción';
            if(types[i] === 'Battle Royale') types[i] = 'BattleRoyale';
        }

        setFiltrados(filter(types));
        setOrdenado(false);
        setFiltrado(true)
    }

    const handleOrder = (event) => {
        setOrdenados(order(event.target.value))
        setFiltrado(false);
        setOrdenado(true)
    }

    if (filtrado) dataToRender = filtrados;
    if (ordenado) dataToRender = ordenados;
    return (
        <div>
            <MostPrice mostPrice={mostPrice} />
            <Offerts />
            <Genders types={uniqueArrTypesGames} />
            <div className='cardsAndAside'>
                <Cards dataToRender={dataToRender} />
                <Aside types={uniqueArrTypesGames} onChange={handleFilter} />
            </div>
        </div>
    )
}

export default HomePage;