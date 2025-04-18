import React from 'react';
import { BsWhatsapp } from 'react-icons/bs'; // Importa el icono de WhatsApp de una librería como react-icons

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-sm font-semibold uppercase mb-4">Productos</h6>
          {/* Aquí podrías tener una lista de enlaces a productos */}
        </div>
        <div>
          <h6 className="text-sm font-semibold uppercase mb-4">Compañía</h6>
          <ul className="text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Contacto</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Ubicación</a></li>
            <li><a href="#" className="hover:text-gray-300">Opiniones</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-sm font-semibold uppercase mb-4">Servicios</h6>
          <ul className="text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Instalación</a></li>
            <li><a href="#" className="hover:text-gray-300">Mantenimiento</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-sm font-semibold uppercase mb-4">Social</h6>
          <ul className="text-sm">
            <li className="mb-2"><a href="#" className="hover:text-gray-300">Instagram</a></li>
            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-gray-500">
        <p>© 2025 SolveGrudes. Todos los derechos reservados</p>
      </div>

      {/* Botón de WhatsApp (inicialmente sin movimiento) */}
      <button className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1">
        <BsWhatsapp className="w-6 h-6" />
      </button>
    </footer>
  );
}