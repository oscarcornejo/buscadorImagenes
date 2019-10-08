import React from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return (
            <div className="col-12 p-5">
                <div className="row">
                {imagenes.map( (imagen, index) => {
                    // console.log('index:', index, 'respuesta', imagen);
                        return (
                            <Imagen key={index} imagen={imagen} />
                        )
                    })}
                    </div>
            </div>
     );
}
 
export default ListadoImagenes;