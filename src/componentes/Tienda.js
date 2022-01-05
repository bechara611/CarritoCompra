import React from 'react';
import Productos from './Productos';
const Tienda = ({productos,cambiarcarrito,carrito,AgregarProductosAlCarrito}) => {
    return ( 
        <div>
        <h1>Tienda</h1>
        <Productos productos={productos} cambiarcarrito={cambiarcarrito} carrito={carrito} AgregarProductosAlCarrito={AgregarProductosAlCarrito}></Productos>
        </div>
     );
}
 
export default Tienda;