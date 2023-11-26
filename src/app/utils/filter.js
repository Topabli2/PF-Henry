import { games } from '../api.js';

const filter = (types) => {

    if(types.includes('all')) return games;

    const gamesFiltered = games.filter(game => types.some(type => game.genero.includes(type)));
    return gamesFiltered;
};

export default filter;
