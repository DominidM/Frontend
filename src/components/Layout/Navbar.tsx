import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../ui/CartContext'; // Asegúrate de que la ruta a tu CartContext sea correcta
import { ShoppingCartModal } from './ShoppingCartModal'; // Asegúrate de que la ruta a tu modal sea correcta

export function Navbar() {
  const desiredScrollOffset = 300; // Ajusta este valor en píxeles
  const navigate = useNavigate();
  const location = useLocation();

  const handleInicioClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    navigate('/'); // Navega a la URL principal
    setTimeout(() => {
      window.scrollTo({
        top: desiredScrollOffset,
        behavior: 'smooth',
      });
    }, 100); // Ajusta el tiempo según sea necesario
  };

  const [isOpen, setIsOpen] = useState(false);
  const [scrollToOfertas, setScrollToOfertas] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar la visibilidad del modal del carrito
  const { items, addTestProduct } = useCart(); // Obtén los items del carrito usando el hook personalizado

  useEffect(() => {
    if (location.pathname === '/' && scrollToOfertas) {
      const ofertasElement = document.getElementById('ofertas');
      if (ofertasElement) {
        ofertasElement.scrollIntoView({ behavior: 'smooth' });
        setScrollToOfertas(false);
      }
    }
  }, [location, scrollToOfertas]);

  const handleOfertasClick = (evento: React.MouseEvent<HTMLAnchorElement>) => {
    evento.preventDefault();

    if (location.pathname === '/') {
      const ofertasElement = document.getElementById('ofertas');
      if (ofertasElement) {
        ofertasElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setScrollToOfertas(true);
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `
    w-full bg-white shadow-md border-t-[8px] border-[#376BA0]
    transition-all duration-300 ease-in-out
    ${isScrolled ? "fixed top-0 left-0 z-50" : "relative"}
  `;

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  // *** useEffect PARA LA PRUEBA (CORREGIDO) ***
  useEffect(() => {
    addTestProduct();
  }, []); // Array de dependencias vacío: se ejecuta solo una vez al montar

  return (
    <>
      <header className={navbarClasses}>
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 border-r-2 border-[#376BA0] pr-4">
            <Link to="/" onClick={handleInicioClick}>
              <img src="/logo.png" className="h-10 w-auto" alt="Logo WHC" />
            </Link>
          </div>
          <div className="hidden md:flex flex-1 mx-6 max-w-md">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="/ofertas" onClick={handleOfertasClick} className="hover:text-blue-500">Ofertas</a>
            <Link to="/productos" className="hover:text-blue-500">Catalago</Link>
            <Link to="/contacto" className="hover:text-blue-500">Contacto</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div onClick={openCart} className="relative cursor-pointer">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                  {items.length}
                </span>
              )}
            </div>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
              <a href="/ofertas" onClick={handleOfertasClick} className="hover:text-blue-500">Ofertas</a>
              <Link to="/productos" className="hover:text-blue-500">Catalago</Link>
              <Link to="/contacto" className="hover:text-blue-500">Contacto</Link>
            </nav>
          </div>
        )}
      </header>
      {isCartOpen && <ShoppingCartModal onClose={closeCart} />}
      <div>
        {/* ... más contenido ... */}
      </div>
    </>
  );
}