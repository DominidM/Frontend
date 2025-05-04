//import { Outlet } from 'react-router-dom';
//import React from 'react';
import { Publicidad } from '../components/Publicidad';
import { Hero } from "../components/Hero";
import { Cart } from "../components/Cart/Cart";
import { SimilarProductsCarousel } from "../components/Cart/SimilarProductsCarousel";



function CartPage() {
  const relatedProducts = [
    { id: 1, name: "Grifería de lavamanos", price: 45.99, image: "/assets/griferia1.webp" },
    { id: 2, name: "Fluxómetro premium", price: 89.50, image: "/assets/fluxometro2.webp" },
    { id: 3, name: "Llave angular metálica", price: 18.75, image: "/assets/llave2.webp" },
    { id: 4, name: "Accesorio PVC", price: 5.25, image: "/assets/pvc1.webp" },
    { id: 5, name: "Llave angular metálica", price: 18.75, image: "/assets/llave2.webp" },
    { id: 6, name: "Accesorio PVC", price: 5.25, image: "/assets/pvc1.webp" },
    { id: 7, name: "Llave angular metálica", price: 18.75, image: "/assets/llave2.webp" },
    { id: 8, name: "Accesorio PVC", price: 5.25, image: "/assets/pvc1.webp" },
  ];
  
    return (
      <div className="min-h-screen bg-gray-100">
        <Hero />  
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
          <Cart />
        </div>
        <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />  
        <SimilarProductsCarousel products={relatedProducts} />
      </div>
    );
}

export default CartPage;
