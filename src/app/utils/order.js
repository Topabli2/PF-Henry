import { data } from '../api/data';

const order = (op) => {
    if(op === "All") return data;
    const gamesCopy = [...data];
    let gamesOrdereds;

    if (op === 'Higher price') gamesOrdereds = gamesCopy.sort((a, b) => b.precio - a.precio);
    else if (op === 'Lower price') gamesOrdereds = gamesCopy.sort((a, b) => a.precio - b.precio);
    else if (op === "Alphabet") gamesOrdereds = gamesCopy.sort((a, b) => a.titulo.localeCompare(b.titulo));

    return gamesOrdereds;
}

export default order;
