import React from 'react';

const MensajeError = ({mensaje}) => {
    return ( 
        <p className="my-3 p-4 text-center text-white alert alert-danger">{mensaje}</p>
     );
}
 
export default MensajeError;