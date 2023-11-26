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
import { SearchBar } from '@/components/searchbar/Searchbar';
import search from './utils/search';

const HomePage = () => {
    const initialGames = [data[0], data[2], data[9]];
    const [mostPriceGames, setMostPriceGames] = useState(initialGames);
    let dataToRender = data;

    const [filtrado, setFiltrado] = useState(false);
    const [filtrados, setFiltrados] = useState([]);
    const [ordenado, setOrdenado] = useState(false);
    const [ordenados, setOrdenados] = useState([]);
    const [find, setFind] = useState(false);
    const [finds, setFinds] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            let randomGameIndexes = [];
            while (randomGameIndexes.length < 3) {
                const randomIndex = Math.floor(Math.random() * 10);
                if (!randomGameIndexes.includes(randomIndex)) {
                    randomGameIndexes.push(randomIndex);
                }
            }

            const randomGames = randomGameIndexes.map(index => data[index]);

            setMostPriceGames(randomGames);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);


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
        setFind(false);
        setFiltrado(true)
    }

    const handleOrder = (op) => {
        setOrdenados(order(op, dataToRender))
        setFiltrado(false);
        setFind(false);
        setOrdenado(true)
    }

    const handleSearch = (letters) => {
        if (letters.length < 3) {
            setFinds(data);
            if (filtrados.length > 0) {
                setFinds(filtrados);
                return;
            };
            if (ordenados.length > 0) {
                setFinds(ordenados);
                return;
            };
            return
        };
        setFinds(search(letters));
        setFiltrado(false);
        setOrdenado(false);
        setFind(true);
    };

    if (filtrado) dataToRender = filtrados;
    if (ordenado) dataToRender = ordenados;
    if (find) dataToRender = finds;

    return (
        <div>
            <MostPrice mostPrice={mostPriceGames} />
            <Offerts games={mostPriceGames} />
            <Genders types={uniqueArrTypesGames} />
            <SearchBar handleSearch={handleSearch} />
            <div className='cardsAndAside'>
                <Card data={dataToRender} />
                <Aside types={uniqueArrTypesGames} onChange={[handleFilter, handleOrder]} />
            </div>
        </div>
    )
}

export default HomePage;