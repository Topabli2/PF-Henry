import { FaGithub, FaLinkedin } from "react-icons/fa";
import './about.css'
import Footer from "@/components/footer/footer";

const About = () => {
    return (
        <div className='aboutCont'>
            <h1 className='aboutTitle'>Nosotros</h1>

            <div className='containCards'>

                {/* Card 1 */}
                
                <div className='card' >

                    <div className='img-div' >
                        <img src="/dami.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Dami</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>Ver mas</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 2 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/debo.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Debo</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>Ver mas</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 3 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/pablo.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Pablo</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>Ver mas</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 4 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/andres.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Andres</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>View More</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 5 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/jona.png" alt="aboutSanti" />
                    </div>

                    <h2>Jonathan</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>View More</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 6 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/cv_image.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Santiago Friedrich</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>View More</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 7 */}


                <div className='card' >

                    <div className='img-div' >
                        <img src="/nata.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Nata</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>View More</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>

                {/* Card 8 */}

                <div className='card' >

                    <div className='img-div' >
                        <img src="/diego.jpeg" alt="aboutSanti" />
                    </div>

                    <h2>Diego</h2>
                    <p>Hola! soy Santiago y 
                    actualmente me encuentro cursando el bootcamp Soy Henry para seguir aprendiendo y desarrollando habilidades en lo que es esta nueva pasión que he descubierto, la programación.
                    </p>
                    <button>View More</button>

                    <div className='icons' >

                    <FaGithub className="icon" />
                    <FaLinkedin className="icon" />

                    </div>

                </div>


            </div>

            <Footer />

        </div>
    )
}

export default About;