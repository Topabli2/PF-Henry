import './offerts.css';
import { games } from '@/app/api';

const Offerts = () => {

    const gamesInOffert = games.filter(game => game.offert);
    const img = 'imgOffert';

    return (
        <div className='offertsGrid'>
            {
                gamesInOffert.map(game => (
                    <div key={game.id} className={`${img} ${game.desarrollador.split(' ')[0]}`}>
                        <p className='offertDetail'>
                            <span className='offert' >-{game.offert[1]}%</span>
                            <span className='price'>${game.precio}</span>
                            <span className='priceOffert'>${game.precio * (1 - game.offert[1] / 100)}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Offerts
