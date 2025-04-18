import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md border-t-4 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo con borde derecho */}
        <div className="flex items-center space-x-2 border-r-2 border-blue-500 pr-4"> {/* Agregamos border-r-2 border-blue-500 pr-4 */}
          <img src="/logo-whc.png" className="h-8 w-auto" />
        </div>

        {/* Search input (desktop only) */}
        <div className="hidden md:flex flex-1 mx-6 max-w-md">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Navigation links (desktop only) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-500">Ofertas</a>
          <a href="#" className="hover:text-blue-500">Productos</a>
          <a href="#" className="hover:text-blue-500">Contacto</a>
        </nav>

        {/* Icons & Menu */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">1</span>
          </button>

          {/* Hamburger icon (mobile only) */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            <a href="#" className="hover:text-blue-500">Ofertas</a>
            <a href="#" className="hover:text-blue-500">Productos</a>
            <a href="#" className="hover:text-blue-500">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}