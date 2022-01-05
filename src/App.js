import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route, Routes,Switch} from 'react-router-dom'
import styled from 'styled-components';
 
const App = () => {
  return ( 
    <BrowserRouter>
    <div>
    </div>
    </BrowserRouter>
   );
}
 
export default App;

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