'use client';
import { useState } from 'react';
import { data } from '../app/api/data';
import filter from './utils/filter.js';
import order from './utils/order.js';
import Card from '@/components/card/Card.jsx';
import MostPrice from '@/components/mostPrice/MostPrice.jsx';
import Select from '@/components/select/Select.jsx';
import Offerts from '@/components/offerts/Offerts.jsx';
import Aside from '@/components/aside/Aside.jsx';
import Genders from '@/components/generos/Genders.jsx';


const HomePage = () => {
    let dataToRender = data;
    const [filtrado, setFiltrado] = useState(false);
    const [filtrados, setFiltrados] = useState([]);
    const [ordenado, setOrdenado] = useState(false);
    const [ordenados, setOrdenados] = useState([]);

    const mostPrice = data
        .map(game => (game.precio >= 49.99 ? game : null))
        .filter(game => game !== null);

    const arrTypesdata = data.map(game => game.genero).flat();
    const uniqueArrTypesGames = arrTypesdata.filter((type, index, array) => {
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
                <Card data={dataToRender} />
                <Aside types={uniqueArrTypesGames} onChange={handleFilter} />
            </div>
        </div>
    )
}

export default HomePage;