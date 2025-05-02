//import { Outlet } from 'react-router-dom';
//import React from 'react';
import { Carousel } from "../components/Carousel";
import { Publicidad } from '../components/Publicidad';
import  Marcas from '../components/Marcas'; // Importa el nuevo componente

function EspecificacionProduct() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Carousel />
        <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />  
        <Marcas/>
      </div>
    );
}

export default EspecificacionProduct;
