import { FaSearch, FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useState } from "react";



export default function NavbarCarrusel() {
  const [menuOpen, setMenuOpen] = useState(false);
  const images = ["/img1.webp", "/img2.webp", "/img3.webp", "/img4.webp"];
  
 // Función para hacer scroll suave al hacer clic en el navbar
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  
  return (
    
    <div className="w-full">
      {/* Navbar */}
                {/* Mejorar*/}
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo y búsqueda */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo WHC" className="h-10" />
            <FaSearch className="text-gray-600 cursor-pointer text-xl" />
          </div>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-6 text-gray-800 text-lg font-medium">
            <li
              className="hover:text-blue-600 cursor-pointer transition duration-300"
              onClick={() => scrollToSection("somos")}
            >
              ¿Qué somos?
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer transition duration-300"
              onClick={() => scrollToSection("ofertas")}
            >
              Ofertas
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer transition duration-300"
              onClick={() => scrollToSection("productos")}
            >
              Productos
            </li>
            <li
              className="hover:text-blue-600 cursor-pointer transition duration-300"
              onClick={() => scrollToSection("contacto")}
            >
              Contacto
            </li>
          </ul>

          {/* Botón carrito y menú hamburguesa */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg"
            >
              Carrito
            </Button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full">
            <ul className="flex flex-col gap-4 text-gray-800 text-lg font-medium">
              <li
                className="hover:text-blue-600 cursor-pointer transition duration-300"
                onClick={() => {
                  scrollToSection("somos");
                  setMenuOpen(false);
                }}
              >
                ¿Qué somos?
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer transition duration-300"
                onClick={() => {
                  scrollToSection("ofertas");
                  setMenuOpen(false);
                }}
              >
                Ofertas
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer transition duration-300"
                onClick={() => {
                  scrollToSection("productos");
                  setMenuOpen(false);
                }}
              >
                Productos
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer transition duration-300"
                onClick={() => {
                  scrollToSection("contacto");
                  setMenuOpen(false);
                }}
              >
                Contacto
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Espaciado para evitar que el navbar fijo cubra contenido */}
      <div className="h-16"></div>

      {/* Carrusel */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-4">
        <Carousel>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-button carousel-button-left" />
          <CarouselNext className="carousel-button carousel-button-right" />
        </Carousel>
        <div className="absolute left-0 bottom-0 w-full h-20 bg-black/60">
          {/* Capa negra difuminada */}
        </div>
        <div className="absolute bottom-7 left-0 bg-primary text-white p-6 text-xl font-semibold rounded-none w-[40%]">
          Elegante y moderno
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 py-4 px-12">

      {/* Bloque de texto */}
      <div className="w-full md:w-1/2 bg-white text-black p-10 flex items-center justify-center shadow-md">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">¿QUÉ SOMOS?</h2>
          <p className="text-lg leading-relaxed">
            Representaciones WHC es una empresa especializada en la venta de productos de gasfitería, 
            como fluxómetros, llaves, griferías y accesorios para instalaciones sanitarias. 
            Ofrecemos calidad, asesoramiento técnico y un amplio stock para proyectos residenciales, 
            comerciales e industriales.
          </p>
        </div>
      </div>

      {/* Bloque de imagen con fondo azul */}
      <div className="w-full md:w-1/2 bg-[#093362] flex items-center justify-center">
        <img 
          src="/picture.png" 
          alt="Nosotros" 
          className="w-2/3 h-auto"
        />
      </div>
      </div>

            
      {/* Sección de Ofertas */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ofertas</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Oferta 1</span>
          </div>
          <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Oferta 2</span>
          </div>
          <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Oferta 3</span>
          </div>
        </div>
      </div>
      
      {/* Lista de Productos */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lista de Productos</h2>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="w-full h-32 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600">Producto {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mapa */}
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Mapa aquí</span>
          </div>
          {/* Formulario */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Nombre" className="border p-2 w-full rounded" />
              <input type="text" placeholder="Teléfono" className="border p-2 w-full rounded" />
            </div>
            <input type="email" placeholder="Correo Electrónico" className="border p-2 w-full rounded" />
            <input type="text" placeholder="Empresa" className="border p-2 w-full rounded" />
            <textarea placeholder="Mensaje" rows={4} className="border p-2 w-full rounded"></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Enviar</button>
          </form>
        </div>
      </div>

      {/* Sección de FAQ */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">¿Cómo puedo hacer un pedido?</summary>
            <p className="mt-2 text-gray-600">Puedes hacer un pedido a través de nuestra tienda en línea o contactándonos directamente.</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">¿Cuáles son los métodos de pago?</summary>
            <p className="mt-2 text-gray-600">Aceptamos tarjetas de crédito, transferencias bancarias y pagos en efectivo.</p>
          </details>
        </div>
      </div>

      {/* Sección de Marcas */}
      <div className="max-w-5xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Trabajamos con las mejores marcas</h2>
        <div className="flex justify-center gap-6">
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
          <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">Representaciones W.H.C</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <span className="text-pink-500 text-2xl">📸</span>
              <span className="text-red-500 text-2xl">🎵</span>
              <span className="text-blue-500 text-2xl">📘</span>
            </div>
          </div>
          <p className="text-center text-sm mt-4 md:mt-0">© 2025 SolveGrades. Todos los derechos reservados</p>
          <div className="flex gap-4">
            <span className="text-green-500 text-2xl">📲</span>
            <span className="text-blue-500 text-2xl">⬆️</span>
          </div>
        </div>
      </footer>
    </div>
      
      
  );
}
