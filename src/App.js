import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import styled from 'styled-components';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';
const App = () => {
   const [carrito,cambiarcarrito]=useState([]);
   const productos=
   [
       {id:1, nombre:'Producto 1'},
       {id:2, nombre:'Producto 2'},
       {id:3, nombre:'Producto 3'},
       {id:4, nombre:'Producto 4'}
   ]
   
   const AgregarProductosAlCarrito=(idproductoagregar,nombreproductoagregar)=>{

      //si el carrito no tiene elementos, hara lo siguiente
      if (carrito.length===0) {
         cambiarcarrito([{id:idproductoagregar,nombre:nombreproductoagregar, cantidad:1}])
      }
      //si el carrito ya tiene elementos
      else
      {
         //para editarlo tenemos que clonarlo
         const nuevoCarrito=[...carrito];
         //comprobar si el carrito ya tiene el id, esto devuelve un true o false
        const yaEstaEnElCarrito= nuevoCarrito.filter((productodenuevocarrito)=>{
            return productodenuevocarrito.id===idproductoagregar
         }).length>0

         //si yaestaEnElcarrito es true, entonces se debe actualizar, se debe buscar cual es su posicion y luego actualizarlo
      
      if(yaEstaEnElCarrito===true)
      {
         
         nuevoCarrito.forEach((productoDeCarrito,index)=>{
            if(idproductoagregar===productoDeCarrito.id){
               const cantidad=nuevoCarrito[index].cantidad;
               nuevoCarrito[index]={id:idproductoagregar,nombre:nombreproductoagregar,cantidad:cantidad+1}

            }
         })
      }
      //si no esta en carrito, lo agregamos con el metodo push
      else
      {
         nuevoCarrito.push({id:idproductoagregar,nombre:nombreproductoagregar,cantidad:1})
      }
      cambiarcarrito(nuevoCarrito);
      }
   
   }
  return ( 
    <BrowserRouter>
  
    <Contenedor>
    <Menu>
    <NavLink to='/'>Inicio</NavLink>
    <NavLink to='/Blog'>Blog</NavLink>
    <NavLink to='/Tienda'>Tienda</NavLink>
    </Menu>
    <main>
    <Routes>
    <Route  path='/' element={<Inicio></Inicio>}></Route>
    <Route path='/Blog' element={<Blog></Blog>}></Route>
    <Route path='/Tienda' element={<Tienda productos={productos} cambiarcarrito={cambiarcarrito} carrito={carrito} AgregarProductosAlCarrito={AgregarProductosAlCarrito} ></Tienda>}></Route>
    <Route path='*' element={<Error404></Error404>}></Route>
    </Routes>
    </main>
    <aside>
    <Carrito carrito={carrito} cambiarcarrito={cambiarcarrito}></Carrito>
    </aside>
    </Contenedor>

    </BrowserRouter>
   );
}
 
export default App;





const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;



//COMPONENTES CSS OLD------------------------------------------------



const ContenedorPrincipal= styled.div`
   padding:40px;
   width:90%;
   max-width:700px;
`;

const Main= styled.main`
background:#fff;
padding:40px;
border-radius:10px;
box-shadow: 0px 0px 5px rgba(129,129,129 0.1);
`;