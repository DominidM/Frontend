import { Outlet } from 'react-router-dom';
import { Carousel } from "../components/Carousel";
import { WhatsAppButton } from '../components/WhatsAppButton';
import { OfertasSection } from '../components/OfertasSection';
import React from 'react';
import { ImagenPrincipalConSecundarias } from '../components/PublicidadSection'; // Importa el componente
import { Publicidad } from '../components/Publicidad';
import { SeccionesProductosYMarcas } from '../components/SeccionesProductosYMarcas'; // Importa el nuevo componente


function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Carousel />
      <OfertasSection />
      <ImagenPrincipalConSecundarias /> {/* Simplemente renderiza el componente */}
      <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />
      <SeccionesProductosYMarcas /> {/* Renderiza el componente de productos y marcas */}
      <WhatsAppButton />
    </div>
  );
}

export default HomePage;