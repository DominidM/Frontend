import React from 'react';
import { ShoppingCart } from 'lucide-react'; // Asegúrate de tener instalada la librería lucide-react

interface PublicidadProps {
  textoPromocional: string;
}

export const Publicidad: React.FC<PublicidadProps> = ({ textoPromocional }) => {
  const backgroundColor = '#0d3c6b'; // Color azul del fondo
  const textColor = '#ffffff'; // Color blanco del texto y el icono

  return (
    <div className="w-full py-3 flex items-center justify-center" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <ShoppingCart className="w-8 h-8 mr-2" />
      <div className="h-8 border-l border-white mx-2"></div>
      <p className="font-semibold text-lg">{textoPromocional}</p>
    </div>
  );
};