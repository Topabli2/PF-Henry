'use client';
import { useEffect, useState } from 'react';
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

    const arrTypesdata = data.map(game => game.genre).flat();
    const uniqueArrTypesGames = arrTypesdata.filter((type, index, array) => {
        return array.indexOf(type) === index;
    });

    const handleFilter = (types) => {
        setFiltrados(filter(types));
        setOrdenado(false);
        setFiltrado(true)
    }

    const handleOrder = (op) => {
        setOrdenados(order(op, dataToRender))
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
                <Aside types={uniqueArrTypesGames} onChange={[handleFilter, handleOrder]} />
            </div>
        </div>
    )
}

export default HomePage;