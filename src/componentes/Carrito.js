import React,{useState} from 'react'
import styled from 'styled-components';

const Carrito = ({cambiarcarrito,carrito}) => {

    return ( 
        <div>
        <h3>Carrito de compra</h3>
        {
            carrito.length>0 
            ?
            carrito.map((producto,index)=>{
                return(
                    
                        <Producto>
                        <NombreProducto key={index}>{producto.nombre}</NombreProducto>
                       Cantidad:{producto.cantidad}
                        </Producto>
                );
            })
            :
            'No has agregado productos'
            }
        </div>
     );
}
 
export default Carrito;

const Producto=styled.div`

padding:10px;
border-bottom:1px solid black;
font-size:14px;

`;

const NombreProducto=styled.p`

font-weight:bold;
color:#000;
font-size:16px;

`;