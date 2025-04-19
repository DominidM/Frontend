//import { Outlet } from 'react-router-dom';
//import React from 'react';
import { Carousel } from "../components/Carousel";
import { OfertasSection } from '../components/OfertasSection';
import { ImagenPrincipalConSecundarias } from '../components/PublicidadSection'; // Importa el componente
import { Publicidad } from '../components/Publicidad';
import { SeccionesProductos } from '../components/SeccionesProducto'; // Importa el nuevo componente
import  Marcas from '../components/Marcas'; // Importa el nuevo componente

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Carousel />
      <OfertasSection />
      <ImagenPrincipalConSecundarias /> {/* Simplemente renderiza el componente */}
      <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />
      <SeccionesProductos /> {/* Renderiza el componente de productos y marcas */}
      <Marcas/>

    </div>
  );
}

export default HomePage;