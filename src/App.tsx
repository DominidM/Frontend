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

  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo y búsqueda */}
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo WHC" className="h-10" />
            <FaSearch className="text-gray-600 cursor-pointer text-xl" />
          </div>

          {/* Menú desktop */}
          <ul className="hidden md:flex gap-6 text-gray-800 text-lg font-medium">
            <li className="hover:text-blue-600 cursor-pointer">¿Qué somos?</li>
            <li className="hover:text-blue-600 cursor-pointer">Ofertas</li>
            <li className="hover:text-blue-600 cursor-pointer">Productos</li>
            <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
          </ul>

          {/* Botón carrito y menú hamburguesa */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg">
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
              <li className="hover:text-blue-600 cursor-pointer">¿Qué somos?</li>
              <li className="hover:text-blue-600 cursor-pointer">Ofertas</li>
              <li className="hover:text-blue-600 cursor-pointer">Productos</li>
              <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
            </ul>
          </div>
        )}
      </nav>

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

      {/* Sección "¿QUÉ SOMOS?" */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 py-4 px-12">
        
        {/* Bloque de texto */}
        <div className="w-full md:w-1/2 bg-white text-gray-1000 p-7 flex items-center justify-center shadow-md">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4">¿QUÉ SOMOS?</h2>
          <p className="text-lg">
            Representaciones WHC es una empresa especializada en la venta de productos de gasfitería, 
            como fluxómetros, llaves, griferías y accesorios para instalaciones sanitarias. 
            Ofrecemos calidad, asesoramiento técnico y un amplio stock para proyectos residenciales, 
            comerciales e industriales.
          </p>
        </div>
      </div>


        {/* Bloque de imagen */}
        <div className="w-full md:w-1/2">
          <img 
            src="/picture.png" 
            alt="Nosotros" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>

            
      {/* Ofertas */}
      <div className="w-full bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">¡OFERTAS!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12">
        {/* Bloque 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/ruta-de-la-imagen1.jpg" alt="Producto 1" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Producto 1</h3>
            <p className="text-gray-600">Descripción breve</p>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/ruta-de-la-imagen2.jpg" alt="Producto 2" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Producto 2</h3>
            <p className="text-gray-600">Descripción breve</p>
          </div>
        </div>

        {/* Bloque 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/ruta-de-la-imagen3.jpg" alt="Producto 3" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Producto 3</h3>
            <p className="text-gray-600">Descripción breve</p>
          </div>
        </div>

        {/* Bloque 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/ruta-de-la-imagen4.jpg" alt="Producto 4" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">Producto 4</h3>
            <p className="text-gray-600">Descripción breve</p>
          </div>
        </div>
      </div>
    </div>


      {/* Productos */}
      <div className="">

      </div>

      {/* Contacto */}
      <div className="">

      </div>

      {/* FAQ */}
      <div className="">

      </div>

      {/* Contacto */}
      <div className="">

      </div>

      {/* Marcas */}
      <div className="">

      </div>

      
    </div>
  );
}
