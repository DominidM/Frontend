import React from 'react';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenSrc?: string;
}


export const SeccionesProductos: React.FC = () => {
  const productosBano: Producto[] = [
    { nombre: 'Sloan One Piece Oxford', descripcion: 'Descarga Dual - Blanco', precio: 799.99, imagenSrc: '/assets/bano1.jpg' },
    { nombre: 'Trebol One Piece Oxford', descripcion: 'Descarga Dual - Blanco', precio: 1099.99, imagenSrc: '/assets/bano2.jpg' },
    { nombre: 'Wasser One Piece Saturno', descripcion: 'Descarga Dual - Blanco', precio: 299.99, imagenSrc: '/assets/bano3.jpg' },
    { nombre: 'Sloan One Piece Oxford', descripcion: 'Descarga Dual - Blanco', precio: 299.99, imagenSrc: '/assets/bano4.jpg' },
    { nombre: 'Otro Producto Baño 1', descripcion: 'Descripción adicional', precio: 599.99, imagenSrc: '/assets/bano5.jpg' },
    { nombre: 'Otro Producto Baño 2', descripcion: 'Descripción adicional', precio: 899.99, imagenSrc: '/assets/bano6.jpg' },
        { nombre: 'Rivera Lavatorio One Piece', descripcion: 'Cerámico Blanco', precio: 299.99, imagenSrc: '/assets/lavadero1.jpg' },
    { nombre: 'Trebol Mini Florencia Oxford', descripcion: 'Descarga Dual - Blanco', precio: 1099.99, imagenSrc: '/assets/lavadero2.jpg' },
    { nombre: 'Trebol One Piece Oxford', descripcion: 'Descarga Dual - Blanco', precio: 299.99, imagenSrc: '/assets/lavadero3.jpg' },
    { nombre: 'Trebol Mini Florencia Oxford', descripcion: 'Descarga Dual - Blanco', precio: 299.99, imagenSrc: '/assets/lavadero4.jpg' },
    { nombre: 'Otro Lavadero 1', descripcion: 'Descripción adicional', precio: 499.99, imagenSrc: '/assets/lavadero5.jpg' },
    { nombre: 'Otro Lavadero 2', descripcion: 'Descripción adicional', precio: 799.99, imagenSrc: '/assets/lavadero6.jpg' },
  ];


  return (
    <div className="bg-gray-50 py-1 mb-8">
      <div className="container mx-auto text-center">  
        {/* Sección Mejora tu baño con WHS */}
        <div className="overflow-x-auto py-4 mb-8">
          <div className="flex gap-5 w-max"> {/* Aumenté el gap a 16 */}
            {productosBano.map((producto, index) => (
              <div key={index} className="bg-white rounded-md shadow-md p-6 text-center w-72 flex-shrink-0">
                <div className="h-40 w-full rounded-md mb-3 overflow-hidden">
                  <img src={producto.imagenSrc} alt={producto.nombre} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="text-sm font-semibold text-gray-700 truncate mb-1">{producto.nombre}</h3>
                <p className="text-xs text-gray-500 truncate mb-2">{producto.descripcion}</p>
                <p className="text-blue-500 font-semibold text-sm mt-2">S/ {producto.precio.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};