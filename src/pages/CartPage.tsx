//import { Outlet } from 'react-router-dom';
//import React from 'react';
import { Carousel } from "../components/Carousel";
import { Publicidad } from '../components/Publicidad';


function CartPage() {
    return (
      <div className="min-h-screen bg-gray-100">
        <Carousel />
        <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />  
      </div>
    );
}

export default CartPage;
