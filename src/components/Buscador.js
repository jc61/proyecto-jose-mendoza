import { GridSearchIcon } from '@mui/x-data-grid';
import React, { useState } from 'react';

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noFound, setNoFound] = useState(false);

  const buscar = (e) => {
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar cualquier coincidencias
    let dato_find = listadoState.filter(dato => {
      return dato.titulo.toLowerCase().includes(busqueda.toLowerCase());
    })

    if(busqueda.length <= 1 || dato_find <= 0) {
      dato_find = JSON.parse(localStorage.getItem("datos"));
      setNoFound(true);
    } else {
      setNoFound(false);
    }

    // Actualizar estado del listado principal con lo que e logrado filtrar
    setListadoState(dato_find);

  }

  return (
    <div className="search">
      {(noFound === true && busqueda.length > 1) && (
        <span className="no-found">No se ha encontrado ninguna coincidencia</span>
      )}
      <form>
        <div>
        <input type="text" 
               id="search_field"
               name="busqueda"
               autoComplete="off"
               value={busqueda}
               onChange={buscar}
               placeholder="Buscar"
               className='buscador'
                />
                <GridSearchIcon />
        </div>
      </form>
    </div>
  );
}
