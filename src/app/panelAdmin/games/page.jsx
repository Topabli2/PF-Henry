import { data } from "../../api/data";
import './games.css'

const page = () => {
  return (
    <div className='gamesContainer' >

      <div className="gridGames" >
        {data.length > 0 && 
          data.map(game => (
            <div className="gameDiv" >
              <p>{game.title}</p>
              <img src={game.image} />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default page