import React, { useState } from 'react';
import MensajeError from './MensajeError';

const Buscador = ({guardarBusqueda}) => {
    
    const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagen = (e) => {
        e.preventDefault();

        // Validar
        if(terminoBusqueda === '') {
            guardarError(true);
            return;
        }

        // Enviar el término hacia el componente principal
        guardarBusqueda(terminoBusqueda);
        guardarError(false);
    }

    return ( 
        <form onSubmit={buscarImagen}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg" 
                            placeholder="Buscar imagen, Ej: Futbol o Café"
                            onChange={(e) => guardarTerminoBusqueda(e.target.value)} />
                </div>

                <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-lg btn-danger btn-danger">Buscar imagen</button>
                </div>
            </div>

            { (error) ? <MensajeError mensaje='*Para buscar debes escrbir algún término de Búsqueda.' /> : null}
        </form>
     );
}
 
export default Buscador;