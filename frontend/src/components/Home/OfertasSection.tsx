import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const OfertasSection: React.FC = () => {
  const ofertas = [
    { nombre: 'Sloan', descripcion: 'One Piece Oxford Descarga Dual - Blanco', precioOriginal: 1900, precioOferta: 799.99, imagenSrc: './oferta1.png' },
    { nombre: 'Trebol', descripcion: 'One Piece Oxford Descarga Dual - Blanco', precioOriginal: 1900, precioOferta: 1099.99, imagenSrc: './oferta1.png' },
    { nombre: 'Sloan', descripcion: 'One Piece Oxford Descarga Dual - Blanco', precioOriginal: 1500, precioOferta: 299.99, imagenSrc: './oferta1.png' },
    { nombre: 'Sloan', descripcion: 'One Piece Oxford Descarga Dual - Blanco', precioOriginal: 1900, precioOferta: 99.99, imagenSrc: './oferta1.png' },
    { nombre: 'Otro Producto 1', descripcion: 'Descripción del producto 5', precioOriginal: 1200, precioOferta: 599.99, imagenSrc: './oferta1.png' },
    { nombre: 'Otro Producto 2', descripcion: 'Descripción del producto 6', precioOriginal: 900, precioOferta: 399.99, imagenSrc: './oferta1.png' },
  ];

  const [currentOferta, setCurrentOferta] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1); // Inicialmente mostrar 1

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize(); // Llama al cargar el componente
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextOferta = () => {
    setCurrentOferta((prev) => Math.min(prev + itemsToShow, ofertas.length - itemsToShow));
  };

  const prevOferta = () => {
    setCurrentOferta((prev) => Math.max(0, prev - itemsToShow));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentOferta((prev) => Math.min(prev + itemsToShow, ofertas.length - itemsToShow));
    }, 4000);
    return () => clearInterval(intervalId);
  }, [itemsToShow]); // Re-ejecutar si cambia el número de items a mostrar

  const containerWidth = itemsToShow === 1 ? '100%' : `${3 * 100}%`;
  const transformValue = itemsToShow === 1 ? `translateX(-${currentOferta * 100}%)` : `translateX(-${(currentOferta / ofertas.length) * 100 * (ofertas.length / 3)}%)`;
  const ofertaWidth = itemsToShow === 1 ? '100%' : '33.333%';

  return (
    <section className="py-1">
      <div className="container mx-auto text-center relative">
        <div className="overflow-hidden rounded-md shadow-sm w-full flex justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: containerWidth,
              transform: transformValue,
            }}
          >
            {ofertas.map((oferta, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-3"
                style={{ width: ofertaWidth }}
              >
                <div className="rounded-md overflow-hidden border border-gray-200 bg-white shadow-lg p-5 max-w-sm mx-auto">
                  <img src={oferta.imagenSrc} alt={oferta.nombre} className="object-contain w-full h-48 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-700">{oferta.nombre}</h3>
                  <p className="text-sm text-gray-500 mb-2">{oferta.descripcion}</p>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600 line-through text-sm">S/ {oferta.precioOriginal.toFixed(2)}</span>
                    <span className="text-xl font-bold text-red-500">S/ {oferta.precioOferta.toFixed(2)}</span>
                  </div>
                  <button className="mt-4 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-sm">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {ofertas.length > itemsToShow && (
          <>
            <button
              onClick={prevOferta}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextOferta}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};