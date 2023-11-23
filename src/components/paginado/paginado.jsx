import style from './paginado.module.css'


const Page = ( {juegosPorPag, totalJuegos, cambiarPag} ) => {

    const totalPaginas = Math.ceil(totalJuegos / juegosPorPag);

    const paginas = []

    for (let pagina = 1; pagina <= totalPaginas; pagina++ ){
        paginas.push(
            <button className={style.buttonPage} key={pagina} onClick={ () => cambiarPag(pagina) } >
                {pagina}
            </button>
        )
    }

    return(
        <div className={style.containButPage}>
            {paginas}
        </div>
    )
}

export default Page