import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';
import axios from 'axios';

function App() {

  const [ busqueda, guardarBusqueda] = useState('');
  const [ imagenes, guardarImagenes] = useState([]);
  const [ paginaActual, guardarPaginaActual] = useState(1);
  const [ totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect (
    () => {
        const consultarApi = async () => {

          if(busqueda === '') return;

            const imagenesPorPagina = 30;
            const keyId = '3993780-47ed6873b2850a8f4a98e77e9';
            const url = `https://pixabay.com/api/?key=${keyId}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

            const respuesta = await axios.get(url);
            // console.log(respuesta.data);
            guardarImagenes(respuesta.data.hits);

            // CALCULAR EL TOTAL DE PAGINAS
            const calcularTotalPagina = Math.ceil(respuesta.data.totalHits / imagenesPorPagina);
            guardarTotalPaginas(calcularTotalPagina);
            // console.log(totalPaginas);

            // Hacer scroll top 
            const jumbotron = document.querySelector('.jumbotron');
            jumbotron.scrollIntoView({block: 'end', behavior: 'smooth'});
          }
        consultarApi();
    }, [busqueda, paginaActual]
  );

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual -1;

    // Colocar nuevaPaginaActual en el state
    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual +1;

    // Colocar nuevaPaginaActual en el state
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
          <Header />
          <Buscador guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center">
          <ListadoImagenes imagenes={imagenes} />

        <div className="col-12 m-5 text-center">
          {
            (paginaActual === 1 ) ? null : 
            (<button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &laquo;</button>)
          }

          {
            (paginaActual === totalPaginas ) ? null : (<button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente &raquo;</button>)
          }
        </div>
          
      </div>
      
    </div>
  );
}

export default App;
