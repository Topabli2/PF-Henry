import './offerts.css';
import { data } from '@/app/api/data';

const Offerts = () => {

    const gamesInOffert = data.filter(game => game.price > 55.98);
    const img = 'imgOffert';

    return (
        <div className='offertsGrid'>
            {
                gamesInOffert.map(game => (
                    <div key={game.id} className={`${img} ${game.developer.split(' ')[0]} hola`}>
                        <img src={game.image} /> {/* Movido fuera del div .offertDetail */}
                        <div className='offertDetail'>
                            <p className='offert' >${game?.price}</p>
                        </div>
                        <h4 className='titleGame'>{game.title}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Offerts
